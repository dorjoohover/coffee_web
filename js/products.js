const shop = document.querySelector('#shop-content')
const products = 'https://api.sampleapis.com/coffee/hot'
const getData = async () => {
    try {
       const res =  await fetch(`${products}`).then((d) =>d.json())
    
       res?.splice(0, 16).map((e) => {
        shop.innerHTML += `<div class="content-row">
        <a href="http://127.0.0.1:5500/product.html?id=${e.id}"><div class="img">  <img src='${e.image}' alt="${e.title}" /></div></a>
        <h3>${e.title}</h3>
        <p>${e.description}</p>
        <div class="in-text">
          <div class="price">
            <h6>$${Math.round(e.id * Math.random() * 10 * 100) / 100}</h6>
          </div>

          <div class="s-btnn"><a href="http://127.0.0.1:5500/order.html?id=${e.id}">Order Now</a></div>
        </div>
        <div class="top-icon">
          <a href="#"><i class="bx bx-heart"></i></a>
        </div>
      </div>`
       })
      
    } catch (error) {
        
    }
}

getData()

