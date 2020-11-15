export default function FineDustChart(chartObj){
    this.$chartArea = chartObj.$chartArea;
    this.title = chartObj.title;
    this.value = chartObj.value;
    this.standard = chartObj.standard;
    this.state = '';

    this.$div = document.createElement('div');
    this.$h1 = document.createElement('h1');
    this.$dust_div = document.createElement('div');

    this.pointList = [];

    const DUST_STANDARD = ['good', 'normal', 'bad', 'worst'];

    this.makeCharts = () => {
        this.$div.setAttribute('class', 'container');
        this.$h1.setAttribute('id', `${this.title}_title`);
        this.$h1.setAttribute('class', `loader_${this.state}_title`);

        this.$dust_div.setAttribute('id', `${this.title}_chart`);
        this.$dust_div.setAttribute('class', `loader_${this.state}`);

        this.$div.appendChild(this.$h1);
        this.$div.appendChild(this.$dust_div);

        this.$chartArea.appendChild(this.$div);
    }

    this.setDustValue = () => {
        for(let i=1; i<=this.standard.length; i++){
            if(this.value >= this.standard[i-1] && this.value < this.standard[i]){
                this.state = DUST_STANDARD[i-1];
                
            } 
            if(this.standard[this.standard.length-1] < this.value){
                this.state = DUST_STANDARD[this.standard.length-1];
            }
        }
        console.log(this.state);
    }

    this.setState = (newValue) => {
        this.value = newValue;
    }

    this.render = () => {
        this.setDustValue();
        this.makeCharts();
    }

}