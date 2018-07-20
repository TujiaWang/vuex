export default{
  allChecked(state){
    return state.todos.every(todo => todo.done);
  },
  remaining(state){
    return state.todos.filter(todo => !todo.done).length;
  }
}