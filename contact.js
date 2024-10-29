import dataModel from "/cvData.js";

import getIcon from '/utils/getIcon.js';
import icons from '/assets/icons.js';

import { createFooter } from '/utils/view.js';

let {contact} = dataModel;

let contactWrapper = document.querySelector("div.contact");
let contactWrapperFragment = document.createDocumentFragment();

let footerElement = document.querySelector("footer");
let footerFragment = document.createDocumentFragment();

createContactCard(contact, contactWrapperFragment);
createFooter(dataModel, footerFragment);

contactWrapper.appendChild(contactWrapperFragment);
footerElement.appendChild(footerFragment);

function createContactCard(contactData, container) {
for (let link in contactData) {
  formatContactLink(link, container)
}
}

function formatContactLink(link, container) {
  let hrefPrefix = {
  telephone : "tel:",
  email: "mailto:"
};

  // format a link for the contact
    let icon = getIcon(icons, link);
    let linkElement = document.createElement("a");
  linkElement.setAttribute("class", link);
  linkElement.setAttribute("href", `${hrefPrefix[link] ? hrefPrefix[link] + contact[link]: link == "website" ? contact[link] : "#" }`);
  linkElement.innerHTML = `<span>${getIcon(icons,link)}</span><span>${contact[link]}</span>`;
  
  container.appendChild(linkElement)
}