<template>
  <form class="section">
    <div class="block">
        <h1 class="title">Liste des syllabaires</h1>
        <div class="block center">
            <b-checkbox v-model="hira" size="is-medium">Hiragana</b-checkbox>
            <b-checkbox v-model="kata" size="is-medium">Katakana</b-checkbox>
        </div>
    </div>
    <div class="block">
        <h1 class="title">Difficulté</h1>
        <div class="block center">
            <b-radio v-model="nbTile" name="dificulty" size="is-medium" :native-value="2">Facile</b-radio>
            <b-radio v-model="nbTile" name="dificulty" size="is-medium" :native-value="4">Nomal</b-radio>
            <b-radio v-model="nbTile" name="dificulty" size="is-medium" :native-value="6">Difficile</b-radio>
        </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Param extends Vue {
  data() {
    return {
      hira: false,
      kata: false,
      nbTile: 4
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .block.center {
        display: flex;
        justify-content: space-around;
    }
</style>
