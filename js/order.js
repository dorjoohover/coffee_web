const order = document.querySelector("#order-content");
const products = "https://api.sampleapis.com/coffee/hot";
const getData = async () => {
  try {
    const params = new URLSearchParams(document.location.search);
    const id = params.get("id");

    const res = await fetch(`${products}`).then((d) => d.json());
    res
      ?.filter((r) => r.id == id)
      ?.map((e) => {
        const quantity = Math.round(Math.random() * 10);
        const price = Math.round(e.id * Math.random() * 10 * 100) / 100;

        return (order.innerHTML += `<tr >
        <td class="table-active"   colspan="4">${e.title}</td>
        <td class="table-active" >$${price}</td>
        <td class="table-active" >${quantity}</td>
        <td class="table-active" >$${
          Math.round(price * quantity * 100) / 100
        }</td>
      </tr>`);
      });
  } catch (error) {
    console.log(error);
  }
};

getData();
