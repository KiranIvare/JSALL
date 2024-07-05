const URL = "https://cat-fact.herokuapp.com/facts";

let fact = document.getElementById("fact");
const btn = document.querySelector("#btn");

// let promise = fetch(URL);
// console.log(promise);
// fetch api == get request // data gheun yene 
const getfacts = async () =>{
    console.log("getting data ....");
    let response = await fetch(URL);
    console.log(response);

    let data = await response.json();
    console.log(data);
    fact.innerText = data[1].text;
}

btn.addEventListener("click",getfacts);