$.fn.timedDisable = function(time) {
    if (time == null) { time = 500; }
    return $(this).each(function() {
        $(this).attr('disabled', 'disabled');
        var disabledElem = $(this);
        setTimeout(function() {
            disabledElem.removeAttr('disabled');
        }, time);
    });
};

function send() {
    document.location.href = "https://mail.google.com/"
}

const but = document.getElementById('send');

but.onclick = send; 

$(function() {
    $("#butmenu").on('click', function() {
        $("#menu, #closemenu").toggle();
        $("#hidemenu").slideToggle(500);
        $("#translate_nav").fadeToggle(600);
        $('#butmenu').timedDisable();
        $('body').toggleClass('stops');
        $("#home").toggleClass('forstops');
    });
    $(".nonstop").on('click', function() {
        $("#menu, #closemenu").toggle();
        $("#hidemenu").toggle();
        $("#translate_nav").toggle();
        $('body').toggleClass('stops');
        $("#home").toggleClass('forstops');
    });
});
