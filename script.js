function fetchProduct() {
    fetch('./data/products.json').then(res => {
        if (!res.ok) {
            throw new Error('network response was not ok')
        }

        return res.json()
    })
    .then(data => {
        const products = data;
        // fetch data to component
        // <div class="product-item">
        //             <img src="assets/product-1.png" alt="">
        //             <div class="product-item-description">
        //                 <h1>2x Royal Canin Hair & Skin Care Adult Dry Cat Food 400gr</h1>
        //                 <p>Rp 168.000</p>
        //                 <div class="product-item-btn">
        //                     <button>-</button>
        //                     <input disabled type="text" name="" id="" value="1">
        //                     <button>+</button>
        //                 </div>
        //             </div>
        //         </div> 
        // <div class='product-item'></div>

        const productContainer = document.getElementById('product-list');
        productContainer.innerHTML = '';

        products.forEach(item => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            // add thumbnail
            const productThumbnail = document.createElement('img');
            productThumbnail.src = `/assets/${item.thumbnail}`
            productItem.appendChild(productThumbnail)

            // product item description
            const  productItemDescription = document.createElement('div');
            productItemDescription.classList.add('product-list-description');
            productItem.appendChild(productItemDescription)
            
            const productName = document.createElement('h1');
            productName.innerText = item.name;
            productItemDescription.appendChild(productName)

            const productPrice = document.createElement('p');
            productPrice.innerText = item.displayPrice;
            productItemDescription.appendChild(productPrice)

            //  product item btn
            const productItemBtn = document.createElement('div');
            productItemBtn.classList.add('product-list-btn');
            productItem.appendChild(productItemBtn)

            const btnMinus = document.createElement('button');
            btnMinus.innerText = '-';
            productItemBtn.appendChild(btnMinus)

            const inputQty = document.createElement('input');
            inputQty.innerText = '0';
            productItemBtn.appendChild(inputQty)

            const btnPlus = document.createElement('button');
            btnPlus.innerText = '+';
            productItemBtn.appendChild(btnPlus)

            
            // append all component
            productContainer.append(productItem)
        })
    })
    .catch(err => {
        console.log(err);
    })
}

fetchProduct()