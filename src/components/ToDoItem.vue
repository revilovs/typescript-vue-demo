<template>
    <li>
        <b-form-checkbox v-model="done">
            {{todo.description}}
        </b-form-checkbox>
    </li>
</template>

<script>
export default {
    name: 'ToDoItem',
    props: [ 
        'todo'
    ],
    data() {
        return {
            done: this.todo.done
        };
    },
    watch: {
        done() {
            this.$emit('toggleDone');
        }
    }
}
</script>

<style>

</style>
