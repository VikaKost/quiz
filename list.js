let selectDefaultHeight = $('#selectBox').height();
let rotateDefault = "rotate(0deg)";


$(document).on('click', '#selectBox > p.valueTag', function(){
    var currentHeight = $('#selectBox').height();
    if (currentHeight < 100 || currentHeight == selectDefaultHeight) {
        $('#selectBox').height("250px");  
        $('img.arrow').css({borderRadius: "1000px", transition: ".2s", transform: "rotate(180deg)"});
    }

    if (currentHeight >= 250) {
      $('#selectBox').height(selectDefaultHeight);
      $('img.arrow').css({transform: rotateDefault});
    }
});

$(document).on('click', 'li.option', function(){
    $('#selectBox').height(selectDefaultHeight);
   $('img.arrow').css({transform: rotateDefault});
    $('p.valueTag').text($(this).text());
  });