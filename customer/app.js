const api_url = "http://localhost:3000/customers";
async function getApiData(url) {
  const response = await fetch(url);
  var data = await response.json();
  show(data);
}
getApiData(api_url);
let customerContainer = document.getElementById("customer-container");

function show(data) {
  for (obj of data) {
    let customer = document.createElement("div");
    customer.innerHTML = obj.name;
    customer.id = obj.id;
    customer.classList = "customer";

    customer.addEventListener("click", function () {
      showDetails(customer.id, data);
    });
    customerContainer.appendChild(customer);
  }
}

function showDetails(id, data) {
  let obj = data[id - 1];
  let len = Object.keys(obj).length;
  const detailContainer = document.getElementById("detail-box");
  detailContainer.innerHTML = "";

  let heading = document.createElement("h2");
  heading.innerHTML = "Customer- " + obj.id + " -Details";
  detailContainer.appendChild(heading);

  for (let i = 0; i < len; i++) {
    let section = document.createElement("div");
    section.classList = "section";
    for (let j = 0; j < 2; j++) {
      if (j === 0) {
        let title = document.createElement("p");
        title.classList = "title";
        title.innerHTML = Object.keys(obj)[i];
        section.appendChild(title);
      } else {
        let content = document.createElement("p");
        content.classList = "content";
        content.innerHTML = obj[Object.keys(obj)[i]];
        section.appendChild(content);
      }
    }
    detailContainer.appendChild(section);
  }
  detailContainer.style.display = "block";
}
