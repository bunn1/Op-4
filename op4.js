let url = "https:api.documenu.com/v2/restaurants/search/fields?state=ca?key=4c4b844c1d91dbd4522a4f2e0ac076a4"
console.log(url);
url = "op4.json"

fetch(url)
.then(function(response) { 
 return response.json(); 
})
.then(function (obj){
    console.log(obj.data)

})