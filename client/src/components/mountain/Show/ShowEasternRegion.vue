<template>
    <div>
        <h1><span>EasternRegion</span></h1>
        <div>id: <a1>{{ easternRegion.id }}</a1></div>
        <div>ชื่อ: <a1>{{ easternRegion.name }}</a1></div>        
        <div>จังหวัด: <a1>{{ easternRegion.province }}</a1></div>
        <div>รายละเอียด: <a1>{{ easternRegion.detail }}</a1></div>
        <div>ความสูง: <a1>{{ easternRegion.height }}</a1></div>
        <p></p>
        <button v-on:click="navigateTo('/easternRegions')">กลับ</button>
        <hr>
    </div>
</template>
<script>
import EasternRegionService from '@/services/EasternRegionService'

export default {
    data() {
        return {
            easternRegion:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let easternRegionId = this.$route.params.easternRegionId
            this.easternRegion = (await EasternRegionService.show(easternRegionId)).data
            console.log(this.easternRegion)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   