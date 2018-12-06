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
import {Todo, Priority} from './types'

export default Vue.extend({
  name: 'App',
  data (): {todos: Todo[], nextID: number} {
    return {
      todos: [
        {
          id: 0,
          description: 'PBO Vortrag vorbereiten',
          done: true,
          priority: '🤷‍♂️'
        },
        {
          id: 1,
          description: 'TypeScript konfigurieren',
          done: false,
          priority: '‼'
        }
      ],

      nextID: 2
    }
  },

  components: {
    'to-do-item': ToDoItem,
    'create-todo-input': CreateToDoInput
  },

  methods: {
    addTodo: function(event: {description: string}) {
      this.todos.push({
        id: this.nextID++,
        description: event.description,
        done: false,
        priority: '❗️'
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
