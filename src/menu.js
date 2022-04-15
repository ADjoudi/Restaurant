import i1 from "./resources/i1.png";
import i2 from "./resources/i2.png";
import i3 from "./resources/i3.png";
import i4 from "./resources/i4.png";
import i5 from "./resources/i5.png";
import i6 from "./resources/i6.png";

const itemList = [
  {
    title: "vegiterian",
    discription: "delicious",
    price: "5.99$",
    img: i1,
  },
  {
    title: "Neapolitan",
    discription: "authentic",
    price: "2.99$",
    img: i2,
  },
  {
    title: "Sicilian",
    discription: "delicious",
    price: "7.99$",
    img: i3,
  },
  {
    title: "Greek",
    discription: "delicious",
    price: "1.99$",
    img: i4,
  },
  {
    title: "Cheese",
    discription: "delicious",
    price: "8.99$",
    img: i5,
  },
  {
    title: "Leaf",
    discription: "delicious",
    price: "5.99$",
    img: i6,
  },
];

export default function appendMenu(content) {
  let menu = document.createElement("div");
  menu.classList.add("menu");
  for (let i = 0; i < itemList.length; i++) {
    let item = document.createElement("div");
    let image = document.createElement("img");
    let info = document.createElement("div");
    let title = document.createElement("h3");
    let discription = document.createElement("p");
    let price = document.createElement("p");

    item.classList.add("menuItem");
    image.src = itemList[i].img;
    info.classList.add("info");
    title.textContent = itemList[i].title;
    discription.textContent = itemList[i].discription;
    price.textContent = itemList[i].price;
    price.classList.add("price");

    info.appendChild(title);
    info.appendChild(discription);
    info.appendChild(price);

    item.appendChild(image);
    item.appendChild(info);

    menu.appendChild(item);
  }
  content.appendChild(menu);
}
