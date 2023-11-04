<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create TheNorth</span></h1>
                <form class="register-form" v-on:submit.prevent="createTheNorth">
                    <input type="text" placeholder="ชื่อ *" v-model="theNorth.name" required>
                    <input type="text" placeholder="จังหวัด *" v-model="theNorth.province" required>
                    <input type="text" placeholder="รายละเอียด" v-model="theNorth.detail">
                    <input type="text" placeholder="ความสูง *" v-model="theNorth.height" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/theNorths')">กลับ</button>                </form>
            </div>
        </div>
    </div2>
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
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        async createTheNorth() {
            try {
                await TheNorthService.post(this.theNorth)
                this.$router.push({
                    name: 'theNorths'
                })
            } catch (err) {
                console.log(err)
            }
        },
        navigateTo(route){
            this.$router.push(route)
        }
    },
     
}
</script>
<style scoped></style>