<template>
  <li class="todo" :class="{completed:todo.done,editing:editing}">
    <div class="view">
      <input type="checkbox" name="" class="toggle" :checked="todo.done" @change="toggleTodo(index)">
      <label @dblclick="editing=true">{{todo.text}}</label>
      <button class="destroy" @click="delTodo(index)"></button>
    </div>
    <input type="text" name="" class="edit" :value="todo.text" @keyup.enter="doneEdit" @blur="doneEdit" @keyup.esc="cancelEdit">
  </li>
</template>
<script>
import {mapMutations} from 'vuex'
export default{
  props:{
    todo:Object,
    index:Number
  },
  data(){
    return {
      editing:false
    }
  },
  methods:{
    ...mapMutations(['delTodo','toggleTodo','updateTodo']),
    doneEdit(e){
      var text = e.target.value.trim();
      if(text){
        this.updateTodo({text,index:this.index});
      }else{
        this.delTodo(this.index);
      }
    },
    cancelEdit(){
      this.editing = false;
    }
  }
}
</script>
