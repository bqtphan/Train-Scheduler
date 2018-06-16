var config = {
    apiKey: "AIzaSyCUFLGJF9uw_6Fh9-H7qarDtyaxZrRJzkY",
    authDomain: "my-awesome-proj-58d4d.firebaseapp.com",
    databaseURL: "https://my-awesome-proj-58d4d.firebaseio.com",
    projectId: "my-awesome-proj-58d4d",
    storageBucket: "my-awesome-proj-58d4d.appspot.com",
    messagingSenderId: "505207383886"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#addTrain").on("click", function (event) {
    event.preventDefault();

    name = $("#name-input").val().trim();
    destination = $("#destination-input").val().trim();
    first = $("#first-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    database.ref().push({
        trainName: name,
        destination: destination,
        firstTrain: first,
        frequency: frequency,
    });
});

let nextArrival = '10:30';
let minutesAway = moment().toNow();


database.ref().on("child_added", function (childSnapshot) {


    $("#trainSchedule").append(
        "<tr><td>" + childSnapshot.val().trainName +
        "</td><td>" + childSnapshot.val().destination +
        "</td><td>" + childSnapshot.val().frequency +
        "</td><td>" + nextArrival +
        "</td><td>" + minutesAway + "</td>");

}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});