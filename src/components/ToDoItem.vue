<template>
    <li>
        <b-form-checkbox v-model="done">
            {{todo.priority}} {{todo.description}}
        </b-form-checkbox>
    </li>
</template>

<script lang="ts">
import Vue from 'vue';
import {Todo} from '../types'

export default Vue.extend({
    name: 'ToDoItem',
    props: { 
        todo: {
            type: Object as () => Todo
        }
    },
    data() : {done: boolean} {
        return {
            done: this.todo.done
        };
    },
    watch: {
        done() {
            this.$emit('toggleDone');
        }
    }
});
</script>

<style>

</style>
