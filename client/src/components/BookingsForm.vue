<template lang="html">
  <form id="bookings-form" v-on:submit="handleSubmit">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name">
    </div>
    <div class="formWrap">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email">
    </div>
    <div class="formWrap">
      <label for="isCheckedIn">Checked In?:</label>
      <input type="text" id="isCheckedIn" v-model="isCheckedIn">
    </div>

    <input type="submit" value="Save Booking" id="save"/>
  </form>
</template>

<script>
import {eventBus} from '../main';
import BookingService from '../services/BookingService';

export default {
  name: "bookings-form",
  data(){
    return {
      name: "",
      email: "",
      isCheckedIn: null
    }
  },
  methods: {
    handleSubmit(event){
      event.preventDefault();

      const payload = {
        name: this.name,
        email: this.email,
        isCheckedIn: this.isCheckedIn
      };

      BookingService.postBooking(payload)
      .then(booking => {
        eventBus.$emit('booking-added', booking);
      });
      this.name = "";
      this.email = "";
      this.isCheckedIn = null;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
