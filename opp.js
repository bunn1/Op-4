// Hämtar url
let url = "https:api.documenu.com/v2/restaurants/search/fields?state=ca?key=4c4b844c1d91dbd4522a4f2e0ac076a4"

// Fiskar upp element
const formElement = document.getElementById("searchForm")
const cityInputElement = document.getElementById("cityInput")
const cuisineInputElement = document.getElementById("cousin")
const stateInputElement = document.getElementById("state")

// Tom lista
let restaurantList = [];
url = "data.json"
console.log(url)


let list = document.getElementById("list");

// Lista med strängar - städer
const objektCity = ['Petaluma', 'Pico Rivera', 'Perris']

const mapFunc = (element) => element.restaurant_name;

const mappedObject = objektCity.map(mapFunc)




const objectState = ['']

const mapFuncTwo = (element) => element.restaurant_name;

const mappedObjectTwo = objectState.map(mapFuncTwo)



//Hämtar upp info API 
fetch(url)
    .then(function (response) {

        // Tar resursen och konverterar till json data
        return response.json()

        // Tar emot responsen

        // Obj data ´= restaranglista
    }).then(function (obj) {
        console.log(obj.data)
        restaurantList = obj.data
        obj.data.forEach(element => {


            // function appendData (data){
            //     let diven = document.getElementById("result");
            //     for (let i = 0; i < data.length; i++) {
            //         diven.innerHTML = 'address' + data[i].postal_code + data[i].state;
            //     }
            // }
            //
            // let list = document.getElementById("list");
            // let listItem = document.createElement("li");
            // let listChild = document.createElement("p");

            // listItem.appendChild(document.createTextNode(element.restaurant_name))

            // list.appendChild(listItem)
            // listItem.appendChild(listChild)

            // listChild.textContent = element.cuisines

        })

    })


// const objektCity = [{restaurant:adress.city}]
// function getCity(adress, city) {
//     let objektCity = [adress.city].join("")
//     return objektCity;
// }

// Anonym funktion för click submit
formElement.addEventListener('submit', event => {
    event.preventDefault()
    // console.log(cityInput)

    // filter restaurants blir en ny array som bara innehåller rest du vill ha  
    const filterrestaurants = restaurantList.filter(rest => {


        // Funktionen kollar efter två kriterier / alltså matchar restaurangen och staden / den utgår från att den inte gör det därför sätter vi dem till false
        let matchCousin = false;
        let matchCity = false;
        let matchState = false;
        // Trimmar bort widespace och kollar om strängen är tom / om anv inte skrivit in några kriterier så behandlar vi det som att det matchar.
        if (cityInputElement.value.trim() === "") {
            matchCity = true;
        }
        if (cuisineInputElement.value.trim() === "") {
            matchCousin = true;
        } 
        if (stateInputElement.value.trim() === ""){
            matchState = true;}

        
     // går igenom varje cousin i restaraungen och kollar om det matchar vad anv skrev
        rest.cuisines.forEach(cuisin => {
            if (cuisin.trim().toLowerCase() === cuisineInputElement.value.trim().toLowerCase()) {
              matchCousin = true;
            }
        })


    
        // Konvertera till småbokstäver, är staden samma som anv skrivit in 
         if (rest.address.city.toLowerCase() === cityInputElement.value.toLowerCase()){
             matchCity = true;
         }
         if (rest.address.state.toLowerCase() === stateInputElement.value.toLowerCase()){
            matchState = true;
        }
         return matchCousin && matchCity && matchState;
    })
    // Sortera filterRestaurants efter bokstav och kolla på restaurant_name.

    const mappedRestaurants = filterrestaurants.map(mapFunc)

    // list.innerHTML = mappedRestaurants

    // Rensar ut HTML
    list.innerHTML = "";

    // mapped Rest loop
    filterrestaurants.forEach(rest => {

        console.log(rest)

        // skapa HTML enligt en mall
        let tagString = `<li>
        <h3>${rest.restaurant_name}</h3>
        <hr>
        <h5>${rest.address.city}</h5>
        <h5>${rest.address.state}</h5>
        <h5>${rest.restaurant_phone}</h5>
        </li>`

        //Tryck in strängen i list
        list.innerHTML += tagString;

    })

})

let rensa = document.getElementById("clear");

rensa.addEventListener("click", () => {

    list.innerHTML = "";
})









// let resultRes =document.getElementById("result")

// function renderRestaurants() {
//     fetch(url)
//         .then((response) => response.json()) 
//         .then((obj) => {
//              console.log(obj.data)

//         obj.data.forEach(element => {

//              console.log(element.restaurant_name, element.restaurant_phone, element.adress.state)


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