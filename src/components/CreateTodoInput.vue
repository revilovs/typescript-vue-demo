<template>
    <div>
        <b-form-group label="Create new ToDo" label-for="newTodoInput" description="Enter a todo and hit return">
            <b-form-input type="text" id="newTodoInput" v-on:keyup.enter.native="emitNewTodo" v-model="inputText"></b-form-input>
        </b-form-group>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'CreateToDoInput',
    data() {
        return {
            inputText: ''
        }
    },
    methods: {
        emitNewTodo: function() {
            this.$emit('todoCreated',{
                description: this.inputText
            });
            this.inputText = ''
        }
    }
});
</script>

<style>

</style>
