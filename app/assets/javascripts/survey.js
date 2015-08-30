$(document).ready(function() {

  /*

  // I am a convenience method for creating a Friend node
  // with the given name (returned as a jQuery object).
  function createFriendNode( name ){
  // Create the friend node.
  return(
  $( "<li>" + name + "</li>" )
  );
  }
  // Create an array of friends.
  var buffer = [];
  buffer.push( createFriendNode( "Joanna" ) );
  buffer.push( createFriendNode( "Lisa" ) );
  buffer.push( createFriendNode( "Tricia" ) );
  buffer.push( createFriendNode( "Kim" ) );
  // Append the friends to the DOM.
  $( "ul.friends" ).append( buffer );


  var element = $('ul:first');

  */
  var names = ["Joanna","Lisa","Tricia","Kim" ]

  for(var i=0; i < names.length; i++){
    // $( "ul.friends" ).append('<li>' + names[i] + '</li>');
    // $( "ul.friends" ).append('<li>' + names[i] + '</li>');

    $( "ul.friends" ).append('<input type="checkbox" name="myCheckbox" />' +names[i] +' <br />');
    // $( "ul.friends" ).append("<input type="checkbox" />" + names[i] + "<br />");

  }




    // stress test code********************************************************
    function displayVals() {
      calcUsage();
    }

    // variable for  checkboxes
    var $myCheckbox = $('input[name="myCheckbox"]');

    function calcUsage() {
      var total = 0;

      // for each checkbox
      $myCheckbox.each(function() {

        // if this checkbox is checked
        if (this.checked)

        // parse the value and add it to the total
        total += 1;
      });

      //display message to user based on total
      //display in the div named usertotal
      if(total>299){
        $("#usertotal").text(total + ". At risk of illness.");
      }
      else if (total>149){
        $("#usertotal").text(total +". Risk of illness is moderate.");
      }
      else{
        $("#usertotal").text(total +". Only have a slight risk of illness.");
      }
    }

    $("select").change(displayVals);
    displayVals();

    $myCheckbox.click(calcUsage);



});
