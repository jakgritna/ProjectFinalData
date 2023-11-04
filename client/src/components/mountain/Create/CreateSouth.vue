<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create South</span></h1>
                <form class="register-form" v-on:submit.prevent="createSouth">
                    <input type="text" placeholder="ชื่อ *" v-model="south.name" required>
                    <input type="text" placeholder="จังหวัด *" v-model="south.province" required>
                    <input type="text" placeholder="รายละเอียด" v-model="south.detail">
                    <input type="text" placeholder="ความสูง *" v-model="south.height" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/souths')">กลับ</button>                </form>
            </div>
        </div>
    </div2>
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
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        async createSouth() {
            try {
                await SouthService.post(this.south)
                this.$router.push({
                    name: 'souths'
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
   