<template>
    <div>
        <h1><span>Edit TheNorth</span></h1>
        <form v-on:submit.prevent="editTheNorth">
            <p>ชื่อ: <input type="text" v-model="theNorth.name"></p>
            <p>จังหวัด: <input type="text" v-model="theNorth.province"></p>
            <p>รายละเอียด: <input type="text" v-model="theNorth.detail"></p>
            <p>ความสูง: <input type="text" v-model="theNorth.height"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อ:</a> <a1>{{ theNorth.name }}</a1></p>
            <p><a>จังหวัด:</a> <a1>{{ theNorth.province }}</a1></p>
            <p><a>รายละเอียด:</a> <a1>{{ theNorth.detail }}</a1></p>
            <p><a>ความสูง:</a> <a1>{{ theNorth.height }}</a1></p>
            <p></p>
        </div>

    </div>
</template>
<script>
import TheNorthService from '@/services/TheNorthService'
export default {
    data() {
        return {
            theNorth: {
                name: '',
                province:  '',
                detail: '',
                height: '',
            }
        }
    },
    methods: {
        async editTheNorth() {
            try {
                await TheNorthService.put(this.theNorth)
                this.$router.push({
                    name: 'theNorths'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let theNorthId = this.$route.params.theNorthId
            this.theNorth = (await TheNorthService.show(theNorthId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>