<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>TheNorth</span></h1>
        <p><button v-on:click="create">Create TheNorth</button></p>
        <div v-for="theNorth in theNorths" v-bind:key="theNorth.id">
            <div><a>ชื่อ:</a> <a1>{{ theNorth.name }} </a1></div>
            <div><a>จังหวัด:</a> <a1>{{ theNorth.province }}</a1></div>
            <div><a>ความสูง:</a> <a1>{{ theNorth. height }}</a1></div>
            <P></P>
            <button v-on:click="navigateTo('/theNorth/' + theNorth.id)">ดูข้อมูล</button>
            <button v-on:click="navigateTo('/theNorth/edit/' + theNorth.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteTheNorth(theNorth)">ลบข้อมูล</button>
            <hr>
        </div>
    </div>
</template>
<script>
import TheNorthService from '@/services/TheNorthService'
export default {
    data() {
        return {
            theNorths: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.theNorths = (await TheNorthService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'theNorth-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteTheNorth(theNorth) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await TheNorthService.delete(theNorth)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.theNorths = (await TheNorthService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    },
}
</script>
<style scoped></style>