<template lang="html">
<div id="bookingsGrid">
  <div :class="booking.isCheckedIn" id="booking" v-for="booking in bookings">
    <h2>{{booking.name}}</h2>
    <p>{{booking.email}}</p>
    <p>{{booking.isCheckedIn}}</p>
    <select @change="handleUpdate(booking)" name="Check-in" v-model="booking.isCheckedIn">
      <option disabled selected value="">Change Check-in Status</option>
      <option value="true">Checked in</option>
      <option value="false">Not checked in</option>
    </select>
    <button v-on:click="handleDelete(booking._id)">Delete Booking</button>
  </div>
</div>
</template>

<script>
import {eventBus} from '../main';
import BookingService from '../services/BookingService'
export default {
  name: "bookings-grid",
  data(){
    return {
      // isCheckedInUpdate: null
    }
  },
  props: ["bookings"],
  methods: {
    handleDelete(id){
      BookingService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id));
    },
    handleUpdate(booking){
      // console.log("hello from handleUpdate:", id);
      const id = booking._id
      const payload = {
        name: booking.name,
        email: booking.email,
        isCheckedIn: booking.isCheckedIn
      };
      // console.log("id:", id)
      // console.log("payload:", payload)
      BookingService.updateBooking(payload, id)
      .then(response => eventBus.$emit('booking-updated', booking));
    }
  }
}
</script>

<style lang="css" scoped>
#bookingsGrid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
#booking {
  border: 3px ridge #ffd342;
  border-radius: 5px;
  margin: 10px;
  padding: 2px;
}
.true {
  color: green;
}
.false {
  color: red;
}
</style>
