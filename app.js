let base_url = "https://api.frankfurter.dev/v1/latest?base=";
let dropdown = document.querySelectorAll(".core-container select");
let value = document.querySelector(".enter");
let btn = document.querySelector(".calculate");
let from_currency = document.querySelector(".core-1 select");
let to_currency = document.querySelector(".core-2 select");
let box = document.querySelector(".msg-box");

for (let d of dropdown) {
  for (let c in countryList) {
    let newoption = document.createElement("option");
    newoption.innerText = c;
    newoption.value = c;
    if (d.name === "from" && c === "USD") {
      newoption.selected = true;
    } else if (d.name === "to" && c === "INR") {
      newoption.selected = true;
    }
    d.append(newoption);
  }
  d.addEventListener("change", (evt) => {
    updateflag(evt.target);
  });
}
let updateflag = (element) => {
  let name = element.value;
  let country_name = countryList[element.value];
  let image = element.parentElement.querySelector("img");
  let newsrc = `https://flagsapi.com/${country_name.toUpperCase()}/flat/64.png`;
  image.src = newsrc;
};

btn.addEventListener("click", async () => {
    let entervalue = value.value;
  if (entervalue < 1 || entervalue === "") {
    entervalue = 1;
  }
  const url = `${base_url}${from_currency.value}&symbols=${to_currency.value}`;
  let response = await fetch(url);
  let data = await response.json();
  let rate = data.rates[to_currency.value];
  let date = data.date;
  let amount = entervalue * rate;
  box.innerText = `${entervalue} ${from_currency.value} = ${amount} ${to_currency.value} as updated on date ${date} `;
});
