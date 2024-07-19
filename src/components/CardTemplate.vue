<template>
    <div>
        <article class="fan-site card">
            <h5 class="card-header">{{ student.name }}</h5>
            <iframe
              :src="student.fanPageUrl"
              width="400"
              height="400"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              class="card-body"
            ></iframe>
            <button class="fan-site-button btn btn-primary" @click="goToFanPage">Click</button>
          </article>
    </div>
</template>

<script>
export default {
    props: ['student'],
    methods: {
        goToFanPage() {
            this.$router.push(student.fanPageUrl)
        }
    }
}
</script>

<style>
.card {
    width: 400px;
    margin: 20px;
    background-color: white;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    text-align: center;
}

.card-header {
    background-color:rgba(176, 120, 164, 100); 
    color: white;
    padding: 10px;
    font-size: 16px;
    font-weight: 200;
    border-top-left-radius: 10px; /* top rounded edges*/
    border-top-right-radius: 10px;
    text-transform: uppercase;
}

.card-body {
    padding: 10px;
}

.btn {
    width: 30%;
    margin: 10px auto;
    padding: 10px;
    background-color: rgba(176, 120, 164, 100); 
    color: white;
    border: none;
    border-radius: 5px; /* Rounded edges */
    cursor: pointer;
    align-self: center;
}
</style>