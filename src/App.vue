<script setup lang="ts">
</script>

<template>
  <header>
    <div class="content">
      <div class="nav">
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
  .content{
    display: flex;
    flex-direction: row-reverse;
  }

  .nav{
    width: 100%;
    padding: 10px;
    border: 1px solid;
    text-align: end;
    background: #565050;
    border-bottom: 6px solid red;
  }

  .nav > a{
    padding: 10px;
    text-decoration: none;
    color: white;
  }

  .nav > a:hover{
    background: rgb(11, 1, 39);
    color: white;
  }
</style>
