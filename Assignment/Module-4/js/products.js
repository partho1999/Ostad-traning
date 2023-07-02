"use strict"; 
import { ProductList } from "./productList.js";


function ListOfProduct(){
    /* Load all data on card */
    console.log(ProductList);
    ProductList.map((item)=>{
        // console.log(item)
        document.getElementById("proid").innerHTML+=(`
        <div class="col-sm-6 col-md-6 col-lg-6 col-xs-6">
            <div class="shadow-sm card mb-3 product">
                <img class="product-img" src=${item['img']} alt="prd-${item['id']}"/>
                <div class="card-body">
                    <h5 class="card-title text-info product-name">${item['name']}</h5>
                    <p class="card-text text-success product-price">${item['price']}</p>
                    <button class="btn badge badge-pill badge-warning mt-2 float-right" type="button"
                    data-action="add-to-cart">Add to cart</button>
                </div>
            </div>
        </div>
    `)
    });
}

export {ListOfProduct}