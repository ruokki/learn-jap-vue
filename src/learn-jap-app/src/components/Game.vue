<template>
    <div>
        <div v-for="i in setTile" :key="i" class="columns">
            <div class="column">{{ i }}</div>
            <div class="column">{{ i + 1 }}</div>
        </div>
        <div v-if="nbTile % 2 === 1" class="columns">
            <div class="column">last</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Game extends Vue {
    nbTile = 0;

    data() {
        return {
            //nbTile: this.$store.state.tiles
            nbTile: 4
        }
    }

    get setTile(): number {
        return Math.floor(this.nbTile / 2);
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
