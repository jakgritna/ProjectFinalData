import Api from '@/services/Api'
export default {
    index(easternRegion) {
        return Api().get('easternRegions')
    },
    show(easternRegionId) {
        return Api().get('easternRegion/' + easternRegionId)
    },
    post(easternRegion) {
        return Api().post('easternRegion', easternRegion)
    },
    put(easternRegion) {
        return Api().put('easternRegion/' + easternRegion.id, easternRegion)
    },
    delete(easternRegion) {
        return Api().delete('easternRegion/' + easternRegion.id, easternRegion)
    },
}