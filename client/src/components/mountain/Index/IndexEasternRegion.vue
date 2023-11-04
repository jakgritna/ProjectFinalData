<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>EasternRegion</span></h1>
        <p><button v-on:click="create">Create EasternRegion</button></p>
        <div v-for="easternRegion in easternRegions" v-bind:key="easternRegion.id">
            <div><a>ชื่อ:</a> <a1>{{ easternRegion.name }} </a1></div>
            <div><a>จังหวัด:</a> <a1>{{ easternRegion.province }}</a1></div>
            <div><a>ความสูง:</a> <a1>{{ easternRegion. height }}</a1></div>
            <P></P>
            <button v-on:click="navigateTo('/easternRegion/' + easternRegion.id)">ดูข้อมูล</button>
            <button v-on:click="navigateTo('/easternRegion/edit/' + easternRegion.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteEasternRegion(easternRegion)">ลบข้อมูล</button>
            <hr>
        </div>
    </div>
</template>
<script>
import EasternRegionService from '@/services/EasternRegionService'
export default {
    data() {
        return {
            easternRegions: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.easternRegions = (await EasternRegionService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'easternRegion-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteEasternRegion(easternRegion) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await EasternRegionService.delete(easternRegion)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.easternRegions = (await EasternRegionService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    },
}
</script>
<style scoped></style>