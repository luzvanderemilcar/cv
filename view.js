import iconMemoize from '/getIcon.js';
import icons from '/icons.js';
import { titlecase, uppercase, lowercase, capitalcase } from '/case.js';

function createTemplate(sampleData, globalContainer) {

  createHeader(sampleData, globalContainer);
  createTemplateBody(sampleData, globalContainer);
  createFooter(sampleData, globalContainer);
}

function createHeader(sampleData, wrapper) {

  let { name, list, titles } = sampleData.header;

  let header = document.querySelector("header");
  header.setAttribute("class", "container-fluid dark-section");
  header.setAttribute("id", "titre");

  createResumePhoto(sampleData, header);

  const titreInfo = document.createElement("div");
  titreInfo.setAttribute("id", "titre-info");

  titreInfo.innerHTML = `
        <div>
          <div class="separator-div"></div>
        </div>
        <div id="outline-box">
          <h2 class="big-heading text-center">${name}</h2>
          <hr>
          <ul class="titles">
          </ul>
        </div>`;

  let headerListElement = titreInfo.querySelector("ul.titles");

  titles?.forEach(title => {
    let listItem = document.createElement("li");
    listItem.setAttribute("id", title.abbreviation.toLowerCase() + "-li");
    listItem.innerHTML = title.name;
    headerListElement.append(listItem);
  });

  header.appendChild(titreInfo);
  wrapper.appendChild(header);
}

function createTemplateBody(sampleData, wrapper) {
  let { sections } = sampleData?.mainContent;
  let { contact } = sampleData;

  let mainElement = document.createElement("main");
  wrapper.appendChild(mainElement);

  sections?.forEach(section => {
    if (!section.disabled) {

      if (/education/gi.test(section.title)) {
        createEducationSection(section, mainElement);
      } else {
        createSection(section, mainElement);
      }
    }
  });

  if (contact) {
    createContactSection(contact, mainElement);
  }
}

function createResumePhoto(dataModel, wrapper) {
  let { header: headerData } = dataModel;

  let mainPhoto = document.createElement("img");
  mainPhoto.setAttribute("class", "main-photo");
  mainPhoto.setAttribute("src", headerData.photo);
  mainPhoto.setAttribute("alt", `photo of ${ headerData.name}`);
  wrapper.appendChild(mainPhoto);
}

function createSectionPhoto(sectionData, wrapper) {

  let sectionPhoto = document.createElement("img");
  sectionPhoto.setAttribute("class", "section-photo");
  sectionPhoto.setAttribute("src", headerData.photo);
  sectionPhoto.setAttribute("alt", `photo of ${ headerData.title}`);
  wrapper.appendChild(sectionPhoto);
}

function createEducationSection(sectionData, wrapper) {
  let { title, lists } = sectionData;

  let sectionFragment = document.createDocumentFragment();
  let sectionElement = document.createElement("section");

  sectionElement.setAttribute("class", "container-fluid dark-section");
  sectionElement.setAttribute("id", title.toLowerCase());

  createSectionHeader(sectionData, sectionFragment);

  if (lists) {
    let educationListWrapper = document.createElement("div");

    lists.forEach(list => {
      createEducationList(list, educationListWrapper);
    });

    sectionFragment.appendChild(educationListWrapper);
  }
  sectionElement.appendChild(sectionFragment);

  wrapper.appendChild(sectionElement)
}

function createEducationList(list, wrapper) {
  let { heading, schoolName, startTime, endTime, diploma } = list;

  let sectionListContainer = document.createElement("div");
  sectionListContainer.setAttribute("class", "subsection education")

  //Format list heading
  let headingElement = document.createElement("h4");
  let schoolElement = document.createElement("p");

  let hrElement = document.createElement("hr");
  hrElement.classList.add("heading-base");

  sectionListContainer.appendChild(headingElement);
  sectionListContainer.appendChild(schoolElement);
  sectionListContainer.appendChild(hrElement);

  for (let key in list) {
    if (isHeadingKey(key))
      headingElement.innerHTML = list[key]
    if (isSchoolKey(key)) schoolElement.innerHTML = `<em>${titlecase(list[key])}</em>`;

    if (!isHeadingKey(key) && !isSchoolKey(key) && !isBoolean(list[key])) {
      let keyParagraph = document.createElement("p");
      keyParagraph.innerHTML = `<strong>${capitalcase(key)}</strong> : ${list[key]}`;
      sectionListContainer.appendChild(keyParagraph);
    }
  }
  wrapper.appendChild(sectionListContainer);
}

function isHeadingKey(keyName) {
  return /heading/gi.test(keyName)
}

function isSchoolKey(keyName) {
  return /school|[eé]cole/gi.test(keyName)
}

function isBoolean(value) {
  return value === true || value === false
}

function createSection(sectionData, wrapper) {
  let { title, cpAbv: cp, photo, lists, hasChart, data } = sectionData;

  let sectionElement = document.createElement("section");
  let sectionFragment = document.createDocumentFragment();

  sectionElement.setAttribute("class", "container");
  if (title) {
    sectionElement.setAttribute("id", title.toLowerCase());
  }

  createSectionHeader(sectionData, sectionFragment);

  if (hasChart && data) {
    let svgGraphContainer = document.createElement("div");
    svgGraphContainer.setAttribute("class", `${cp} bar-chart`);
    sectionFragment.appendChild(svgGraphContainer);
  }

  if (photo) {
    createSectionPhoto(sectionData, sectionFragment);
  }

  //Format lists info

  if (lists) {
    let sectionListWrapper = document.createElement("div");

    lists.forEach(list => {
      createSectionList(list, sectionListWrapper);
    });
    sectionFragment.appendChild(sectionListWrapper);
  }
  sectionElement.appendChild(sectionFragment);

  wrapper.appendChild(sectionElement);
}

function createSectionHeader(sectionData, sectionElement) {
  let { icon, sectionHeading, title, description } = sectionData;
  // Format section Header
  let sectionHeader = document.
  createElement("div");
  sectionHeader.setAttribute("class", "header-div");

  if (icon) {
    let iconContainer = document.createElement("div");
    iconContainer.classList.add("header-icon")

    iconContainer.innerHTML = `${icon}`;
    sectionHeader.appendChild(iconContainer);
  }

  let headingContainer = document.createElement("div");

  let headingElement = document.createElement("h3");

  headingElement.innerHTML = sectionHeading;
  headingElement.setAttribute("name", "heading");
  headingContainer.classList.add("header-text");

  headingContainer.appendChild(headingElement);

  sectionHeader.appendChild(headingContainer);

  sectionElement.appendChild(sectionHeader);

  if (description) {
    let sectionDescription = document.createElement("div");
    sectionDescription.setAttribute("class", "section-description");

    unifyElementArr(description).forEach(item => {
      addSectionDescription(item, sectionDescription);
    });
    sectionElement.appendChild(sectionDescription);
  }
}

function addSectionDescription(descriptionItem, wrapper) {
  let description = document.createElement("p");
  description.innerHTML = descriptionItem;
  wrapper.appendChild(description);
}


function createSectionList(list, wrapper) {
  let { heading, introductoryPhrase, items } = list;

  let sectionListContainer = document.createElement("div");
  sectionListContainer.setAttribute("class", "subsection");

  //Format list heading
  if (heading) {
    let headingElement = document.createElement("h4");
    headingElement.innerHTML = heading;

    let hrElement = document.createElement("hr");
    hrElement.classList.add("heading-base");
    sectionListContainer.appendChild(headingElement);
    sectionListContainer.appendChild(hrElement);
  }

  if (introductoryPhrase) {
    let introductoryP = document.createElement("p");
    introductoryP.innerHTML = introductoryPhrase;
    sectionListContainer.appendChild(introductoryP);
  }
  // Format list items
  let listContainer = document.createElement("ul");
  items?.forEach((item, idx) => {
    createList(item, idx, listContainer);
  });
  sectionListContainer.appendChild(listContainer);

  wrapper.appendChild(sectionListContainer);
}

function createList(item, idx, container) {

  let listItem = document.createElement("li");
  listItem.setAttribute("itemid", String(idx));
  listItem.innerHTML = item;
  container.appendChild(listItem);
}

function unifyElementArr(item) {
  if (typeof item === "string") {
    return [item];
  }
  else if (Array.isArray(item)) {
    return item
  }
}
// Contact section

function createContactSection(contact, container) {

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
      <label for="sender-name">Name</label>
        <input id="sender-name" class="input-field" type="text" name="senderName" placeholder="Enter name" required>
        <hr/>
        <label for="sender-email">Email</label>
        <input id="sender-email"class="input-field" type="email" name="senderEmail" placeholder="Enter email" required>
        <hr/>
        <label for="sender-message">Message</label>
        <textarea id="sender-message" class="input-field" name="senderMessage" cols="24" rows="10" name="senderMessage" placeholder="Type in your message"></textarea>
        <button type="submit">Send</button>
      </form>`;

  sectionElement.appendChild(contactFormContainer);
}

function createContactCard(contactData, container) {
  let hrefPrefix = {
    telephone: "tel:",
    email: "mailto:",
    website: "https://"
  };
  for (let link in contactData) {

    // format a link for the contact
    let linkElement = document.createElement("a");
    linkElement.setAttribute("class", link);

    linkElement.setAttribute("href", `${hrefPrefix[link] ? hrefPrefix[link] + contactData[link]: contactData[link]}`);
    
    linkElement.innerHTML = `<span>${iconMemoize(icons,link)}</span><span>${capitalcase(link)}</span>`;
    container.appendChild(linkElement);
  }
}

//Footer

function createFooter(sampleData, container) {
  let { links, copyright } = sampleData?.footer;

  let footerElement = document.createElement("footer");

  let linkWrapper = document.createElement("div");

  if (links) {
    links.forEach(link => {
      formatFooterLink(link, linkWrapper);
    });
  }
  footerElement.appendChild(linkWrapper);

  let hrElement = document.createElement("hr");
  hrElement.classList.add("copyright-base");

  footerElement.appendChild(hrElement);

  let copyRightElement = document.createElement("div");
  copyRightElement.setAttribute("id", "copyright-info");
  let copyrightPeriod = document.createElement("h6");
  copyrightPeriod.setAttribute("class", "date-year");

  copyrightPeriod.innerHTML = `@ ${copyright.owner} ${copyright.period}`;
  copyRightElement.appendChild(copyrightPeriod);
  footerElement.appendChild(copyRightElement);

  container.appendChild(footerElement)
}

function formatFooterLink(link, wrapper) {
  let linkIcon = iconMemoize(icons, link.name);
  if (linkIcon) {
    let linkElement = document.createElement("a");
    linkElement.setAttribute("class", "footer-link");
    linkElement.setAttribute("href", link.href);
    linkElement.innerHTML = `<span class="footer-icon">${linkIcon}</span><span arial-label=${link.name}></span>`;
    wrapper.appendChild(linkElement);
  }
}

function addChartToDocument(dataModel) {
  let { sections } = dataModel.mainContent;

  sections.forEach(section => {
    let { hasChart, data, disabled } = section;
    if (!disabled) {
      if (hasChart && data) {
        setChart(section);
      }
    }
  });
}
// D3 graphic Bar chart
function setChart(sectionData) {
  let { data, title, cpAbv: cp } = sectionData;

  let dataLength = data?.length;

  // Grab the value of CSS variables 
  let bodyColor = getComputedStyle(document.body).getPropertyValue('--main-bg-color');
  let detailColor = getComputedStyle(document.body).getPropertyValue('--soft-color');

  let sectionWidth = parseFloat(document.body.offsetWidth);
  let [w, padding, topPadding] = [300, 20, 40];

  // Change the width according to viewport section
  if (sectionWidth < w) {
    w = sectionWidth - 2.5 * padding;
  }

  let h = 0.75 * w;

  const color = { whiteColor: "white", mainColor: "#020202", redColor: "#f00", yellowColor: "yellow", greenColor: "#0f0" };
  //Setting the scale
  const xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, w - 2 * padding]);

  const yScale = d3.scaleLinear()
    .domain([0, dataLength])
    .range([topPadding, h - padding]);

  const svg = d3.select(`.${cp}.bar-chart`)
    .append("svg")
    .attr("class", "competence")
    .attr("width", w)
    .attr("height", h)
    .style("background-color", bodyColor);

  svg.append("g")
    .attr("class", "title");

  svg.select(".title")
    .append("text")
    .html(title)
    .attr("x", w / 2)
    .attr("y", topPadding / 2)
    .attr("text-anchor", "middle")
    .attr("fill", "darkgray")
    .attr("class", "graph-title")
    .style("font-size", "1rem");

  // Rectangle element for data-key-name
  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("width", w - 2 * padding)
    .attr("height", h / (dataLength + padding * .75))
    .attr("x", padding)
    .attr("y", (d, i) => yScale(i))
    .attr("fill", d => d[1] == 0 ? "none" : `${color.mainColor}`);

  // Path for triangle lever
  svg.selectAll("path")
    .data(data)
    .enter()
    .append("path")
    .attr("d", (d, i) => {
      if (d[1] > 0) {
        return `M ${xScale(d[1]) + padding -7} ${yScale(i) - 8 } L${xScale(d[1]) + padding + 7} ${yScale(i) - 8} L${xScale(d[1]) + padding} ${yScale(i) + 6} z`;
      }
    })
    .attr("fill", d => {
      return d[1] == 0 ? "none" :
        d[1] < 40 ? color.redColor :
        d[1] > 40 && d[1] < 60 ? color.yellowColor :
        color.greenColor;
    })
    .attr("stroke", color.yellowColor)
    .attr("class", "triangle-lever");

  //Key name text element
  svg.selectAll("text.data-key-name")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "data-key-name")
    .text(d => d[0])
    .attr("x", padding + 2)
    .attr("y", (d, i) => yScale(i) + 8.5)
    .attr("fill", d => d[0] == "TOOLS" ? color.mainColor : color.whiteColor)
    .style("font-size", 10);

  // Setting percentage 
  svg.selectAll("text.data-key-percent")
    .data(data)
    .enter()
    .append("text")
    .attr("class", "data-key-pourcent")
    .text(d => d[1] == 0 ? '' : `${d[1]}%`)
    .attr("x", d => xScale(d[1]) + padding + 7)
    .attr("y", (d, i) => yScale(i) - 5)
    .style("font-size", 8);


  // Setting the bottom axis
  const xAxis = d3.axisBottom(xScale);

  svg.append("g")
    .attr("transform", `translate(${padding}, ${h - padding})`)
    .call(xAxis);
}

export { createTemplate, createFooter, addChartToDocument }