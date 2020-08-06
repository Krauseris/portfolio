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
    });
    $(".nonstop").on('click', function() {
        $("#menu, #closemenu").toggle();
        $("#hidemenu").toggle();
        $("#translate_nav").toggle();
        $('body').toggleClass('stops');
    });
});
