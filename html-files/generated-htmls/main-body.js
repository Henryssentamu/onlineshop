/*import { product_data } from "../../data-file/product-details.js"*/


/** this is not supposed to be here! it should be in data details file */
const product_data = [
    {
    "id":1,
    "name":"Reveal Cap Toe",
    "image":"../../data-file/product-images/51JurNzG3kL._AC_SY575_.jpg",
    "price":6995,
    "availabelSize":[40, 42, 44,45,],
    "availableColors":["Gray","white","black"],
    "CountryofOrigin":"China"

 },
 {
    "id":2,
    "name":"Reveal Cap Toe",
    "image":"../../data-file/product-images/51OXfpRkphL._AC_SY575_.jpg",
    "price":6995,
    "availabelSize":[40, 42, 44,45,],
    "availableColors":["Gray","white","black"],
    "CountryofOrigin":"China"

 },

 {
    "id":3,
    "name":"Reveal Cap Toe",
    "image":"../../data-file/product-images/61hgRH+1i6L._AC_SY695_.jpg",
    "price":6995,
    "availabelSize":[40, 42, 44,45,],
    "availableColors":["Gray","white","black"],
    "CountryofOrigin":"China"

 },

 {
    "id":4,
    "name":"Reveal Cap Toe",
    "image":"../../data-file/product-images/61IPl+NUxUL._AC_SX575_.jpg",
    "price":6995,
    "availabelSize":[40, 42, 44,45,],
    "availableColors":["Gray","white","black"],
    "CountryofOrigin":"China"

 },

 {
    "id":5,
    "name":"Reveal Cap Toe",
    "image":"../../data-file/product-images/61sIzwoVt7L._AC_SY575_.jpg",
    "price":6995,
    "availabelSize":[40, 42, 44,45,],
    "availableColors":["Gray","white","black"],
    "CountryofOrigin":"China"

 },
 {
    "id":6,
    "name":"Reveal Cap Toe",
    "image":"../../data-file/product-images/71Ag6LHwrQL._AC_SY695_.jpg",
    "price":6995,
    "availabelSize":[40, 42, 44,45,],
    "availableColors":["Gray","white","black"],
    "CountryofOrigin":"China"

 },
 {
    "id":7,
    "name":"Reveal Cap Toe",
    "image":"../../data-file/product-images/71JAavlIpUL._AC_SX575_.jpg",
    "price":6995,
    "availabelSize":[40, 42, 44,45,],
    "availableColors":["Gray","white","black"],
    "CountryofOrigin":"China"

 },

 {
    "id":8,
    "name":"Reveal Cap Toe",
    "image":"../../data-file/product-images/71MLZDWkdbL._AC_SX575_.jpg",
    "price":6995,
    "availabelSize":[40, 42, 44,45,],
    "availableColors":["Gray","white","black"],
    "CountryofOrigin":"China"

 },

 {
    "id":9,
    "name":"Reveal Cap Toe",
    "image":"../../data-file/product-images/71pjjWhGswL._AC_SX575_.jpg",
    "price":6995,
    "availabelSize":[40, 42, 44,45,],
    "availableColors":["Gray","white","black"],
    "CountryofOrigin":"China"

 },


]









/** afunction which create select element dynamically with different options  *

export function qantity_selection(Id){
   let selectElement = document.createElement("select")
   selectElement.className = `selectQantity-${Id}`
   console.log(selectElement.className)
   for(let i =1; i<= 10; i++){
    let options = document.createElement("option")
    options.value = i;
    options.text = i;
    selectElement.appendChild(options);

   }
   return selectElement
   
}*/

let generated_main_html = ""

product_data.forEach((product) =>{

    /** accessing product id so that pass it as a parameter to select qantity function  *
    let qantitySelection = qantity_selection(product.id);*/
    generated_main_html += `
    <div class=" product-container"> 
        <div class="product-image-section">


            <!-- THIS LINK SHOULD TAKE YOU TO THE PRODUCT DETAILS PAGE ON CLICK IN THE IMAGE.. AND IT IS TO BE DONE IN THE BACKEND -->


            <a class="image-link" herf="{{url_for('#')}}">
                <img  class="product-image" src="${product.image}">  
            </a>
        </div>



        <div class="details-container">
            <div class=" product-name">
                Name: ${product.name}
            </div>
            <div class="shopping-details">
                <div class="product-price">
                    Price: $ ${(product.price/100).toFixed(2)}
                </div>
                <div class="select-qantity">    
                    <!-- the function brings error on accessing current qantity. there i used select element direct -->

                    <select class = "selectQantity-${product.id}">
                        <option value = "1"> 1 </option>
                        <option value = "2"> 2 </option>
                        <option value = "3"> 3 </option>
                        <option value = "4"> 4 </option>
                        <option value = "5"> 5 </option>
                        <option value = "6"> 6 </option>
                        <option value = "7"> 7 </option>
                        <option value = "8"> 8 </option>
                        <option value = "9"> 9 </option>
                        <option value = "10"> 10 </option>
                    </select>                  
                
                </div>
            </div>
        </div>
        <div class=" added-to-chart-notification-css  added-to-chart-notification_${product.id}"></div>

        <div class="button-section">
            <button  data-product-id="${product.id}"class="add-to-chart-button"> add to chart </button>
        </div>

        


     </div>
`
});



document.querySelector(".main_body_section")
    .innerHTML = generated_main_html


/** a function which update that the order figure */

export function numberOfOrders(){

    /** getting the current number  */

    let currentOrderNumber = Number(document.querySelector(".number-of-orders").innerHTML)

    /** updating it  */

    document.querySelector(".number-of-orders")
        .innerHTML = currentOrderNumber + 1
    
    

}


/** a function that get the current qantity selected */

export function getCurrentQantity(id){

    let currentQantity = document.querySelector(`.selectQantity-${id}`).value
    return currentQantity;
    
}

export function getDeliveryLocation(){
    let location = document.querySelector(".select").value
    console.log(location)
    return location
}





