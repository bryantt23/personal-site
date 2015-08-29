$(document).ready(function() {


  $(function(){
    $( ".accordion-flashcard" ).accordion(
      {
        active: false, heightStyle: "content",
        collapsible: true
      });
    });


// http://stackoverflow.com/questions/12843418/jquery-ui-accordion-expand-collapse-all
    $("#accordion").accordion({
      collapsible:true,
      active:false
    });
    var icons = $( "#accordion" ).accordion( "option", "icons" );
    $('.open').click(function () {
      $('.ui-accordion-header').removeClass('ui-corner-all').addClass('ui-accordion-header-active ui-state-active ui-corner-top').attr({
        'aria-selected': 'true',
        'tabindex': '0'
      });
      $('.ui-accordion-header-icon').removeClass(icons.header).addClass(icons.headerSelected);
      $('.ui-accordion-content').addClass('ui-accordion-content-active').attr({
        'aria-expanded': 'true',
        'aria-hidden': 'false'
      }).show();
      $(this).attr("disabled","disabled");
      $('.close').removeAttr("disabled");
    });
    $('.close').click(function () {
      $('.ui-accordion-header').removeClass('ui-accordion-header-active ui-state-active ui-corner-top').addClass('ui-corner-all').attr({
        'aria-selected': 'false',
        'tabindex': '-1'
      });
      $('.ui-accordion-header-icon').removeClass(icons.headerSelected).addClass(icons.header);
      $('.ui-accordion-content').removeClass('ui-accordion-content-active').attr({
        'aria-expanded': 'false',
        'aria-hidden': 'true'
      }).hide();
      $(this).attr("disabled","disabled");
      $('.open').removeAttr("disabled");
    });
    $('.ui-accordion-header').click(function () {
      $('.open').removeAttr("disabled");
      $('.close').removeAttr("disabled");

    });









  })
