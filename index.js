import { createTemplate, addChartToDocument } from '/utils/view.js';
import getIcon from '/utils/getIcon.js';
import memoize from "/custom-hooks/memoize.js";
const iconMemoize = memoize(getIcon);

import dataModel from "/cvData.js";
import icons from '/assets/icons.js';
import { titlecase, uppercase, lowercase, capitalcase } from '/utils/case.js';
import createContactSection from '/contact.js';

createTemplate(dataModel, document.body);

const navBar = document.querySelector("nav");
const sideBarToggler = navBar.querySelector("button#sidebar-toggler");
sideBarToggler.innerHTML = iconMemoize(icons, "bars");

const sideBar = document.querySelector("aside");
const topView = document.querySelector("#titre");
/*
// Setting the width of the hr with .cp-hr class for competences switches
$(".cp-hr").css("width", getWidthValue("button.cp-button"));

function getWidthValue(selector) {
  let value = 0;
  document.querySelectorAll(selector).forEach((item) => {
    value += parseFloat(item.offsetWidth + 10);
  });
  return value;
}

//Cilck event listener for competences switches 
$(".cp-button").click(function() {
  //Identify which button was clicked
  let currentId = $(this).attr("id");

  //Remove the clicked class from the last clicked button
  if ($(".cp-button").hasClass("clicked")) {
    $(".cp-button").removeClass("clicked");
  }
  $(this).addClass("clicked");
  competenceSet(currentId);
});

//Content change based on ges, des or dev value
function competenceSet(id) {
  switch (id) {
    case 'ges':
    {
      competences = gestionCompetences;
      d3.select("#bar-chart").text("");
      setChart(dataGestion);
    }
    break;
    case 'des':
    {
      competences = designCompetences;
      d3.select("#bar-chart").text("");
      setChart(dataDesign);
    }
    break;
    case 'dev':
    {
      competences = developmentCompetences;
      d3.select("#bar-chart").text("");
      setChart(dataDevelopment);
    }
    break;
  }
  $("#competence-body div").html(DOMPurify.sanitize(marked.parse(competences)));
}
*/

//Change the visibility of ToUp button
let lastKnownScrollPosition = window.scrollY;
let scrollingDown;

document.addEventListener("DOMContentLoaded", function() {

  let mainSectionElement = document.querySelector("main");


  createContactSection(dataModel, mainSectionElement);

  //To  to button
  let toTopElement = document.createElement("button");
  toTopElement.classList.add("to-top")
  toTopElement.innerHTML = iconMemoize(icons, "uparrow");

  mainSectionElement.appendChild(toTopElement);

  //Add SVG graphic to document
 // addChartToDocument(dataModel);
  
  //SideBar
 function createSideBar() {
    sideBar.setAttribute("id", "sidebar");
    let sectionArr = document.querySelectorAll
    ("section");
    
    sectionArr.forEach(section => {
    let sectionId = section.getAttribute("id");
    let link = document.createElement("a");
    link.innerHTML = capitalcase(sectionId);
    link.setAttribute("href", "#" + sectionId);
    link.setAttribute("class", "internal-link");
    link.setAttribute("role", "button");
   link.addEventListener("click", scrollToInternalLink);
    sideBar.appendChild(link);
    });
    sideBarToggler.addEventListener("click" , toggleSideBar);
    sideBarToggler.style.display = "unset";
    }

  createSideBar()
 
  function showSideBar() {
    sideBar.removeAttribute("hidden");
    sideBarToggler.innerHTML = iconMemoize(icons, "xmark");
  }
  
function hideSideBar() {
  sideBar.setAttribute("hidden", "hidden");
sideBarToggler.innerHTML = iconMemoize(icons, "bars");
}

function toggleSideBar() {
  // Based on html hidden attributes
  if (sideBar.hasAttribute("hidden")) {
    showSideBar();
  } else {
    hideSideBar();
  }
}

 function scrollToInternalLink(e) {
   e.preventDefault();
   
 let targetElementSelector = e.target.getAttribute("href");
 
 const targetElement = document.querySelector(targetElementSelector);
 const offset = document.querySelector('nav').offsetHeight;
const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
window.scrollTo({ top: targetPosition, behavior: 'smooth' });
 }
  function hideNavBar() {
  navBar.style.display = "none";
}
  
  document.addEventListener("scroll", () => {
hideSideBar();
    scrollingDown = lastKnownScrollPosition < window.scrollY;

    if (topView?.getBoundingClientRect().bottom > 0 || scrollingDown) {
      toTopElement.style.display = "none";
          } else {
      if (!scrollingDown) {
        toTopElement.style.display = "flex";
      }
    }

    //Update lastKnownScrollPosition to the current scrollY position 
    lastKnownScrollPosition = window.scrollY;
  });

  toTopElement.addEventListener("click", scrollToTop);

  function scrollToTop(e) {
    // scroll to top at goTop click
    topView.scrollIntoView();
  }
});