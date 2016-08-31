
const HOST = 'http://apis.baidu.com/';

export default class Http {

    static get(url, body) {
        return this.request(url, 'get', body);
    }

    static post(url, body) {
        return this.request(url, 'post', body);
    }

    static request(url, method, body) {
        return new Promise((resolve, reject) => {
            fetch(HOST + url, {
                method,
                headers: {
                    apikey: 'f97e5c72da654fa21d7cd4207c9f6f5a'
                },
                body
            }).then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    reject({title: response.statusText});
                }
            }).then((responseData) => {
                if (responseData.errNum) {
                    reject({title: responseData.errText});
                }
                resolve(responseData);
            }).catch((error) => {
                reject({title: '网络请求失败，请重试!'});
            });
        })
    }
}
