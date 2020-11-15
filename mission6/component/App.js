import UmdInput from './UmdInput.js'
import FineDustChart from './FineDustChart.js'
import * as gauge from '../api/GaugeChart.js'
import * as api from '../api/api.js'

export default function App(){

    const PM_10_VALUE = [0, 30, 80, 150];
    const PM_25_VALUE = [0, 15, 35, 75];

    this.state = {
        atmosphereInfoList: [],
        lastestPoint: {
            pm10Value: 0,
            pm25Value: 0,
        },
        $searchArea: document.querySelector('#search-area'),
        $chartArea: document.querySelector('#chart-area')
    }

    this.getUmdName = (umdName) => {
        this.getDustInfoList(umdName);
    }

    this.getDustInfoList = async (umdName) => {
        const coordinateVo = await api.getCoordinate(umdName);
        const info = coordinateVo.list[0];
        const coordinate = {tmX: info.tmX, tmY: info.tmY};

        const msrstnInfoInqireSvrVo = await api.getTMStdrCrdnt(coordinate);
        const nearbyMsrstnInfo = msrstnInfoInqireSvrVo.list[0];

        const measure = await api.getMesureDnsty(nearbyMsrstnInfo.stationName);
        this.setState(measure.list);
        console.log(measure.list);
    }

    this.setState = (newState) => {
        this.state.atmosphereInfoList = newState;
        this.state.lastestPoint.pm10Value = newState[0].pm10Value;
        this.state.lastestPoint.pm25Value = newState[0].pm25Value;
        this.pm10chart.setState(this.state.lastestPoint.pm10Value);
        this.pm25chart.setState(this.state.lastestPoint.pm25Value);
        this.render();
    }


    this.render = () => {
        this.pm10chart.render();
        gauge.drawGaugeChart(this.state.lastestPoint.pm10Value, 'pm10_title');
        this.pm25chart.render();
        gauge.drawGaugeChart(this.state.lastestPoint.pm25Value, 'pm25_title');
    }

    this.umdInput = new UmdInput({
        $searchArea: this.state.$searchArea,
        fn_getUmdName: this.getUmdName
    });

    this.pm10chart = new FineDustChart({
        $chartArea: this.state.$chartArea,
        value: this.state.lastestPoint.pm10Value,
        title: 'pm10',
        standard: PM_10_VALUE
    })

    this.pm25chart = new FineDustChart({
        $chartArea: this.state.$chartArea,
        value: this.state.lastestPoint.pm25Value,
        title: 'pm25',
        standard: PM_25_VALUE
    })


    this.render();
}
