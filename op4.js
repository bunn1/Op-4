let url = "https:api.documenu.com/v2/restaurants/search/fields?state=ca?key=4c4b844c1d91dbd4522a4f2e0ac076a4"
console.log(url);
url = "op4.json"

fetch(url)
.then(function(response) { 
 return response.json(); 
})
.then(function (obj){
    console.log(obj.data)
    obj.data.forEach (element => {


        // Fiska upp elementet

        let restaurantName = document.getElementById("name_Restaurant");
        let restaurantPhone = document.getElementById("restaurant_Phone");

        // Sätter fast och skapar element

        restaurantName.appendChild(document.createTextNode(element.restaurant_name));
        restaurantPhone.appendChild(document.createTextNode(element.restaurant_phone));

        // Ge elementen innehållet från aktuellt objekt

        restaurantName.textContent = element.restaurant_name;
        restaurantPhone.textContent = element.restaurant_phone;



    })
})