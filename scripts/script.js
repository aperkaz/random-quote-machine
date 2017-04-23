/**
 *
 * Main script class and entry point
 *
 **/


var url = 'https://andruxnet-random-famous-quotes.p.mashape.com/';


/*
 * Initial animations
 */
$(document).ready(function() {
    $('#header').animateCSS('fadeInDownBig');
    $('#quote-panel').animateCSS('fadeInUpBig');
    fetchQuote(url, null);
});

/*
 * On-click API request and animation
 */
$("#request-button").click(function() {

    fadeOutQuotePane();

    fetchQuote(url, fadeInQuotePane);

});

/*
 * Http request to API wiht callback
 */
function fetchQuote(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", url, true);

    setHeaders(xhr);

    xhr.onload = function(e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);

                setQuote(response.quote);
                setAuthor(response.author);

                setTimeout(callback, 200);
            } else {
                console.error(xhr.statusText);
            }
        }
    };
    xhr.onerror = function(e) {
        console.error(xhr.statusText);
    };
    xhr.send(null);

}


/*
 * Populate the request headers
 */
function setHeaders(xhr) {
    xhr.setRequestHeader('X-Mashape-Key', 'YGYAREe7wYmshglq2Vo1ynPashwpp1CISMIjsnBDJn22iJJbvm');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Accept', 'application/json');
}
