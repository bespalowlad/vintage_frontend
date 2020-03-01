<template>
  <div id="app">
    <index />
  </div>
</template>

<script>
import Index from './pages/Index.vue';

export default {
    name: 'App',

    components: {
        Index,
    },
};
</script>

<style lang="scss">
@import '@/assets/sass/app.scss';
</style>
