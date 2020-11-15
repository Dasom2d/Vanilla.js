export default function UmdInput(umdObj) {
    this.getUmdName = umdObj.fn_getUmdName;
    this.$searchArea = umdObj.$searchArea;
    
    this.$div = document.createElement('div');
    this.$input = document.createElement('input');
    this.$searchBtn = document.createElement('button');

    const that = this;

    this.render = () => {
        this.$searchArea.appendChild(this.$div);

        this.$input.setAttribute('type', 'text');
        this.$div.appendChild(this.$input);

        const searchBtnText = document.createTextNode( 'go Search' );
        this.$searchBtn.appendChild(searchBtnText);
        this.$div.appendChild(this.$searchBtn);

    }

    this.$searchBtn.addEventListener('click', function(e){
        that.getUmdName(that.$input.value);
    })


    this.render();
}