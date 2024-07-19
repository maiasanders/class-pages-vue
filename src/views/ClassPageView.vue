<template>
    <div class="class-page">
        <header>
            <PageBanner :banner="classDetails.banner" :logo="classDetails.logo" :color="color" />
            <ClassBio :class-details
            ="classDetails" />
            <StudentList :students="students" />
        </header>
        <CardList :students="students" />
    </div>
</template>

<script>
import PageBanner from '../components/PageBanner.vue';
import ClassBio from '../components/ClassBio.vue'
import StudentList from '../components/StudentList.vue'
import CardList from '../components/CardList.vue'

export default {
    components: {
        PageBanner,
        ClassBio,
        StudentList,
        CardList
    },
    computed: {
        color() {
            return this.$route.params.color;
        },
        classDetails() {
            const color = this.$route.params.color;
            return this.$store.state.classes
            .filter(classDetail => classDetail.color.toLowerCase() === color)[0];
        },
        students() {
            const color = this.$route.params.color;
            return this.$store.state.students.filter(student => student.classColor.toLowerCase() === color);
        }
    }
}
</script>

<style scoped>
PageBanner {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
}
</style>