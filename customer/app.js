const api_url = "http://localhost:3000/customers";
var data;
async function getApiData(url) {
  const response = await fetch(url);
  data = await response.json();
  show(data);
}
getApiData(api_url);

let customersList = document.getElementsByClassName("customer");

function show(data) {
  let i = 0;
  for (obj of data) {
    let customer = document.createElement("div");
    customer.innerHTML = obj.name;
    customer.id = obj.id;
    customersList[i].appendChild(customer);
    i++;
  }
}

function showDetails(id) {
  let obj = data[id];

  let titleList = document.getElementsByClassName("title");
  let contentList = document.getElementsByClassName("content");
  let box = document.getElementById("detail-box");

  for (let i = 0; i < 8; i++) {
    titleList[i].innerHTML = Object.keys(obj)[i];
    contentList[i].innerHTML = obj[Object.keys(obj)[i]];
  }
  box.style.display = "block";
}
