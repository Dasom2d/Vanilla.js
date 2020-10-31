export default function TodoInput(inputObj){
    this.$inputArea = inputObj.$inputArea;
    this.addTodo = inputObj.fn_addTodo;
    this.deleteTodo = inputObj.fn_deleteTodo;
    this.deleteAllTodo = inputObj.fn_deleteAllTodo;

    this.$div = document.createElement('div');
    this.$input = document.createElement('input');
    this.$inputBtn = document.createElement( 'button' );
    this.$deleteAllBtn = document.createElement( 'button' );

    const that = this;

    this.render = () => {
        this.$inputArea.appendChild(this.$div);

        this.$input.setAttribute('type', 'text');
        this.$div.appendChild(this.$input);

        const inputBtnText = document.createTextNode( 'todo 등록' );
        this.$inputBtn.appendChild(inputBtnText);
        this.$div.appendChild(this.$inputBtn);

        const deleteBtnText = document.createTextNode('전체 삭제');
        this.$deleteAllBtn.appendChild(deleteBtnText);
        this.$div.appendChild(this.$deleteAllBtn);

    }


    this.todoInputAddEventListener = () => {
        this.$inputBtn.addEventListener('click', (e)=>{
            that.getTodo();
        }); 
        
        this.$deleteAllBtn.addEventListener('click', (e) => {
            that.deleteAllTodo();
        })
    }

    this.resetTodo= () => {
        this.$input.value = '';
    }

    this.getTodo = () => {
        this.addTodo(this.$input.value);
        this.resetTodo();
    }


    this.render();
    this.todoInputAddEventListener();
}
