<template>
    <div v-if="allReady">
        <h1 class="title">À quoi correspond le caractère {{ waitedChar.char }} ?</h1>
        <div class="columns is-multiline is-vcentered is-mobile">
            <div v-for="char in listeChar" :key="char.char" class="column is-half">
                <b-button 
                    @click="verifyAnswer(char.rep, $event)" 
                    class="is-large"
                    type="is-primary"
                    outlined
                    expanded
                    >
                        {{ char.rep }}
                </b-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { mapGetters } from 'vuex';

@Component({
    computed: {
        ...mapGetters(['getTiles', 'isHira', 'isKata', 'getCharSet'])
    }
})
export default class Game extends Vue {
    getTiles: any;
    isHira: any;
    isKata: any;
    getCharSet: any;
    waitedChar: any = null;
    listeChar: any[] = [];
    btnDis?: boolean;

    data() {
        return {
            waitedChar: null,
            listeChar: [],
            buttonType: false,
            btnDis: false
        }
    }

    @Watch('getTiles')
    onChangeTiles() {
        this.watcherCallback();
    }

    @Watch('isHira')
    onChangeHira() {
        this.watcherCallback();
    }

    @Watch('isKata')
    onChangeKata() {
        this.watcherCallback();
    }

    watcherCallback(): void {
        this.setGame();
    }

    get allReady() {
        if(
            this.waitedChar === null ||
            this.listeChar.length === 0
        ) {
            return false;
        }

        return true;
    }

    setGame(): void {
        let selectedSet = '';
        let randomNb = 0;
        const alreadyIn = [];
        this.listeChar = [];

        if(this.isHira && this.isKata) {
            const sets: string[] = ['hira', 'kata'];
            selectedSet = sets[Math.floor(Math.random() * Math.floor(2))];
        }
        else if(!this.isHira && !this.isKata) {
            return;
        }
        else {
            selectedSet = this.isHira ? 'hira' : 'kata';
        }

        const charSet = this.getCharSet[selectedSet];
        const lengthChar = this.getCharSet[selectedSet].length;

        // Génération des caractères proposés
        while(alreadyIn.length < this.getTiles) {
            randomNb = Math.floor(Math.random() * Math.floor(lengthChar));
            if(alreadyIn.indexOf(charSet[randomNb].rep) === -1) {
                this.listeChar.push(charSet[randomNb]);
                alreadyIn.push(charSet[randomNb].rep)
            }
        }

        this.shuffleArray(this.listeChar);

        // on prend une réponse au hasard
        randomNb = Math.floor(Math.random() * Math.floor(this.listeChar.length));
        this.waitedChar = this.listeChar[randomNb];
    }

    verifyAnswer(rep: string, $event: any) {
        if(this.btnDis) {
            return;
        }

        if(rep === this.waitedChar.rep) {
            this.$buefy.toast.open({
                message: "Bonne réponse !",
                type: "is-success",
                queue: false,
                position: "is-bottom"
            });
            
            $event.target.classList.remove('is-primary', 'is-outlined');
            $event.target.classList.add('is-success');
            this.btnDis = true;

            setTimeout(() => {
                this.btnDis = false;
                this.setGame();
            }, 2000);
        }
        else {
            this.$buefy.toast.open({
                message: "Mauvaise réponse !",
                type: "is-danger",
                queue: false,
                position: "is-bottom"
            });
        }
    }

    shuffleArray(myArray: any[]): any[] {
        let m = myArray.length, t, i;

        // While there remain elements to shuffle
        while (m) {
            // Pick a remaining element…
            i = Math.floor(Math.random() * m--);

            // And swap it with the current element.
            t = myArray[m];
            myArray[m] = myArray[i];
            myArray[i] = t;
        }

        return myArray;
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.columns {
    padding: 0 8px;
}
</style>
