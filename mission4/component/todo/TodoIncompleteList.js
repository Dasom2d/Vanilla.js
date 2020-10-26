export default function TodoIncompleteList(todoObj){
    this.state = {
      todos: [],
      $todoArea: todoObj.$todoArea
    }
    this.toggleTodo = todoObj.fn_toggleTodo;
    this.deleteTodo = todoObj.fn_deleteTodo;
   
    this.$completeUl = document.createElement('ul');

    const that = this;

    this.render = () => {
      this.$completeUl.innerHTML = `미완료된 할 일`+this.state.todos.map((todo, index) => {
            return `
              <li data-index=${index}>
                ${todo.content}
                <button>삭제</button>
              </li>` 
          }).join('');
      this.state.$todoArea.appendChild(this.$completeUl);
    }

    this.setState = (newTodos) => {
        this.state.todos = newTodos;
        this.render();
    }

    this.todoListAddEventListner = () => {
    }

    this.todoListAddEventListner();
}
