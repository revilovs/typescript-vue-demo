<template>
  <div id="app">
    <b-container>
      <b-jumbotron header="ToDo-List" lead="Here we go again"></b-jumbotron>
      <create-todo-input v-on:todoCreated="addTodo"></create-todo-input>
      <b-button variant="danger" @click="clearDone">Clear done items</b-button>
      <ul>
        <to-do-item v-for="(todo) in todos" v-bind:key="todo.description" v-bind:todo="todo" v-on:toggleDone="todo.done = !todo.done"></to-do-item>
      </ul>
    </b-container>
  </div>
</template>

<script lang="ts">
import ToDoItem from './components/ToDoItem.vue';
import CreateToDoInput from './components/CreateTodoInput.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  data () {
    return {
      todos: [
        {
          description: 'PBO Vortrag vorbereiten',
          done: true
        },
        {
          description: 'TypeScript konfigurieren',
          done: 'false'
        }
      ]
    }
  },

  components: {
    'to-do-item': ToDoItem,
    'create-todo-input': CreateToDoInput
  },

  methods: {
    addTodo: function(event: {description: string}) {
      this.todos.push({
        descr: event.description,
        done: false
      })
    },

    clearDone: function(){
      this.todos = this.todos.filter( (todo) => !todo.done);
    }
  }
});

</script>

<style lang="scss">
</style>
