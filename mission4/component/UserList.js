export default function UserList(user, $target, $btn, settingTodos) {
    this.$target = $target;
    this.$btn = $btn;
    this.user = user;
    this.$userTarget = document.querySelector('#user-list');
    this.$userName = document.querySelector('#user-name');
    
    this.$ul = document.createElement('ul');


    this.addEventListner = () => {
        this.$ul.addEventListener('click', (e)=>{
            settingTodos(e.target.dataset.index);
        })

        this.$btn.addEventListener('click', (e)=>{
            this.$userTarget.style.display = 'block';
            this.$target.style.display = 'none';
            dhis.$userName.style.display = 'none';
        })

    }

    this.render = () => {
        this.$ul.innerHTML = this.user.map((u, idx)=>`<li data-index=${idx}>${u}</li>`).join(' ');
        this.$target.prepend(this.$ul);
    }
    
    this.render();
    this.addEventListner();
}