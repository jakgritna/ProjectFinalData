<template>
    <div>
        <h1><span>Northeast</span></h1>
        <div>id: <a1>{{ northeast.id }}</a1></div>
        <div>ชื่อ: <a1>{{ northeast.name }}</a1></div>        
        <div>จังหวัด: <a1>{{ northeast.province }}</a1></div>
        <div>รายละเอียด: <a1>{{ northeast.detail }}</a1></div>
        <div>ความสูง: <a1>{{ northeast.height }}</a1></div>
        <p></p>
        <button v-on:click="navigateTo('/northeasts')">กลับ</button>
        <hr>
    </div>
</template>
<script>
import NortheastService from '@/services/NortheastService'

export default {
    data() {
        return {
            northeast:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let northeastId = this.$route.params.northeastId
            this.northeast = (await NortheastService.show(northeastId)).data
            console.log(this.northeast)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   