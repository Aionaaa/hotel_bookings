<template lang="html">
  <form id="bookings-form" v-on:submit="handleSubmit">
    <h2>Add a Booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" required/>
    </div>
    <div class="formWrap">
      <label for="email">Email:</label>
      <input type="text" id="email" v-model="email" required/>
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
      isCheckedIn: false
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
      this.isCheckedIn = false;
    }
  }
}
</script>

<style lang="css" scoped>
#bookings-form {
  border: 3px ridge #ffd342;
  border-radius: 5px;
  margin: auto;
  padding: 2px;
}

</style>
