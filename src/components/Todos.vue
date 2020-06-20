<template>
    <div>
        <div class="todos">
            <div class="todo" v-for="todo in AllTodos" :key="todo.id">{{ todo.title }}</div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name:"Todos",
    computed: mapGetters(["AllTodos"])
    ,
    methods:{
        ...mapActions(["fetchData"])
    },
    created(){
        this.fetchData();
    }
}
</script>

<style scoped>
    h1{
        color: rebeccapurple
    }
    .todos{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }

    .todo{
        background-color: #0080ff;
        color: #fff;
        padding: 20px 30px;
        border-radius: 10px;
    }
</style>
