<template>
    <div>
        <div class="container">
            <p>Flter</p>
            <select name="option" @change="filterData($event)">
                <option value="200">200</option>
                <option value="100">100</option>
                <option value="50">50</option>
                <option value="10">10</option>
            </select>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
   name:"FilterTodos",
   methods: mapActions(["filterData"])
}
</script>

<style scoped>
    .container{
        display: flex;
        max-height: 30px;
        align-items: center;
        margin-bottom: 20px
    }
    p{
        margin-right: 20px
    }
</style>
