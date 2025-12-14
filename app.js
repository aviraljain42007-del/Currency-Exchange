let dropdown = document.querySelectorAll(".core select");



for (let d of dropdown) {
  for (let c of countryList) {
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
}
