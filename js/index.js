const products = 'https://api.sampleapis.com/coffee/hot'
const shop = document.querySelector('#shop-content')
const review = document.querySelector('#review-content')


 const getData = async () => {
    try {
       const res =  await fetch(`${products}`).then((d) =>d.json())
    
       res?.splice(0, 4).map((e) => {
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
       const users = await fetch(`https://raw.githubusercontent.com/wesbos/app/master/data/users.json`).then((d) => d.json())

       const reviewRes = await fetch('https://raw.githubusercontent.com/wesbos/app/master/data/reviews.json').then((d) => d.json())
       reviewRes?.splice(0, 3).map((e, i) => {
       let user = users.filter((u) => u._id == e.author)[0]
        return review.innerHTML += `
        <div class="box">
        
        <div class="in-box">
            <div class="bx-img"><img src="./assets/img/r${i+1}.jpg" alt="r1" /></div>
            <div class="bxx-text">
            <h4>${user.name}</h4>
            <h5>${user.email}</h5>
            </div>
           
        </div>
        <div class="ratings mt-1 mb-4 align-items-center d-flex justify-content-center">
        ${Array.from(Array(e.rating).keys()).map(r => '<a href="#"><i class="bx bxs-star"></i></a>').join(',').replaceAll(',', '') }
           </div>
           <p>
            ${e.text}
        </p>
        </div>
        `
       })
    } catch (error) {
        
    }
}

getData()
