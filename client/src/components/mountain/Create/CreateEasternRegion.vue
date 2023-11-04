<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create EasternRegion</span></h1>
                <form class="register-form" v-on:submit.prevent="createEasternRegion">
                    <input type="text" placeholder="ชื่อ *" v-model="easternRegion.name" required>
                    <input type="text" placeholder="จังหวัด *" v-model="easternRegion.province" required>
                    <input type="text" placeholder="รายละเอียด" v-model="easternRegion.detail">
                    <input type="text" placeholder="ความสูง *" v-model="easternRegion.height" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/easternRegions')">กลับ</button>
                </form>
            </div>
        </div>
    </div2>
</template>
<script>
import EasternRegionService from '@/services/EasternRegionService'
export default {
    data() {
        return {
            easternRegion: {
                name: '',
                province:  '',
                detail: '',
                height: '',
            }
        }
    },
    methods: {
        async createEasternRegion() {
            try {
                await EasternRegionService.post(this.easternRegion)
                this.$router.push({
                    name: 'easternRegions'
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
   