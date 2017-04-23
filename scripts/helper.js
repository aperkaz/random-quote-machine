/**
*
* Helper class that inserts values in placeholders.
*
**/

function setQuote(quote){
  this.document.getElementById("quote").innerHTML = '<i>"' + quote  + '"</i>';
}

function setAuthor(author){
  this.document.getElementById("author").innerHTML = '- ' + author;
}
