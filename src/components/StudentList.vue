<template>
    <div>
        <h3>Students</h3>
        <ul>
            <li v-for="student in students" :key="student.studentId">{{ student.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['students']
}
</script>