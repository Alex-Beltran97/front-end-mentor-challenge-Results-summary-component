import data from './data.js';

const summaryItemTemplate = document.getElementById("template-summary-item").content;
const fragment = new DocumentFragment();
const summaryItemContainer = document.querySelector(".summary");

data.forEach( item => {
  const clone = summaryItemTemplate.cloneNode(true);

  clone.querySelector(".img").setAttribute("src", item.icon);
  clone.querySelector(".img").setAttribute("alt", item.category);

  clone.querySelector(".percentage").textContent = item.score;

  clone.querySelector(".summary-label-value").textContent = item.category;

  fragment.appendChild(clone);

});

summaryItemContainer.appendChild(fragment);