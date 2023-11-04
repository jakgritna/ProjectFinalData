<template>
    <div>
        <h1><span>Edit WesternRegion</span></h1>
        <form v-on:submit.prevent="editWesternRegion">
            <p>ชื่อ: <input type="text" v-model="westernRegion.name"></p>
            <p>จังหวัด: <input type="text" v-model="westernRegion.province"></p>
            <p>รายละเอียด: <input type="text" v-model="westernRegion.detail"></p>
            <p>ความสูง: <input type="text" v-model="westernRegion.height"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ westernRegion.name }}</a1></p>
            <p><a>จังหวัด:</a> <a1>{{ westernRegion.province }}</a1></p>
            <p><a>รายละเอียด:</a> <a1>{{ westernRegion.detail }}</a1></p>
            <p><a>ความสูง:</a> <a1>{{ westernRegion.height }}</a1></p>
            <p></p>
        </div>

    </div>
</template>
<script>
import WesternRegionService from '@/services/WesternRegionService'
export default {
    data() {
        return {
            westernRegion: {
                name: '',
                province:  '',
                detail: '',
                height: '',
            }
        }
    },
    methods: {
        async editWesternRegion() {
            try {
                await WesternRegionService.put(this.westernRegion)
                this.$router.push({
                    name: 'westernRegions'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let westernRegionId = this.$route.params.westernRegionId
            this.westernRegion = (await WesternRegionService.show(westernRegionId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>