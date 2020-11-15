const SERVICE_KEY = 'rbzLI5OlgpnIbCj61tbuviQyjxCI0luQwWNOVcBLRQ1QyZZ9JcGv0tYbHkVkHrH%2BGRw8MePBrLb8OA3Of9u7uA%3D%3D';
const NUM_OF_ROWS = 10;
const PAGE_NO = 1;
const RETURN_TYPE = 'json';

const COORDINATE_API = `http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getTMStdrCrdnt`;
const MSRSTN_API = `http://openapi.airkorea.or.kr/openapi/services/rest/MsrstnInfoInqireSvc/getNearbyMsrstnList`;
const MESURE_API = `http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty`;


const request = async(fetchUrl, options) => {
    try {
        const res = await fetch(fetchUrl, {
            headers: {
                'Content-Type': 'application/json',
            },
            ...options
        })
    
        if(res.ok) {
            return await res.json();
        } else {
            new Promise((resolve, reject) => {
                throw new Error(`조회 중 에러가 발생하였습니다.`);
            })
        }
    } catch(e) {
        new Promise((resolve, reject) => {
            throw new Error(`서버 통신 중 에러가 발생하였습니다. ; ${e.message}`);
          }).catch(alert);   
    }
   
}

const getTm = async (url, umdName) => {
    const params = {
        numOfRows: NUM_OF_ROWS,
        pageNo: PAGE_NO,
        serviceKey: SERVICE_KEY,
        _returnType: RETURN_TYPE,
        umdName: umdName
    };

    return await request(`${url}?`+makeQueryString(params), {
        method: 'GET'
    });
}

const getTMStdrCrdntList = async(url, coordinate) => {
    const params = {
        tmX: coordinate.tmX,
        tmY: coordinate.tmY,
        serviceKey: SERVICE_KEY,
        _returnType: RETURN_TYPE,
    }

    return await request(`${url}?`+makeQueryString(params), {
        method: 'GET'
    })
}

const getMsrstnAcctoRltmMesureDnsty = async(url, stationName) => {
    const params = {
        numOfRows: NUM_OF_ROWS,
        pageNo: PAGE_NO,
        serviceKey: SERVICE_KEY,
        _returnType: RETURN_TYPE,
        stationName: stationName,
        dataTerm: 'DAILY'
    }
    return await request(`${url}?`+makeQueryString(params));
}

const makeQueryString = (obj) => {
    return Object.entries(obj).map(e => e.join('=')).join('&');
}


export const getCoordinate = (umdName) => getTm(COORDINATE_API, umdName);
export const getTMStdrCrdnt = (coordinate) => getTMStdrCrdntList(MSRSTN_API, coordinate);
export const getMesureDnsty = (stationName) => getMsrstnAcctoRltmMesureDnsty(MESURE_API, stationName);