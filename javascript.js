

var config = {
    apiKey: "AIzaSyDoCxObyCvOaSK0i9GE15p8OhKVgJmSifY",
    authDomain: "train-f2c42.firebaseapp.com",
    databaseURL: "https://train-f2c42.firebaseio.com",
    projectId: "train-f2c42",
    storageBucket: "",
    messagingSenderId: "573613954796"
  };
  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  //  Button for adding Trains
  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDestination = $("#destination-input").val().trim();
    var trainFrequency = $("#frequency-input").val().trim();
    var firstTrain =  $("#first-train-input").val().trim();
  
    // Creates local "temporary" object for holding train data
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      frequency: trainFrequency,
      firstTrain: firstTrain
    };
  
    // Uploads train data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.frequency);
    console.log(newTrain.firstTrain);
  
    alert("Train successfully added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#destination-input").val("");
    $("#frequency-input").val("");
    $("#first-train-input").val("");
  });
  
  // 3. Create Firebase event for adding trains to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().role;
    var trainFrequency = childSnapshot.val().start;
    var firstTrain = childSnapshot.val().rate;
  
    // Train Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainFrequency);
    console.log(firstTrain);
  
    // Prettify the train start
    var trainStartPretty = moment.unix(trainStart).format("MM/DD/YYYY");
  
    
    var trainMonths = moment().diff(moment(trainStart, "X"), "months");
    console.log(trainMonths);
  
    
    var empBilled = empMonths * empRate;
    console.log(empBilled);
  
    
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainDestination),
      $("<td>").text(trainFrequency),
      $("<td>").text(firstTrain),
    );
  
   
    $("#train-table> tbody").append(newRow);
  });
  
  