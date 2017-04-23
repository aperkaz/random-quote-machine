/**
 *
 * Animation handling class
 *
 **/


/*
 * Entering animation for quote-panel
 */
function fadeInQuotePane() {
    $('#quote-panel').animateCSS('fadeInLeft', {
        delay: 200
    });

}

/*
 * Exit animation for quote-panel
 */
function fadeOutQuotePane() {
    $('#quote-panel').animateCSS('fadeOutRight', {
        duration: 500,
        callback: function() {
            $(this).hide();
        }
    });
}
