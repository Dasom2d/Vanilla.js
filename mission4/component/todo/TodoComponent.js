export default function TodoComponent(todoObj){
    this.state = {
      todos: [],
      $todoArea: todoObj.$todoArea
    }
    this.toggleTodo = todoObj.fn_toggleTodo;
    this.deleteTodo = todoObj.fn_deleteTodo;
   
    this.$ul = document.createElement('ul');
    this.draggedId = '';

    const that = this;

    this.render = () => {
      this.$ul.innerHTML = this.state.todos.map((todo, index) => {
          return todo.isCompleted ? ` 
            <li data-index=${index} data-id=${todo._id} draggable="true" >
              (완료) <s class="font-red">${todo.content}</s>
              <button>삭제</button>
            </li>
          ` : ` 
            <li data-index=${index}  data-id=${todo._id} draggable="true" > ${todo.content} 
              <button>삭제</button>
            </li>
          `
        }).join('');
      this.state.$todoArea.appendChild(this.$ul);

    }

    this.setState = (newTodos) => {
        this.state.todos = newTodos;
        this.render();
    }



    this.todoListAddEventListner = () => {    
      document.addEventListener("dragover", function(e) {
        e.preventDefault();
      }, false);

      document.addEventListener("dragstart", function(e) {
        if(e.target.tagName === 'LI' || e.target.tagName === 'S'){
          e.dataTransfer.setData("text", e.target.closest("li").dataset.id);
        }
      }, false);

      document.addEventListener("drop", function(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        that.toggleTodo(data)
      }, false);

  }

  this.todoListAddEventListner();
}
