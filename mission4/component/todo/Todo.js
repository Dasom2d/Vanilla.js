import TodoCompleteList from './TodoCompleteList.js'
import TodoIncompleteList from './TodoIncompleteList.js'

export default function Todo(todoObj){
    this.state = {
        userName: '',
        completeTodos: [],
        incompleteTodos: [],
        $usersArea: todoObj.$usersArea,
        $todoArea: todoObj.$todoArea,
        $inputArea: todoObj.$inputArea,
        $backBtn: todoObj.$backBtn
    }
    this.toggleTodo = todoObj.fn_toggleTodo;
    this.deleteTodo = todoObj.fn_deleteTodo;

    this.render = () => {
        this.state.$usersArea.style.display = 'none';
        this.state.$backBtn.style.display = 'block';
        this.state.$todoArea.innerHTML = this.state.userName + '의 Todo List';
        this.state.$todoArea.style.display = 'block';
        this.state.$inputArea.style.display = 'block';
    }

    this.setState = (newTodos, newUser) => {
        this.state.completeTodos = newTodos.filter(todo=>{return todo.isCompleted});
        this.state.incompleteTodos = newTodos.filter(todo=>{return !todo.isCompleted});
        this.state.userName = newUser;
        this.render();
        this.todoComplete.setState(this.state.completeTodos);
        this.todoIncomplete.setState(this.state.incompleteTodos);
    }

    this.todoComplete = new TodoCompleteList({
        todo: this.incompleteTodos,
        $todoArea: this.state.$todoArea, 
        fn_toggleTodo: this.toggleTodo, 
        fn_deleteTodo: this.deleteTodo
    });

    this.todoIncomplete = new TodoIncompleteList({
        todo: this.completeTodos,
        $todoArea: this.state.$todoArea, 
        fn_toggleTodo: this.toggleTodo, 
        fn_deleteTodo: this.deleteTodo
    });
}