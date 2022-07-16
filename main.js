let url = "https://uselessfacts.jsph.pl/random.json?language=en";

let fact  = document.querySelector('.fact');

fetch(url)
    .then(Response => Response.json())
    .then(data => displayfact(data))
    .catch(error => console.log(error));

function displayfact(data){
    fact.innerHTML = '\"  ' + data.text + '  \"';
}