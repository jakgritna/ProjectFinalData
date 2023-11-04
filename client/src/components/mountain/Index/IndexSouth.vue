<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>South</span></h1>
        <p><button v-on:click="create">Create South</button></p>
        <div v-for="south in souths" v-bind:key="south.id">
            <div><a>ชื่อ:</a> <a1>{{ south.name }} </a1></div>
            <div><a>จังหวัด:</a> <a1>{{ south.province }}</a1></div>
            <div><a>ความสูง:</a> <a1>{{ south. height }}</a1></div>
            <P></P>
            <button v-on:click="navigateTo('/south/' + south.id)">ดูข้อมูล</button>
            <button v-on:click="navigateTo('/south/edit/' + south.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteSouth(south)">ลบข้อมูล</button>
            <hr>
        </div>
    </div>
</template>
<script>
import SouthService from '@/services/SouthService'
export default {
    data() {
        return {
            souths: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.souths = (await SouthService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'south-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteSouth(south) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await SouthService.delete(south)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.souths = (await SouthService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    },
}
</script>
<style scoped></style>