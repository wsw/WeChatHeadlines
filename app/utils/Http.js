export default class Http {
    static HOST = 'http://apis.baidu.com/';

    static get(url, body) {
        return this.request(url, 'get', body);
    }

    static post(url, body) {
        return this.request(url, 'post', body);
    }

    static request(url, method, body) {
        let isOk;
        return new Promise((resolve, reject) => {
            fetch(this.HOST + url, {
                method,
                headers: {
                    apikey: 'e16ab1af8f585be209b60982365d4f35'
                },
                body
            }).then((response) => {
                isOk = !!response.ok;
                return response.json();
            }).then((responseData) => {
                isOk ? resolve(responseData) : reject(responseData);
            }).catch((error) => {
                reject(error);
            });
        })
    }
}