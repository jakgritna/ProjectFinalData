<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>WesternRegion</span></h1>
        <p><button v-on:click="create">Create WesternRegion</button></p>
        <div v-for="westernRegion in westernRegions" v-bind:key="westernRegion.id">
            <div><a>ชื่อ:</a> <a1>{{ westernRegion.name }} </a1></div>
            <div><a>จังหวัด:</a> <a1>{{ westernRegion.province }}</a1></div>
            <div><a>ความสูง:</a> <a1>{{ westernRegion.height }}</a1></div>
            <P></P>
            <button v-on:click="navigateTo('/westernRegion/' + westernRegion.id)">ดูข้อมูล</button>
            <button v-on:click="navigateTo('/westernRegion/edit/' + westernRegion.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteWesternRegion(westernRegion)">ลบข้อมูล</button>
            <hr>
        </div>
    </div>
</template>
<script>
import WesternRegionService from '@/services/WesternRegionService'
export default {
    data() {
        return {
            westernRegions: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.westernRegions = (await WesternRegionService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'westernRegion-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteWesternRegion(westernRegion) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await WesternRegionService.delete(westernRegion)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.westernRegions = (await WesternRegionService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    },
}
</script>
<style scoped></style>