<template>
  <section class="todoapp">
    <header class="header">
				<h1>todos</h1>
				<input class="new-todo" autofocus autocomplete="off" placeholder="What needs to be done?" @keyup.enter="addTodo">
		</header>
    <section class="main">
      <input type="checkbox" name="" class="toggle-all" :checked="allChecked" @click="toggleAll(!allChecked)">
      <ul class="todo-list">
        <template v-for="(todo,index) in filterTodos">
          <el-todo :todo="todo" :index="index" :key="index"></el-todo>
        </template>
      </ul>
    </section>
    <footer class="footer">
				<span class="todo-count">
					<strong>{{remaining}}</strong> items left
				</span>
				<ul class="filters">
					<li><a href="#/all" :class="{selected:visibility=='all'}" @click.prevent="visibility='all'">All</a></li>
					<li><a href="#/active" :class="{selected:visibility=='active'}" @click.prevent="visibility='active'">Active</a></li>
					<li><a href="#/completed" :class="{selected:visibility=='completed'}" @click.prevent="visibility='completed'">Completed</a></li>
				</ul>
				<button class="clear-completed" v-show="todos.length > remaining" @click="clearCompleted">
					Clear completed
				</button>
		</footer>
  </section>
</template>

<script>
import Todo from './Todo'
import {mapState,mapGetters, mapMutations} from 'vuex'
const filters = {
  all:todos => todos,
  active:todos => todos.filter(todo => !todo.done),
  completed:todos => todos.filter(todo => todo.done)
}
export default {
  data () {
    return {
      visibility:'all'
    }
  },
  components:{
    'el-todo':Todo
  },
  computed:{
    ...mapState(['todos']),
    ...mapGetters(['allChecked','remaining']),
    filterTodos(){
      return filters[this.visibility](this.todos);
    }
  },
  methods:{
    ...mapMutations(['toggleAll','clearCompleted']),
    addTodo(e){
      var text = e.target.value.trim();
      if(text){
        this.$store.commit('addTodo',{text});
        e.target.value = '';
      }
    }
  }
}
</script>

<style>
</style>