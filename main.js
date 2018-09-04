var data;

fetch("https://api.myjson.com/bins/1h3vb3", {

    method: "GET",
}).then(function (response) {

    if (response.ok) {

        return response.json();
    }

    throw new Error(response.statusText);
}).then(function (json) {

    data = json.books;
    console.log(data);
    showBooks();

}).catch(function (error) {

    console.log("Request failed: " + error.message);
});


function showBooks() {
    var block = document.getElementById("block");
    for (var i = 0; i < data.length; i++) {
        var flipper = document.createElement("div");
        flipper.setAttribute("class", "flipper");
        block.appendChild(flipper);
        var frontSide = document.createElement("div");
        frontSide.setAttribute("class", "front");
        var bookImg = data[i].portada;
        frontSide.style.backgroundImage = "url(" + bookImg + ")";
        var backSide = document.createElement("div");
        backSide.setAttribute("class", "back");
        var titleh2 = document.createElement("h2");
        var title = data[i].titulo;
        titleh2.textContent = title;
        var description = data[i].descripcion;
        var descriptionp = document.createElement("p");
        descriptionp.textContent = description;
        var button = document.createElement("button");
        button.textContent= "Más info";
        flipper.appendChild(frontSide);
        flipper.appendChild(backSide);
        backSide.appendChild(titleh2);
        backSide.appendChild(descriptionp);
        backSide.appendChild(button);
        console.log(flipper);
    }
}
