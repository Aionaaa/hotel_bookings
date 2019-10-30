<template lang="html">
<div class="">
  <div class="booking" v-for="booking in bookings">
    <h2>{{booking.name}}</h2>
    <p>{{booking.email}}</p>
    <p>{{booking.isCheckedIn}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "bookings-grid",
  props: ["bookings"]
}
</script>

<style lang="css" scoped>
</style>
