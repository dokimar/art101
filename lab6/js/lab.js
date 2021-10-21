/* UCSC; ART101 Fall 2021; Lab 6: Arrays and Objects.
 * Experiment with basic JavaScript arrays and objects.
 * Author(s):   Ariana Lazich and Marlene Lopez <mlope109@ucsc.edu>
 * Created:     21 October 2021
*/


// an array myTransport that lists all of the forms of transportation you use to get around
var myTransport = ["car", "bus", "train", "bike", "scooter"];


// an object myMainRide that collects all the data you specified for your primary vehicle in Lab 5
var myMainRide = {
  type: myTransport[0],
  make: 'Honda',
  model: 'Civic',
  color: 'Red',
  year: 2012
};


// add age to myMainRide object
myMainRide.age = 2021 - myMainRide.year + " years old";


// Output
  // Use document.writeln() to neatly output myTransport
  document.writeln("Getting around: " +
                    myTransport[0] + ", " +
                    myTransport[1] + ", " +
                    myTransport[2] + ", " +
                    myTransport[3] + ", " +
                    myTransport[4] + "<br>"
                  );
  // Use document.writeln() to neatly output myMainRide
  document.writeln("<p>My Main Ride: <pre>",
                    JSON.stringify(myMainRide, null, '\t'),
                    "</pre></p>");
