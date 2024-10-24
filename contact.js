import {contact} from "/cvData.js";

import getIcon from '/utils/getIcon.js';
import icons from '/assets/icons.js';

import { Model, View, Controller } from '/utils/view.js';

const contactModel = new Model(contact);

const contactView = new View();

let controler = new Controller(contactModel, contactView);


let contactWrapper = document.querySelector("div.contact");

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

createContactCard(contact, contactWrapper);

const footer = document.querySelector("footer");