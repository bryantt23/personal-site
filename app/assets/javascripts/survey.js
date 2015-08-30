$(document).ready(function() {

  var names = ["Do you love computers?","Are you fascinated by logic, thinking, and analysis?",
  "Do you enjoy coding in your free time?","Do like to learn, build, and share?",
  "Does programming just feel right to you?","Are you self-taught and/or classroom instructed?",
  "Do you have projects, do you have a portfolio to display your work?","Do you have previous experience such as an internship or job?" ,
  "Are you a Unicorn who can develop and design?","Have you contributed to Open Source and built your own Startup while also doing Freelance while Leading teams of developers?" ,
  "Do you have 20 years of experience with Windows 2000?","Are you 22 years old with 30 years of experience?",
  "Have you mastered HTML5, HTML6, and HTML7-10?","Have you fallen in love with Siri yet?" ]


  for(var i=0; i < names.length; i++){
    // $( "ul.friends" ).append('<li>' + names[i] + '</li>');
    // $( "ul.friends" ).append('<li>' + names[i] + '</li>');

    $( "ul.questions" ).append('<label><input type="checkbox" name="myCheckbox" />' +names[i] +'</label> <br />');
    // $( "ul.friends" ).append("<input type="checkbox" />" + names[i] + "<br />");

  }




  // stress test code********************************************************
  function displayVals() {
    calcUsage();
  }

  // variable for  checkboxes
  var $myCheckbox = $('input[name="myCheckbox"]');

  function calcUsage() {
    var NUMBER_OF_QUESTIONS=14;
    var total = 0;
    var percent;

    // for each checkbox
    $myCheckbox.each(function() {

      // if this checkbox is checked
      if (this.checked)

      // parse the value and add it to the total
      total += 1;
      percent = Math.floor((total/NUMBER_OF_QUESTIONS) * 100);
    });

    //display message to user based on total
    //display in the div named usertotal
    if(percent>75){
      $("#usertotal").html(percent +"%. <br>You are supremely confident and a code ninja!");
      lastQuestion();
    }
    else if (percent>50){
      $("#usertotal").html(percent +"%. <br>You need to be even more confident still... <br>Mark even more answers as Yes, meaning \"Yes I can and will learn anything and everything that it takes!\"");
    }
    else if (percent>25){
      $("#usertotal").html(percent +"%. <br>You need to be even more confident... <br>Mark more answers as Yes, meaning \"Yes I can and yes I will learn this!\"");
    }
    else{
      $("#usertotal").html(percent +"%. <br>You need to be much more confident... <br>Mark more answers as Yes, meaning \"Yes I am learning this :)\"");
    }
  }



  function lastQuestion() {
      var x= "You are HIRED! :)";
      if (confirm("One last question: Will you keep learning and building until you get your dream job?") == true) {
          // x = "You got the Job!";
      } else {
        lastQuestion();
      }
      document.getElementById("job").innerHTML = x;
  }


  $("select").change(displayVals);
  displayVals();

  $myCheckbox.click(calcUsage);



});
