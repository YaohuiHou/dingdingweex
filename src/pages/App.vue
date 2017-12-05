<template>
  <div class="app-container">
    <router-view style="flex:1;"></router-view>
  </div>
</template>
<script>
  export default {
    name: 'root'
  }
</script>

<style>
  .app-container{
    background-color: #fff;
  }
  body{
    background-color: #F3F4F5;
  }
</style>