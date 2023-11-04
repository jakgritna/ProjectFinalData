<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>Northeast</span></h1>
        <p><button v-on:click="create">Create Northeast</button></p>
        <div v-for="northeast in northeasts" v-bind:key="northeast.id">
            <div><a>ชื่อ:</a> <a1>{{ northeast.name }} </a1></div>
            <div><a>จังหวัด:</a> <a1>{{ northeast.province }}</a1></div>
            <div><a>ความสูง:</a> <a1>{{ northeast. height }}</a1></div>
            <P></P>
            <button v-on:click="navigateTo('/northeast/' + northeast.id)">ดูข้อมูล</button>
            <button v-on:click="navigateTo('/northeast/edit/' + northeast.id)">แก้ไขข้อมูล</button>
            <button v-on:click="deleteNortheast(northeast)">ลบข้อมูล</button>
            <hr>
        </div>
    </div>
</template>
<script>
import  NortheastService from '@/services/NortheastService'
export default {
    data() {
        return {
            northeasts: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.northeasts = (await NortheastService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'northeast-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteNortheast(northeast) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await NortheastService.delete(northeast)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.northeasts = (await NortheastService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    },
}
</script>
<style scoped></style>