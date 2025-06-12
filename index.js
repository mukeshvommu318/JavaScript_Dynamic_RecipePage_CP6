let recipeObj = {
  title: "Tomato Pasta",
  imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
  ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};


let headEle = document.getElementById("headingId")
headEle.textContent="Tomato Pasta"


let image = document.querySelector("img")
image.src=recipeObj.imgSrc


let urlist = document.querySelector("ul")


for (let each of recipeObj.ingredients){
    let list = document.createElement("li")
    list.textContent=each
    list.setAttribute("class","listclass")
    urlist.appendChild(list)
}