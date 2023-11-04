<template>
    <div>
        <h1><span>South</span></h1>
        <div>id: <a1>{{ south.id }}</a1></div>
        <div>ชื่อ: <a1>{{ south.name }}</a1></div>        
        <div>จังหวัด: <a1>{{ south.province }}</a1></div>
        <div>รายละเอียด: <a1>{{ south.detail }}</a1></div>
        <div>ความสูง: <a1>{{ south.height }}</a1></div>
        <p></p>
        <button v-on:click="navigateTo('/souths')">กลับ</button>
        <hr>
    </div>
</template>
<script>
import SouthService from '@/services/SouthService'

export default {
    data() {
        return {
            south:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let southId = this.$route.params.southId
            this.south = (await SouthService.show(southId)).data
            console.log(this.south)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   