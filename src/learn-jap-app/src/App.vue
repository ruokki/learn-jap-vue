<template>
  <div id="app">
    <Nav appName="Lean Jap Vue" />
    <Param />
    <Game />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from './components/Nav.vue';
import Param from './components/Param.vue';
import Game from './components/Game.vue';

@Component({
  components: {
    Nav,
    Param,
    Game
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  overflow: hidden;
}
</style>
