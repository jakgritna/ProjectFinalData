import Api from '@/services/Api'
export default {
    index(westernRegion) {
        return Api().get('westernRegions')
    },
    show(westernRegionId) {
        return Api().get('westernRegion/' + westernRegionId)
    },
    post(westernRegion) {
        return Api().post('westernRegion', westernRegion)
    },
    put(westernRegion) {
        return Api().put('westernRegion/' + westernRegion.id, westernRegion)
    },
    delete(westernRegion) {
        return Api().delete('westernRegion/' + westernRegion.id, westernRegion)
    },
}