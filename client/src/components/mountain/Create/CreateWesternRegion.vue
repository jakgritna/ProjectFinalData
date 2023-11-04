<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create WesternRegion</span></h1>
                <form class="register-form" v-on:submit.prevent="createWesternRegion">
                    <input type="text" placeholder="ชื่อ *" v-model="westernRegion.name" required>
                    <input type="text" placeholder="จังหวัด *" v-model="westernRegion.province" required>
                    <input type="text" placeholder="รายละเอียด" v-model="westernRegion.detail">
                    <input type="text" placeholder="ความสูง *" v-model="westernRegion.height" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/westernRegions')">กลับ</button>                </form>
            </div>
        </div>
    </div2>
</template>
<script>
import WesternRegionService from '@/services/WesternRegionService'
export default {
    data() {
        return {
            westernRegion: {
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
        async createWesternRegion() {
            try {
                await WesternRegionService.post(this.westernRegion)
                this.$router.push({
                    name: 'westernRegions'
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