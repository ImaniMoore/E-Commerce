let data;

async function fetchData() {
  try {
    const response = await fetch("index.json");
    data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData().then(() => {
  let inventorySection = document.getElementById("inventory");

  for (i = 0; i < data.Products.length; i++) {
    if (i == 0) {
      inventorySection.innerHTML = `
        <div class="itemcard">
          <img src="${data.Products[i].image}" alt="${data.Products[i].name}" />
          <h3>${data.Products[i].name}</h3>
          <p>Price: ${data.Products[i].price} <br> VIN: ${data.Products[i].description.VIN} <br> Mileage: ${data.Products[i].description.Mileage} miles</p>
        </div>
      `;
    } else {
      inventorySection.innerHTML += `
        <div class="itemcard">
          <img src="${data.Products[i].image}" alt="${data.Products[i].name}" />
          <h3>${data.Products[i].name}</h3>
          <p>Price: ${data.Products[i].price} <br> VIN: ${data.Products[i].description.VIN} <br> Mileage: ${data.Products[i].description.Mileage} miles</p>
        </div>
      `;
    }
  }
});
