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

})();


});
