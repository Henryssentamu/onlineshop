
import {numberOfOrders,getCurrentQantity, getDeliveryLocation} from "../html-files/generated-htmls/main-body.js"

/** this variable keep truck of ordered product's id and the qantity which will be used in backend to quarry product database to generate order page  */
let orderDetails = []






document.querySelectorAll(".add-to-chart-button")
.forEach((button)=>{
    button.addEventListener("click",()=>{
        let productId = button.dataset.productId

        /** feedback for the added product */

        document.querySelector(`.added-to-chart-notification_${productId}`).innerHTML = "added to chart"

        /** updating the order figure  in the chart section */
        numberOfOrders()

        let qantityOfOrderedProduct = getCurrentQantity(productId)
        let deliver_to = getDeliveryLocation()

        orderDetails.push({"product_Id":productId,"ordered_Qantity":qantityOfOrderedProduct, "DeliveryTo":deliver_to})

        

    
    })
})





