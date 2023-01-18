const api_url = "http://localhost:3000/customers";
const customerContainer = document.getElementById("customer-container");

async function getApiData(url) {
  const response = await fetch(url);
  var data = await response.json();
  showCustomerProfile(data);
}

function showCustomerProfile(data) {
  for (obj of data) {
    let customer = document.createElement("div");
    customer.innerHTML = obj.name;
    customer.id = obj.id;
    customer.classList = "customer";
    customer.addEventListener("click", function () {
      showCustomerDetails(customer.id, data);
    });
    customerContainer.appendChild(customer);
  }
}

function showCustomerDetails(id, data) {
  let obj = data[id - 1];
  let len = Object.keys(obj).length;
  const detailContainer = document.getElementById("detail-box");
  let heading = document.createElement("h2");

  detailContainer.innerHTML = "";
  heading.innerHTML = "Customer- " + obj.id + " -Details";
  detailContainer.appendChild(heading);
  showObjectDetail(obj, len, detailContainer);

  detailContainer.style.display = "block";
}

async function getDetailSectionComponent() {
  const response = await fetch("/detailSection.html");
  let sectionData = await response.text();
  return sectionData;
}

async function showObjectDetail(obj, len, detailContainer) {
  let newSection = await getDetailSectionComponent();
  let html;
  for (let index = 0; index < len; index++) {
    html = newSection
      .replace("$title", Object.keys(obj)[index])
      .replace("$content", obj[Object.keys(obj)[index]]);
    detailContainer.innerHTML += html;
  }
}

// Function Calls
getApiData(api_url);
