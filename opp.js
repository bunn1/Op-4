let url = "https:api.documenu.com/v2/restaurants/search/fields?state=ca?key=4c4b844c1d91dbd4522a4f2e0ac076a4"
// console.log(url);

url = "data.json"
console.log(url)

fetch(url)
    .then(function(response) {

        return response.json()
    }).then(function (obj){
        console.log(obj.data)

        obj.data.forEach(element => {

            //
            let list = document.getElementById("list");
            let listItem = document.createElement("li");
            let listChild = document.createElement("p");

            listItem.appendChild(document.createTextNode(element.restaurant_name))

            list.appendChild(listItem)


            listItem.appendChild(listChild)
            listChild.textContent = element.cuisines

        })

    })


// let resultRes =document.getElementById("result")

// function renderRestaurants() {
//     fetch(url)
//         .then((response) => response.json()) 
//         .then((obj) => {
//              console.log(obj.data)
 
//         obj.data.forEach(element => {

//              console.log(element.restaurant_name, element.restaurant_phone)


//                 document.getElementById("result").innerHTML += `
            
//                 <p>${element.restaurant_name}</p>
//                 <p>${element.restaurant_phone}</p>
//                 </div>
//                 `

//             })
            
//         })

// }
// renderRestaurants()








// function getRestaurant(){
//     fetch(url)
//     .then((response) => {
//         return response.json()
//     })

//     .then((data) => {
//         console.log(data)
//         document.getElementById("result").innerHTML = data
//     }) 
// }