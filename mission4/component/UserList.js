export default function UserList(userObj) { 

    this.userList = userObj.userList;
    this.$userList = userObj.$userList;
    this.$btn = userObj.$btn;
    this.$userTodo = userObj.$userTodo;
    this.$target = userObj.$target;
    this.settingTodo = userObj.fn_settingTodo;

    const that = this;
    
    this.$ul = document.createElement('ul');


    this.addEventListner = () => {
        this.$ul.addEventListener('click', (e)=>{
            that.settingTodo(e.target.dataset.index);
        })

        this.$btn.addEventListener('click', (e)=>{
            that.$userList.style.display = 'block';
            that.$target.style.display = 'none';
            that.$userTodo.style.display = 'none';
        })

    }

    this.render = () => {
        this.$ul.innerHTML = this.userList.map((u, idx)=>`<li data-index=${idx}>${u}</li>`).join(' ');
        this.$userList.prepend(this.$ul);
    }
    
    this.render();
    this.addEventListner();
}