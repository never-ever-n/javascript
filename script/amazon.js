

let productsgrid=document.querySelector(".products-grid")
let product="";
products.forEach((index)=>{
    product+=`
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${index.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${index.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${index.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${index.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(index.priceCents/100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-id="${index.id}"
                data-name="${index.name}"
                data-image="${index.image}"
                data-pricecents="${index.priceCents}">
            Add to Cart
          </button>
        </div>`
    }
)
console.log(product)
productsgrid.innerHTML=product
let count=0;
document.querySelectorAll(".js-add-to-cart").forEach((button)=>{
    button.addEventListener("click",(event)=>{
        let ids=event.target.dataset.id;
        let names=event.target.dataset.name;
        let images=event.target.dataset.image;
        let pricecents=event.target.dataset.pricecents;
        cart.forEach((item)=>{
            if(item.id==ids){
              item.quantity++
              count++
            }
        })
        if(count==0){
          cart.push({
            id:ids,
            name:names,
            image:images,
            pricecents:pricecents,
            quantity:1,
          })
        }
        let cartquantity=0
        cart.forEach((item)=>{
          cartquantity+=item.quantity
        })
        document.querySelector(".cart-quantity").innerHTML=cartquantity
      count=0;
      console.log(cart)
    })
})