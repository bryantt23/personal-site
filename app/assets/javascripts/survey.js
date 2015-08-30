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
    $( "ul.friends" ).append('<li>' + names[i] + '</li>');
  }


});
