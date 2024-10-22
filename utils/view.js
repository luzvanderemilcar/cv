let sectionHeadingTag = "h4";
let listHeadingTag = "h5";


// Model
class Model {
  data;
  constructor(data = {}) {
    this.data = data;
    console.log(this.data)
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
  return templateFragment;
}

function createHeader(headerData, wrapper) {
  let { name, list, qualifications } = headerData;

  let header = document.createElement("header");
  header.setAttribute("class", "container-fluid dark-section");
  header.setAttribute("id", "titre");
  
  header.innerHTML = `<div id="titre-info">
        <div>
          <div class="separator-div"></div>
        </div>
        <div id="outline-box">
          <h2 class="big-heading text-center">${name}</h2>
          <hr>
          <ul class="qualifications">
          </ul>
        </div>
      </div>`;

  let headerListElement = header.querySelector("ul.qualifications");

  qualifications?.forEach(qualification => {
    let listItem = document.createElement("li");
    listItem.setAttribute("id", qualification.abbreviation.toLowerCase() + "-li");
    listItem.innerHTML = qualification.name;
    headerListElement.append(listItem);
  });

  wrapper.appendChild(header)
}

function createTemplateBody(mainContentData, wrapper) {
  let mainSectionElement = document.createElement("main");

  mainContentData.sections?.forEach(section => {
    if (!section.disabled) {
      if (/formation/g.test(section.title)) {
        createFormationSection(section, mainSectionElement);
      } else {
      createSection(section, mainSectionElement);
      }
    }
  });
  wrapper.appendChild(mainSectionElement);
  let goTopElement = document.createElement("button");
  goTopElement.classList.add("to-top")
  goTopElement.innerHTML = `^`;

  wrapper.appendChild(goTopElement);
}

function createFormationSection(sectionData, wrapper) {
  let sectionElement = document.createElement("section");
  sectionElement.setAttribute("class", "container");
  if (sectionData.title) {
    sectionElement.setAttribute("id", sectionData.title.toLowerCase());
  }

  createSectionHeader(sectionData, sectionElement);
}

function createFormationBody(list) {
  
  }

function createSection(sectionData, wrapper) {
  let { title, lists } = sectionData;

  let sectionElement = document.createElement("section");
  sectionElement.setAttribute("class", "container");
  if (title) {
  sectionElement.setAttribute("id", title.toLowerCase());
}

createSectionHeader(sectionData, sectionElement);

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
let {icon, sectionHeading, description} = sectionData; 
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
  let {heading, introductoryPhrase, items} = list;

  let sectionListContainer = document.createElement("div");
  sectionListContainer.setAttribute("class", "item-subsection")

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

export { Model, View, Controller }