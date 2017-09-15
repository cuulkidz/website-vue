<template>
  <div class="app">
    <WebHeader/>
    <router-view></router-view>
    <WebFooter/>
  </div>
</template>

<script>
import { Header as WebHeader, Footer as WebFooter } from '../components/'
export default {
  name: 'Full',
  components: {
    WebHeader,
    WebFooter
  }
}
</script>