const shop = document.querySelector("#product");
const products = "https://api.sampleapis.com/coffee/hot";
const getData = async () => {
  try {
    const params = new URLSearchParams(document.location.search);
    const id = params.get("id");
    const res = await fetch(`${products}`).then((d) => d.json());

    res
      ?.filter((r) => r.id == id)
      .map((e) => {
        shop.innerHTML += `
        

<div class="d-flex position-relative mt-5 gap-4 flex-column flex-md-row">
<div class="img col-12 col-md-5"> 
     <img src='${e.image}' alt="${e.title}" />
    </div>
  <div class="mt-3 mt-md-5 col-12 col-md-6">
    <h3 class="fs-2">${e.title}</h3>
  <p>${e.description}</p>
  <div class="in-text">
    <div style="width: 100%;" class="price d-flex align-items-center justify-content-between">
      <h6 class="m-0">$${Math.round(e.id * Math.random() * 10 * 100) / 100}</h6>
      <div class="s-btnn"><a href="http://127.0.0.1:5500/order.html?id=${
          e.id
        }">Order Now</a></div>
    </div>

</div>

  <div class="top-icon">
    <a href="#"><i class="bx bx-heart"></i></a>
  </div>
  </div>
</div>
      
      `;
      });
  } catch (error) {}
};

getData();
