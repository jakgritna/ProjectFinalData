<template>
    <div>
        <h1><span>Edit Northeast</span></h1>
        <form v-on:submit.prevent="editNortheast">
            <p>ชื่อ: <input type="text" v-model="northeast.name"></p>
            <p>จังหวัด: <input type="text" v-model="northeast.province"></p>
            <p>รายละเอียด: <input type="text" v-model="northeast.detail"></p>
            <p>ความสูง: <input type="text" v-model="northeast.height"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ northeast.name }}</a1></p>
            <p><a>จังหวัด:</a> <a1>{{ northeast.province }}</a1></p>
            <p><a>รายละเอียด:</a> <a1>{{ northeast.detail }}</a1></p>
            <p><a>ความสูง:</a> <a1>{{ northeast.height }}</a1></p>
            <p></p>
        </div>

    </div>
</template>
<script>
import NortheastService from '@/services/NortheastService'
export default {
    data() {
        return {
            northeast: {
                name: '',
                province:  '',
                detail: '',
                height: '',
            }
        }
    },
    methods: {
        async editNortheast() {
            try {
                await NortheastService.put(this.northeast)
                this.$router.push({
                    name: 'northeasts'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let northeastId = this.$route.params.northeastId
            this.northeast = (await NortheastService.show(northeastId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>