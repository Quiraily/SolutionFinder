window.onload = function() {

var xmlrequest = new XMLHttpRequest();
var url = 'content.json';

xmlrequest.open("GET", url, true);
xmlrequest.send();

var a= JSON.parse(xmlrequest.open("GET", url, true))
console.log(a)
};