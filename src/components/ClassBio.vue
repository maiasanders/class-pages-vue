<template>
    <h1>{{ classDetails.color }} Class</h1>
    <p>{{ classDetails.bio }}</p>
</template>

<script>
export default {
    props: [
        'classDetails'
    ]
}
</script>