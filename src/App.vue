<template>
  <div id="app">
    <h1>All To Do</h1>
    <FilterTodos/>
    <Todos/>
  </div>
</template>

<script>
import Todos from './components/Todos.vue';
import FilterTodos from './components/FilterTodos.vue';
 
export default {
  name: 'App',
  components: {
    Todos,
    FilterTodos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
