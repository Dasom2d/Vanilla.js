import TodoList from './TodoList.js'
import TodoCompleteList from './TodoCompleteList.js'
import TodoIncompleteList from './TodoIncompleteList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import * as api from './api.js'
import UserList from './UserList.js'


export default function App(){
  this.isValid = () => {
    if(this.data === null || this.data === undefined) {
      throw new Error('data가 null 혹은 undefinded입니다.');
    }
    if(!Array.isArray(this.data)) {
        throw new Error('data가 Array가 아닙니다.');
    }
    if(!this.data.every(d=>typeof d.text === 'string' && typeof d.isCompleted === 'boolean')) {
        throw new Error('data의 타입이 적절하지않습니다.');
    }
  }

  this.state = {
    todos: [],
    users: [],
    selectedUser: '',

    $usersArea: document.querySelector('#users-area'),
    $backBtn: document.querySelector('#back-btn'),
    $todoArea: document.querySelector('#todo-area'),
    $countArea: document.querySelector('#count-area'),
    $inputArea: document.querySelector('#input-area')
  };

  this.settingTodo = (userIdx) => {
    this.state.selectedUser = this.state.users[userIdx];
    this.state.todos = [];
    this.render();
    this.fetchTodos();
  }

  this.fetchTodos = async () => {
    const todos = await api.getTodo(this.state.selectedUser);
    this.setState(todos);
  }

  this.fetchUsers = async () => {
    const users = await api.getUser();
    this.state.users = users;
    this.userList.setState(this.state.users);
  }

  this.toggleTodo = async (idx) => {
    const todoId = this.state.todos[idx]._id;
    await api.toggleTodo(todoId, this.state.selectedUser);
    this.fetchTodos();
  }

  this.deleteTodo = async (idx) => {
    const todoId = this.state.todos[idx]._id;
    await api.deleteTodo(todoId, this.state.selectedUser);
    this.fetchTodos();
  }  

  this.deleteAllTodo = async (idx) => {
    await api.deleteTodo('all', this.state.selectedUser);
    this.fetchTodos();
  }

  this.addTodo = async (todo) => {
    await api.saveTodo(todo, this.state.selectedUser);
    this.fetchTodos();
  }

  this.countTodo = () => {
    const completeTodos = this.state.todos.filter((item)=>item.isCompleted);
    const countTodoObj = {
      completeTodo: completeTodos.length,
      incompleteTodo : this.state.todos.length - completeTodos.length
    }
    return countTodoObj;
  }

  this.render = () => {
    this.todoList.setState(this.state.todos, this.state.selectedUser);
   // this.todoCompleteList.setState(this.state.todos);
    this.todoCount.render();
  }

  this.setState = (newState) => {
    this.state.todos = newState;
    this.render();
  }

  this.fetchUsers();

  this.userList = new UserList({
    userList: this.state.users,
    $usersArea: this.state.$usersArea,
    $todoArea: this.state.$todoArea,
    $backBtn: this.state.$backBtn,
    $countArea: this.state.$countArea,
    $inputArea: this.state.$inputArea,
    fn_settingTodo: this.settingTodo,
    fn_fetchUsers: this.fetchUsers
  });

  this.todoList = new TodoList({
    $usersArea: this.state.$usersArea,
    $todoArea: this.state.$todoArea, 
    $backBtn: this.state.$backBtn,
    $inputArea: this.state.$inputArea,
    fn_isValid: this.isValid, 
    fn_toggleTodo: this.toggleTodo, 
    fn_deleteTodo: this.deleteTodo
  });

  // this.todoCompleteList = new TodoCompleteList({
  //   competeTodos: this.state.todos, 
  //   $completeTodoList: this.state.$completeTodoList, 
  //   fn_isValid: this.isValid, 
  //   fn_toggldTodo: this.toggleTodo, 
  //   fn_deleteTodo: this.deleteTodo
  // });

  this.todoInput = new TodoInput({
    $inputArea: this.state.$inputArea, 
    fn_addTodo: this.addTodo, 
    fn_deleteTodo: this.deleteTodo,
    fn_deleteAllTodo: this.deleteAllTodo
  });
  
  this.todoCount = new TodoCount({
    $countArea:this.state.$countArea, 
    fn_countTodo: this.countTodo
  });

  
}

