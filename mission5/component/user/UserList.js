export default function UserList(userObj) { 

    this.userList = [];
    this.$usersArea = userObj.$usersArea;
    this.$todoArea = userObj.$todoArea;
    this.$backBtn = userObj.$backBtn;
    this.$countArea = userObj.$countArea;
    this.$inputArea = userObj.$inputArea;
    this.settingTodo = userObj.fn_settingTodo;
    this.fetchUsers = userObj.fn_fetchUsers;

    const that = this;
    
    this.$ul = document.createElement('ul');

    this.addEventListner = () => {
        // 사용자 클릭
        this.$ul.addEventListener('click', (e)=>{
            that.settingTodo(e.target.dataset.index);
        })

        // user list 화면으로 돌아오기
        this.$backBtn.addEventListener('click', (e)=>{
            this.closeEtcArea();
            that.fetchUsers();
        })

    }

    this.render = () => {
        this.$ul.innerHTML = this.userList.map((u, idx)=>`<li data-index=${idx}>${u}</li>`).join(' ');
        this.$usersArea.appendChild(this.$ul);
        this.closeEtcArea();
    }

    this.closeEtcArea = () => {
        this.$usersArea.style.display = 'block';
        this.$backBtn.style.display = 'none';
        this.$todoArea.style.display = 'none';
        this.$countArea.style.display = 'none';
        this.$inputArea.style.display = 'none';
    }

    this.setState = (userList) => {
        this.userList = userList;
        this.render();
    }
    
    this.render();
    this.addEventListner();
}