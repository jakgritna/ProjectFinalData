<template>
    <div>
        <h1><span>WesternRegion</span></h1>
        <div>id: <a1>{{ westernRegion.id }}</a1></div>
        <div>ชื่อ: <a1>{{ westernRegion.name }}</a1></div>        
        <div>จังหวัด: <a1>{{ westernRegion.province }}</a1></div>
        <div>รายละเอียด: <a1>{{ westernRegion.detail }}</a1></div>
        <div>ความสูง: <a1>{{ westernRegion.height }}</a1></div>
        <p></p>
        <button v-on:click="navigateTo('/westernRegions')">กลับ</button>
        <hr>
    </div>
</template>
<script>
import WesternRegionService from '@/services/WesternRegionService'

export default {
    data() {
        return {
            westernRegion:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let westernRegionId = this.$route.params.westernRegionId
            this.westernRegion = (await WesternRegionService.show(westernRegionId)).data
            console.log(this.westernRegion)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   