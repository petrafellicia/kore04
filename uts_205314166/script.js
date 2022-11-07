function generate(){
    var quotes = {
        "- Karl Lagerfeld": '"What I like about photography is that they capture moments that are lost <b>forever</b>, and it is impossible to reproduce them."' 
    }
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("quote").style.fontFamily = "Mumblers Demo";
    document.getElementById("author").innerHTML = author;
    document.getElementById("author").style.fontFamily = "Mumblers Demo";
}