$(document).ready(function() {

  (function() {

    $.getJSON("http://www.telize.com/geoip?callback=?",
    function(json) {
      // document.write("Geolocation information for IP address : ", json.ip);
      // document.write("Country : ", json.country);
      // document.write("Latitude : ", json.latitude);
      // document.write("Longitude : ", json.longitude);
      // console.log("timezone : ", json.timezone);
      // city
      // offset

      var x = new Date();
      var currentTimeZoneOffsetInHours = x.getTimezoneOffset() / 60;
      console.log(json.offset);
      console.log(calcTime(json.city, currentTimeZoneOffsetInHours));
      // alert(calcTime(json.city, json.offset));

      newDate = calcTime(json.city, currentTimeZoneOffsetInHours);
      clockDisplay(newDate);
    }
  );


  function calcTime(city, offset) {
    // create Date object for current location
    var d = new Date();

    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    var utc = d.getTime() - (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    var nd = new Date(utc + (3600000*offset));

    // return time as a string
    return "The local time for city "+ city +" is "+ nd.toLocaleString();
  }

  // alert(calcTime('Bombay', '+5.5'));



  function clockDisplay(newDate) {
// Create two variable with the names of the months and days in an array
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// Create a newDate() object
var newDate = new Date();
// Extract the current date from Date object
newDate.setDate(newDate.getDate());
// Output the day, date, month and year
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval( function() {
	// Create a newDate() object and extract the seconds of the current time on the visitor's
	var seconds = new Date().getSeconds();
	// Add a leading zero to seconds value
	$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);

setInterval( function() {
	// Create a newDate() object and extract the minutes of the current time on the visitor's
	var minutes = new Date().getMinutes();
	// Add a leading zero to the minutes value
	$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);

setInterval( function() {
	// Create a newDate() object and extract the hours of the current time on the visitor's
	var hours = new Date().getHours();
	// Add a leading zero to the hours value
	$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);

}







})();


});
