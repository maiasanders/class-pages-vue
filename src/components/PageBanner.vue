<template>
<div>
    <div id="banner-image" :style=" { 'background-image': banner + '' } "></div>
    <!-- <div id="banner-image" :class=" { 'background-image': banner +"" } "></div> -->
    <img id="profile-pic" :src="logo">
</div>
</template>

<script>
export default {
    props: [
        'banner', 'logo', 'color'
    ],
    computed: {
        classDetails() {
            return this.$store.state.classes
            .filter(_class => _class.color === classColor);
        }
    }
}
</script>

<style scoped>
* {
    position: relative;
    top: 0;
}
#banner-image {
    background-size: cover;
    height: 100px;
    background-color: gray;
    box-sizing: border-box;
}
/* div.purple {
    background-image: ;
} */
#profile-pic {
  height: 200px;
  width: 200px;
  border-radius: 100px;
  object-fit: cover;
}
</style>