<template>
    <div>
        <h1><span>Edit South</span></h1>
        <form v-on:submit.prevent="editSouth">
            <p>ชื่อ: <input type="text" v-model="south.name"></p>
            <p>จังหวัด: <input type="text" v-model="south.province"></p>
            <p>รายละเอียด: <input type="text" v-model="south.detail"></p>
            <p>ความสูง: <input type="text" v-model="south.height"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ south.name }}</a1></p>
            <p><a>จังหวัด:</a> <a1>{{ south.province }}</a1></p>
            <p><a>รายละเอียด:</a> <a1>{{ south.detail }}</a1></p>
            <p><a>ความสูง:</a> <a1>{{ south.height }}</a1></p>
            <p></p>
        </div>

    </div>
</template>
<script>
import SouthService from '@/services/SouthService'
export default {
    data() {
        return {
            south: {
                name: '',
                province:  '',
                detail: '',
                height: '',
            }
        }
    },
    methods: {
        async editSouth() {
            try {
                await SouthService.put(this.south)
                this.$router.push({
                    name: 'souths'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let southId = this.$route.params.southId
            this.south = (await SouthService.show(southId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>