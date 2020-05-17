<template>
    <div>
        <p>À quoi correspond le caractère {{ waitedChar.char }} ?</p>
        <div class="columns">
            
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
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
    waitedChar: any;
    listeChar: any[] = [];

    data() {
        return {
            waitedChar: null,
            listeChar: []
        }
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

        // on prend une réponse au hasard
        randomNb = Math.floor(Math.random() * Math.floor(this.listeChar.length));
        this.waitedChar = this.listeChar[randomNb];
    }

    mounted() {
        this.setGame();
    }

    beforeUpdate() {
        this.setGame();
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
