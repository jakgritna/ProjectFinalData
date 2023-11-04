import Api from '@/services/Api'
export default {
    index(theNorth) {
        return Api().get('theNorths')
    },
    show(theNorthId) {
        return Api().get('theNorth/' + theNorthId)
    },
    post(theNorth) {
        return Api().post('theNorth', theNorth)
    },
    put(theNorth) {
        return Api().put('theNorth/' + theNorth.id, theNorth)
    },
    delete(theNorth) {
        return Api().delete('theNorth/' + theNorth.id, theNorth)
    },
}