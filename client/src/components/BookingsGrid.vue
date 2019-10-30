<template lang="html">
<div class="">
  <div class="booking" v-for="booking in bookings">
    <h2>{{booking.name}}</h2>
    <p>{{booking.email}}</p>
    <p>{{booking.isCheckedIn}}</p>
    <button v-on:click="handleDelete(booking._id)">Delete Booking</button>
  </div>
</div>
</template>

<script>
import {eventBus} from '../main';
import BookingService from '../services/BookingService'
export default {
  name: "bookings-grid",
  props: ["bookings"],
  methods: {
    handleDelete(id){
      BookingService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id));
    }
  }
}
</script>

<style lang="css" scoped>
</style>
