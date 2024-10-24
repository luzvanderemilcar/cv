import getIcon from '/utils/getIcon.js';
import icons from '/assets/icons.js';

let sectionHeadingTag = "h4";
let listHeadingTag = "h5";

// Model
class Model {
  data;
  constructor(data = {}) {
    this.data = data;
  }

  fetchData() {
    this.data = getData();
  }
}

// View 
class View {
  model;
  setModel(newModel) {
    this.model = newModel;
  }

  render() {
    const template = createTemplate(this.model.data);
    document.body.innerHTML = "";
    document.body.appendChild(template);
  }
}

// Controller
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    // this.model.fetchData();
    this.view.setModel(this.model);
    this.view.render();
  }
}

function createTemplate(data) {
  let templateFragment = document.createDocumentFragment();

  createHeader(data.header, templateFragment);
  createTemplateBody(data.mainContent, templateFragment);
  createFooter(data.footer, templateFragment);
  return templateFragment;
}

function createHeader(headerData, wrapper) {
  let { name, list, titles } = headerData;

  let header = document.createElement("header");
  header.setAttribute("class", "container-fluid dark-section");
  header.setAttribute("id", "titre");

  // NavBar
  const navBar = document.createElement("nav");
  navBar.setAttribute("class", "navbar navbar-expand-lg navbar-dark");

  navBar.innerHTML = `
           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
             <div class="navbar-nav">
               <a class="nav-item nav-link" href="index.html">Acceuil</a>
               <a class="nav-item nav-link" href="contact.html">Contact</a>
               <a class="nav-item nav-link disabled" href="#">@luzvanderemilcar</a>
             </div>
           </div>`;

  header.appendChild(navBar);

  header.innerHTML += `<div id="titre-info">
        <div>
          <div class="separator-div"></div>
        </div>
        <div id="outline-box">
          <h2 class="big-heading text-center">${name}</h2>
          <hr>
          <ul class="titles">
          </ul>
        </div>
      </div>`;

  let headerListElement = header.querySelector("ul.titles");

  titles?.forEach(title => {
    let listItem = document.createElement("li");
    listItem.setAttribute("id", title.abbreviation.toLowerCase() + "-li");
    listItem.innerHTML = title.name;
    headerListElement.append(listItem);
  });

  wrapper.appendChild(header)
}

function createTemplateBody(mainContent, wrapper) {
  let { sections } = mainContent;

  let mainElement = document.createElement("main");

  sections?.forEach(section => {
    if (!section.disabled) {
      if (/education/ig.test(section.title)) {
        createEducationSection(section, mainElement);
      } else {
        createSection(section, mainElement);
      }
    }
  });
  
  wrapper.appendChild(mainElement);
  
  //To  to button
  let goTopElement = document.createElement("button");
  goTopElement.classList.add("to-top")
  goTopElement.innerHTML = getIcon(icons, "uparrow");

  wrapper.appendChild(goTopElement);
}

function createEducationSection(sectionData, wrapper) {
  let {title, lists} = sectionData;
  
  let sectionElement = document.createElement("section");
  sectionElement.setAttribute("class", "container-fluid dark-section");
  sectionElement.setAttribute("id", title.toLowerCase());

  createSectionHeader(sectionData, sectionElement);
  
    if (lists) {
    let educationListWrapper = document.createElement("div");

    lists.forEach(list => {
      createEducationList(list, educationListWrapper);
    });
    
    sectionElement.appendChild(educationListWrapper);
  }
  wrapper.appendChild(sectionElement)
}

function createEducationList(list, wrapper) {
  let { heading, schoolName, startTime, endTime, diploma} = list;

  let sectionListContainer = document.createElement("div");
  sectionListContainer.setAttribute("class", "subsection education")

  //Format list heading
  if (heading) {
    let headingElement = document.createElement(listHeadingTag);
    headingElement.innerHTML = heading;
let schoolElement = document.createElement("p");
schoolElement.innerHTML = `<em>${schoolName}</em>`;

    let hrElement = document.createElement("hr");
    hrElement.classList.add("heading-base");
    
    sectionListContainer.appendChild(headingElement);
    sectionListContainer.appendChild(schoolElement);
    sectionListContainer.appendChild(hrElement);
  }

  for (let key in list) {
    if (!/\w*school\w*|heading/i.test(key) && !isBoolean(list[key])) {
    let keyParagraph = document.createElement("p");
keyParagraph.innerHTML = `<strong>${key.toLowerCase()}</strong> : ${list[key]}`;
sectionListContainer.appendChild(keyParagraph);
}
}
  wrapper.appendChild(sectionListContainer);
}

function isBoolean(value) {
return value === true || value === false
}

function createSection(sectionData, wrapper) {
  let { title, cpAbv : cp, lists, hasChart, data } = sectionData;

  let sectionElement = document.createElement("section");
  sectionElement.setAttribute("class", "container");
  if (title) {
    sectionElement.setAttribute("id", title.toLowerCase());
  }

  createSectionHeader(sectionData, sectionElement);
  
 if (hasChart && data) {
  let svgGraphContainer = document.createElement("div");
  svgGraphContainer.setAttribute("class", `${cp} bar-chart`);
 sectionElement.appendChild(svgGraphContainer);

//setChart(sectionData);
}

  //Format lists info

  if (lists) {
    let sectionListWrapper = document.createElement("div");

    lists.forEach(list => {
      createSectionList(list, sectionListWrapper);
    });
    sectionElement.appendChild(sectionListWrapper);
  }
  wrapper.appendChild(sectionElement);
}

function createSectionHeader(sectionData, sectionElement) {
  let { icon, sectionHeading, description } = sectionData;
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

  let headingElement = document.createElement(sectionHeadingTag);

  headingElement.innerHTML = sectionHeading;
  headingElement.classList.add("header-text");

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
    let headingElement = document.createElement(listHeadingTag);
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

//Footer

function createFooter(footerData, container) {
  let { links, copyright } = footerData;
  
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
  copyRightElement.setAttribute("id", "copyriht-info");
  let copyrightPeriod = document.createElement("h6");
  copyrightPeriod.setAttribute("class", "date-year");

  copyrightPeriod.innerHTML = `@ ${copyright.owner} ${copyright.period}`;
  copyRightElement.appendChild(copyrightPeriod);
  footerElement.appendChild(copyRightElement);

  container.appendChild(footerElement)
}

function formatFooterLink(link, wrapper) {
  let linkIcon = getIcon(icons, link.name);
  if (linkIcon) {
  let linkElement = document.createElement("a");
linkElement.setAttribute("class", "footer-link");
  linkElement.setAttribute("href", link.href);
  linkElement.innerHTML = `<span class="footer-icon">${linkIcon}</span><span arial-label=${link.name}></span>`;
  wrapper.appendChild(linkElement);
  }
}

// D3 graphic Bar chart
function setChart(sectionData) {
  let { data, title, cpAbv : cp } = sectionData;
  
  let dataLength = data?.length;


// Grab the value of CSS variables 
let bodyColor = getComputedStyle(document.body).getPropertyValue('--main-background-color');
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

export { Model, View, Controller }