<template>
  <div id="app">
<p>{{bookings}}</p>
  </div>
</template>

<script>
import {eventBus} from './main';
import BookingService from './services/BookingService';

export default {
  name: 'app',
  data() {
    return {
      bookings: []
    }
  },
  components: {

  },
  mounted(){
    this.fetchData();
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
