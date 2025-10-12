// let adityaKumar = document.getElementsByClassName("box");
// console.log(adityaKumar);

// //changing the 3rd box to red
// adityaKumar[2].style.backgroundColor = "pink";

//Targetting by id
// document.getElementById("2ndbox").style.backgroundColor = "yellow";

//Query selecto
// document.querySelector(".box").style.backgroundColor = "skyblue";

// Query Selector all
console.log(document.querySelectorAll(".box"));

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "greenyellow";
})
