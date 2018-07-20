export default{
  addTodo(state,{text}){
    state.todos.push({
      text,
      done:false
    });
  },
  delTodo(state,index){
    state.todos.splice(index,1);
  },
  toggleTodo(state,index){
    state.todos[index].done = !state.todos[index].done;
  },
  toggleAll(state,done){
    // done 传递过来的是一个布尔值，原来是true现在就是false
    state.todos.forEach(todo => todo.done = done);
  },
  clearCompleted(state){
    state.todos = state.todos.filter(todo => !todo.done);
  },
  updateTodo(state,{text,index}){
    state.todos[index].text = text;
  }
}