"use strict"; 
import { ListOfProduct } from "./products.js";
import CartSec from "./cart.js";
  
ListOfProduct();

const addtocartbtnDom = document.querySelectorAll('[data-action="add-to-cart"]');

addtocartbtnDom.forEach(addtocartbtnDom => {
    const obj = new CartSec();
    obj.cartBlock(addtocartbtnDom);
});
        