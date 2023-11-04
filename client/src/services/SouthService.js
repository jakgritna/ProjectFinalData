import Api from '@/services/Api'
export default {
    index(south) {
        return Api().get('souths')
    },
    show(southId) {
        return Api().get('south/' + southId)
    },
    post(south) {
        return Api().post('south', south)
    },
    put(south) {
        return Api().put('south/' + south.id, south)
    },
    delete(south) {
        return Api().delete('south/' + south.id, south)
    },
}