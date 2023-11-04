<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create Northeast</span></h1>
                <form class="register-form" v-on:submit.prevent="createNortheast">
                    <input type="text" placeholder="ชื่อ *" v-model="northeast.name" required>
                    <input type="text" placeholder="จังหวัด *" v-model="northeast.province" required>
                    <input type="text" placeholder="รายละเอียด" v-model="northeast.detail">
                    <input type="text" placeholder="ความสูง *" v-model="northeast.height" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/northeasts')">กลับ</button>                </form>
            </div>
        </div>
    </div2>
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
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        async createNortheast() {
            try {
                await NortheastService.post(this.northeast)
                this.$router.push({
                    name: 'northeasts'
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
   