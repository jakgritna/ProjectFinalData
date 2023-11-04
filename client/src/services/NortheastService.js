import Api from '@/services/Api'
export default {
    index(northeast) {
        return Api().get('northeasts')
    },
    show(northeastId) {
        return Api().get('northeast/' + northeastId)
    },
    post(northeast) {
        return Api().post('northeast', northeast)
    },
    put(northeast) {
        return Api().put('northeast/' + northeast.id, northeast)
    },
    delete(northeast) {
        return Api().delete('northeast/' + northeast.id, northeast)
    },
}