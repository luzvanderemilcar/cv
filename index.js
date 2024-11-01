import { createTemplate, addChartToDoucument} from '/utils/view.js';
import dataModel from "/cvData.js";

   import createContactSection from '/contact.js';

createTemplate(dataModel, document.body);

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
  const toTopElement = document.querySelector(".to-top");
  let mainSectionElement = document.querySelector("main");
  
createContactSection(dataModel, mainSectionElement);
  
  //Add SVG graphic to document
  addChartToDoucument(dataModel);

  document.addEventListener("scroll", () => {

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