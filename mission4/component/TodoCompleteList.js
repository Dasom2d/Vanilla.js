
export default function TodoList(todoObj){
    this.$completeTodoList = todoObj.$completeTodoList;
    this.todos = todoObj.competeTodos;
    this.isValid = todoObj.fn_isValid;
   
    this.$ul = document.createElement('ul');

    this.render = () => {
        this.$ul.innerHTML = this.todos.map((todo, index) => {
            return todo.isCompleted ? `
              <li data-index=${index}>
                (완료) <s class="font-red">${todo.content}</s>
                <button>삭제</button>
              </li>` : '';
          }).join('');
        this.$completeTodoList.prepend(this.$ul);
    }

    this.setState = (todos) => {
        this.todos = todos;
        this.render();
    }

    this.todoListAddEventListner = () => {
        this.$ul.addEventListener('click', (e)=>{
            if(e.target.tagName === 'LI' || e.target.tagName === 'S'){
                toggleTodo(e.target.closest("li").dataset.index);
            } else if(e.target.tagName === 'BUTTON'){
                deleteTodo(e.target.closest("li").dataset.index);
            }
        })

    }

    this.render();
    this.todoListAddEventListner();
}
