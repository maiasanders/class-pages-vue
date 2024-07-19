<template>
    <div>
        <CardTemplate v-for="student in students" :student="student" :key="student.studentId" />
    </div>
</template>

<script>
import CardTemplate from './CardTemplate.vue'
export default {
    props: ['students'],
    components: {
        CardTemplate
    },
    computed: {
        // students() {
        //     return this.$store.state.students
        //     .filter(student => student.classColor === this.color)
        // }
    }
    
}
</script>

<style>

</style>