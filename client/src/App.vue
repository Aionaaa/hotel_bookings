<template>
  <div id="app">
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
