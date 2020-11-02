export default function TodoCount(countObj){
    this.$countArea = countObj.$countArea;
    this.countTodo = countObj.fn_countTodo;

    this.$div = document.createElement('div');

    this.render = () => {
        this.$countArea.style.display = 'block';
        const todoCount = this.countTodo();
        this.$div.innerText = `완료된 일 ; ${todoCount.completeTodo}
                                미완료된 일 ; ${todoCount.incompleteTodo}`;
        this.$countArea.appendChild(this.$div);

    }
}
