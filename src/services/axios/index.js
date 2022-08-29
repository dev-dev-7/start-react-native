import instance from './config';

class Axios {
    post(url,body){
        return instance.post(url,body)
    }
    get(url){
        return instance.get(url)
    }
    update(url,body){
        return instance.update(url,body)
    }
    delete(url,body){
        return instance.delete(url)
    }
}

export default new Axios()