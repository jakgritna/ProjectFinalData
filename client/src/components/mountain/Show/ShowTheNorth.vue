<template>
    <div>
        <h1><span>TheNorth</span></h1>
        <div>id: <a1>{{ theNorth.id }}</a1></div>
        <div>ชื่อ: <a1>{{ theNorth.name }}</a1></div>        
        <div>จังหวัด: <a1>{{ theNorth.province }}</a1></div>
        <div>รายละเอียด: <a1>{{ theNorth.detail }}</a1></div>
        <div>ความสูง: <a1>{{ theNorth.height }}</a1></div>
        <p></p>
        <button v-on:click="navigateTo('/theNorths')">กลับ</button>
        <hr>
    </div>
</template>
<script>
import TheNorthService from '@/services/TheNorthService'

export default {
    data() {
        return {
            theNorth:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let theNorthId = this.$route.params.theNorthId
            this.theNorth = (await TheNorthService.show(theNorthId)).data
            console.log(this.theNorth)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   