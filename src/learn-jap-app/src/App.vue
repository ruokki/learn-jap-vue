<template>
  <div id="app">
    <Nav appName="Lean Jap Vue" />
    <Param />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Nav from './components/Nav.vue';
import Param from './components/Param.vue';

@Component({
  components: {
    Nav,
    Param
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  overflow: hidden;
}
</style>
