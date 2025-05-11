let container = document.getElementById("container")
let ul = document.getElementById("ul")


// fetch(' https://rickandmortyapi.com/api/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then((data) => {
        // console.log(data)
        data.results.map(items => {
            let li = document.createElement("li")
            ul.appendChild(li)
            li.innerText = `name : ${items.name}`
        })
        data.results.map(items => {
            let img = document.createElement("img")
            ul.appendChild(img)
            img.src = items.image;
        })
        
    });

