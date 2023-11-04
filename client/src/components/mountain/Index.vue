<template>
    <div1>
        <h1><span>mountain</span></h1>
        <ul>
            <li style="--clr: #00ade1;">
            <a href="#/easternRegions" data-text="EASTERNREGION">EASTERNREGION</a>
            </li>
            <li style="--clr: #9f1bc0;">
            <a href="#/northeasts" data-text="NOETHEAST">NOETHEAST</a>
            </li>
            <li style="--clr: #dff327;">
            <a href="#/souths" data-text="SOUTH">SOUTH</a>
            </li>
            <li style="--clr: #a86268;">
            <a href="#/theNorths" data-text="THENORTH">THENORTH</a>
            </li>
            <li style="--clr: #8339b4;">
            <a href="#/westernRegions" data-text="WESTERNREGION">WESTERNREGION</a>
            </li>
        </ul>
    </div1>
</template>
<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    },
}
</script>
<style scoped></style>
   