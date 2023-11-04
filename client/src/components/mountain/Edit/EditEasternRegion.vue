<template>
    <div>
        <h1><span>Edit EasternRegion</span></h1>
        <form v-on:submit.prevent="editEasternRegion">
            <p>ชื่อ: <input type="text" v-model="easternRegion.name"></p>
            <p>จังหวัด: <input type="text" v-model="easternRegion.province"></p>
            <p>รายละเอียด: <input type="text" v-model="easternRegion.detail"></p>
            <p>ความสูง: <input type="text" v-model="easternRegion.height"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ easternRegion.name }}</a1></p>
            <p><a>จังหวัด:</a> <a1>{{ easternRegion.province }}</a1></p>
            <p><a>รายละเอียด:</a> <a1>{{ easternRegion.detail }}</a1></p>
            <p><a>ความสูง:</a> <a1>{{ easternRegion.height }}</a1></p>
            <p></p>
        </div>

    </div>
</template>
<script>
import EasternRegionService from '@/services/EasternRegionService'
export default {
    data() {
        return {
            easternRegion: {
                name: '',
                province:  '',
                detail: '',
                height: '',
            }
        }
    },
    methods: {
        async editEasternRegion() {
            try {
                await EasternRegionService.put(this.easternRegion)
                this.$router.push({
                    name: 'easternRegions'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let easternRegionId = this.$route.params.easternRegionId
            this.easternRegion = (await EasternRegionService.show(easternRegionId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>