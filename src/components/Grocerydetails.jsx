import React from "react"
import data from '../data.json'

const GroceryDetails = ()=>{
console.log(data)
  
  data.map = (elem) => {
     
      let div = document.createElement("div");

      let discount = document.createElement("h3");
      discount.innerHTML = elem.discount;

      let img = document.createElement("img");
      img.src = elem.imgURL;
      
      let title = document.createElement("h4")
      title.innerText= elem.title;

      let price = document.createElement("h4");
      price.innerText = elem.sellingPrice; 

      let stackPrice = document.createElement("p");
      stackPrice.innerText = elem.mrp;

      let Addbtn = document.createElement("button");
      Addbtn.innerHTML = "Add to cart"; 

      div.append(discount, img, title, price, stackPrice,Addbtn);
      document.querySelector(".container").append(div);
     
  }
  
    return(
        <>
        <h1 className="heading">Groceries</h1>
        <div className="container">
            
        </div>
        </>
    )
}
export default GroceryDetails