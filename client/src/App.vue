<template>
  <div id="app">
    <h1>Harry Potter Hotel Booking Tool</h1>
    <bookings-form />
    <bookings-grid :bookings="bookings" />
  </div>
</template>

<script>
import {eventBus} from './main';
import BookingService from './services/BookingService';
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';
export default {
  name: 'app',
  data() {
    return {
      bookings: []
    }
  },
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  },
  mounted(){
    this.fetchData();

    eventBus.$on('booking-added', booking => this.bookings.push(booking));

    eventBus.$on('booking-deleted', id => {
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1)
    });
    eventBus.$on('booking-updated', booking => {
      console.log("hello from the eventBus");
    });
  },
  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings)
    }
  }
}
</script>

<style>
#app {
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffd342;
  margin-top: 60px;
  text-shadow: 2px 2px #4a32a8;
}
html {
  background-color: #8f2621;
}
</style>
