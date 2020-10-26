
export default function TodoList(todoObj){
    this.userName = '';
    this.todos = [];
    this.$usersArea = todoObj.$usersArea;
    this.$todoArea = todoObj.$todoArea;
    this.$inputArea = todoObj.$inputArea;
    this.$backBtn = todoObj.$backBtn;
    this.isValid = todoObj.fn_isValid;
    this.toggleTodo = todoObj.fn_toggleTodo;
    this.deleteTodo = todoObj.fn_deleteTodo;
   
    this.$ul = document.createElement('ul');

    const that = this;

    if(!new.target){
        throw new Error('new 키워드로 작성해주세요.');
    }
 //   isValid();
    this.render = () => {
        this.$usersArea.style.display = 'none';
        let $prevUl = this.$usersArea.querySelector('ul');
        while ($prevUl != null && $prevUl.hasChildNodes()) {
            $prevUl.removeChild($prevUl.firstChild);
        }

        this.$backBtn.style.display = 'block';
        this.$todoArea.innerHTML = this.userName + '의 Todo List';
        this.$ul.innerHTML = this.todos.map((todo, index) => {
            return todo.isCompleted ? `
              <li data-index=${index}>
                (완료) <s class="font-red">${todo.content}</s>
                <button>삭제</button>
              </li>
            ` : `
              <li data-index=${index}>${todo.content}
                <button>삭제</button>
              </li>
            `
          }).join('');
        this.$todoArea.firstChild.after(this.$ul);
        this.$todoArea.style.display = 'block';
        this.$inputArea.style.display = 'block';
    }

    this.setState = (newTodos, newUser) => {
        this.todos = newTodos;
        this.userName = newUser;
        this.render();
    }

    this.todoListAddEventListner = () => {
        this.$ul.addEventListener('click', (e)=>{
            if(e.target.tagName === 'LI' || e.target.tagName === 'S'){
                that.toggleTodo(e.target.closest("li").dataset.index);
            } else if(e.target.tagName === 'BUTTON'){
                that.deleteTodo(e.target.closest("li").dataset.index);
            }
        })

    }

 //   this.render();
    this.todoListAddEventListner();
}
