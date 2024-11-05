import dataModel from "/cvData.js";

import getIcon from '/getIcon.js';
import icons from '/icons.js';
import memoize from "/memoize.js";
const iconMemoize = memoize(getIcon)

import { createFooter } from '/view.js';

let {contact} = dataModel;


export default function createContactSection({contact}, container) {
  let sectionElement = document.createElement("section");
sectionElement.setAttribute("id", "contact");
sectionElement.setAttribute("class", "container");

    // Format section Header
  let sectionHeader = document.
  createElement("div");
  sectionHeader.setAttribute("class", "header-div");

  if (contact.icon) {
    let iconContainer = document.createElement("div");
    iconContainer.classList.add("header-icon")

    iconContainer.innerHTML = `${icon}`;
    sectionHeader.appendChild(iconContainer);
  }

  let headingContainer = document.createElement("div");

  let headingElement = document.createElement("h3");

  headingElement.innerHTML = "Contact";
  headingContainer.classList.add("header-text");

  headingContainer.appendChild(headingElement);

  sectionHeader.appendChild(headingContainer);

  sectionElement.appendChild(sectionHeader);
container.appendChild(sectionElement);

//contact link
let contactLinkWrapper = document.createElement("div");
contactLinkWrapper.setAttribute("class", "contact-info");
let contactLinkWrapperFragment = document.createDocumentFragment();

createContactCard(contact, contactLinkWrapperFragment);

contactLinkWrapper.appendChild(contactLinkWrapperFragment);
sectionElement.appendChild(contactLinkWrapper);

// contact form
let contactFormContainer = document.createElement("div");
contactFormContainer.setAttribute("class", "contact-me");

contactFormContainer.innerHTML = `
      <h4>Message me</h4>
      <form id="contact-me-form">
        <input class="input-field" type="text" name="senderName" placeholder="Your name" required>
        <input class="input-field" type="email" name="senderEmail" placeholder="Your email" required>
        <textarea class="input-field" name="senderMessage" cols="24" rows="10" name="senderMessage" placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>`;
      
      sectionElement.appendChild(contactFormContainer);
}

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
    let icon = iconMemoize(icons, link);
    let linkElement = document.createElement("a");
  linkElement.setAttribute("class", link);
  linkElement.setAttribute("href", `${hrefPrefix[link] ? hrefPrefix[link] + contact[link]: link == "website" ? contact[link] : "#" }`);
  linkElement.innerHTML = `<span>${iconMemoize(icons,link)}</span><span>${contact[link]}</span>`;
  
  container.appendChild(linkElement);
}