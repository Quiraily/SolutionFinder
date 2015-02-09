window.onload = function() {


function JSON(url)
{
    this.client = new XMLHttpRequest();
    this.url    = url
    this.get    = GET

    function GET()
    {
        this.client.open("GET", this.url);        
        JSON.parse(this.client.responseText)    
        this.client.send();
    }

}


var Hay = new JSON('content.json');

console.log(Hay.get())

};