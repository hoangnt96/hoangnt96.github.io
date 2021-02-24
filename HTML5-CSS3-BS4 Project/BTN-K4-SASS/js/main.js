// scrolling progress-bar animate
var timerId, percent;
percent = 0;
var count = 1;
var scrollTop = $(window).scrollTop(),
    elementOffset = $('.skills').offset().top,
    distance = (elementOffset - scrollTop - 250);
$(window).scroll(function () {
    if ($(document).scrollTop() > distance && count == 1) {
        $('.progress').css('width', '0px').addClass('progress-bar-animated active');
        timerId = setInterval(function () {
            percent += 1;
            $('.progress').css('width', percent + '%');
            if (percent >= 100) {
                percent = 0;
                clearInterval(timerId);
                $('.progress').removeClass('progress-bar-animated active');
            }
        }, 1);
        count++;
    }
    else {
        window.stop();
    }
});
// refresh the page when the user resizes
$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 100);
});




