use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Harry Potter",
    email: "harryp@hogwarts.edu.uk",
    isCheckedIn: true
  },
  {
    name: "Draco Malfoy",
    email: "ilikesnakes@hogwarts.edu.uk",
    isCheckedIn: false
  },
  {
    name: "Hagrid",
    email: "naturelover73@hogwarts.edu.uk",
    isCheckedIn: true
  }
]);
