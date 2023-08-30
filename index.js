const topView = document.querySelector("#titre");

//Competentences text marked
let admCompetences = "#### Administration\n_______\n\nJe peux contribuer à des opérations et remplir des fonctions ayant rapport à :\n- La comptabilité générale. Je peux enregistrer les opérations journalieres, préparer les états financiers, entre autres l'état des flux de trésorerie\n- La finance. Je peux faire la gestion du fonds de roulement, des comptes cycliques (encaisse, clients, stocks, fournisseurs, etc) et des activités d'investissement.\n- L'analyse financière. Je peux effectuer le diagnostic financier de l'entreprise avec l'analyse financière, utiliser la comptabilité de gestion pour évaluer la production et la commercialisation des produits, etc.\n- J'utilise des logiciels d'informatique bureautique comme Word, Excel, Powerpoint, et autres comme rédiger des documents, créer des présentations et monter des programmes de traitements de données et effectuer des projections surtout en comptabilité de gestion.";
let desCompetences = "#### Design graphique\n----------\n\n J'ai débuté dans le domaine du design graphique avec la production de design pour une entreprise de beauté. Mon approche du design est fonctionnelle, c'est-à-dire à la communication entre le commanditaire et les destinataires de son message.\n- Je peux utiliser des applications et des logiciels de design pour produire des graphiques divers.\n- Je peux concevoir et produire des flyers, dessiner des logos et";

let devCompetences = "#### Développement web\n----------\n\nJe peux travailler sur des projets de front-end développement pour créer des sites web réactifs, des applications web et autres. J'utilise plusieurs langages de programmation et de librairies pour réaliser le projet avec une approche de \"separation of concerns\".\n- HTML : création du squelette du projet et de son contenu statique.\n- CSS : designer l'interface de l'utilisateur avec les éléments graphiques et d'accessibilité.\n- JavaScript : utiliser le langage pour gérer la réactivité par rapport à l'utilisateur. Créer des algorithmes et des programmes pour le traitement des données.\nJe peux utiliser divers libraries comme Bootstrap, FontAwesome, jQuery, Animate.js, React, Redux pour accélérer le développement du projet.";

let competences;

// Disable headerIds and mangle options for marked text
marked.use({
  headerIds: false,
  mangle: false
});

function excludeButtonIdSelector(buttonId) {
  const buttonIds = [];
  let buttonList = $("button.cp-button");
  for (let btn of buttonList) {
    buttonIds.push(btn.getAttribute("id"));
  }
  let excludingButtonSelector = buttonIds.filter(item => {
    return item != buttonId;
  });
  return `#${excludingButtonSelector.join(",#")}`;
}

// Setting the width of the hr with .cp-hr class
$(".cp-hr").css("width", getWidthValue("button.cp-button"));

function getWidthValue(selector) {
  let value = 0;
  document.querySelectorAll(selector).forEach((btn) => {
    value += parseFloat(btn.offsetWidth);
  });
  return value;
}

$(".cp-button").click(function() {
  //Identify which button was clicked
  let currentId = $(this).attr("id");
  competenceSet(currentId);
});


function competenceSet(id) {
  //Change the clicked button outlook
  $(excludeButtonIdSelector(id)).removeClass("btn-dark");
  $(`#${id}`).addClass("btn-dark");

  switch (id) {
    case 'adm':
      competences = admCompetences;
      break;
    case 'des':
      competences = desCompetences;
      break;
    case 'dev':
      competences = devCompetences;
      break;
  }
  $("#competence-body div").html(DOMPurify.sanitize(marked.parse(competences)));
}
$("#outline-box li").on("click", function () { //Identify which button was clicked
  let currentId = $(this).attr("id").match(/\w+(?=[-]\w+)/g)[0];
  scrollToElement("#competence", currentId)});

//Change the visibility of ToUp button
document.addEventListener("scroll", () => {
  if (topView.getBoundingClientRect().bottom > 0) {

    if ($("#to-top-link").css("visibility") == "visible" || $("#to-top-link").css("visibility") == "initial") {
      $("#to-top-link").css("visibility", "hidden");
    }
  } else {
    if ($("#to-top-link").css("visibility") == "hidden") {
      $("#to-top-link").css("visibility", "visible");
    }
  }
});

function scrollToElement(selector, currentId) {
  competenceSet(currentId);
  document.querySelector(selector).scrollIntoView();
}

// D3 graphic Bar chart

const dataDev = [["HTML", 85], ["CSS", 75], ["JavaScript", 70], ["jQuery", 50], ["Bootstrap", 60], ["React", 75], ["D3", 45], ["Redux", 55]];

let sectionWidth = parseFloat(document.querySelector("#competence").offsetWidth);
let [h, w, padding, topPadding] = [300, 650, 20, 40];
// Change the width according to viewport section
if (sectionWidth < w) {
  w = sectionWidth - 2 * padding;
}
const [mainColor, redColor, yellowColor, greenColor] = ["#020202", "#f00", "yellow", "#0f0"];

//Setting the scale
const xScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, w - 2 * padding]);

const yScale = d3.scaleLinear()
  .domain([0, dataDev.length])
  .range([topPadding, h - padding]);

const svgDev = d3.select("#bar-chart")
  .append("svg")
  .attr("class", "dev-competence")
  .attr("width", w)
  .attr("height", h)
  .style("background-color", "white");

svgDev.append("g")
  .attr("class", "title");

svgDev.select(".title")
  .append("text")
  .html("Web développement - Graphique")
  .attr("x", w / 2)
  .attr("y", topPadding / 2)
  .attr("text-anchor", "middle")
  .attr("fill", "darkgray")
  .attr("class", "graph-title")
  .style("font-size", 10);

// Rectangle element for data-key-name
svgDev.selectAll("rect")
  .data(dataDev)
  .enter()
  .append("rect")
  .attr("width", w - 2 * padding)
  .attr("height", 10)
  .attr("x", padding)
  .attr("y", (d, i) => yScale(i))
  .attr("fill", `${mainColor}`);

// Path for triangle lever
svgDev.selectAll("path")
  .data(dataDev)
  .enter()
  .append("path")
  .attr("d", (d, i) => `M ${xScale(d[1]) + padding -7} ${yScale(i) - 8 } L${xScale(d[1]) + padding + 7} ${yScale(i) - 8} L${xScale(d[1]) + padding} ${yScale(i) + 6} z`)
  .attr("fill", d => {
    return d[1] < 40 ? redColor :
      d[1] > 40 && d[1] < 60 ? yellowColor : greenColor;
  })
  .attr("stroke", yellowColor)
  .attr("class", "triangle-lever");

//Key name text element
svgDev.selectAll("text.data-key-name")
  .data(dataDev)
  .enter()
  .append("text")
  .attr("class", "data-key-name")
  .text(d => d[0])
  .attr("x", padding + 2)
  .attr("y", (d, i) => yScale(i) + 8.5)
  .attr("fill", "white")
  .style("font-size", 10);

// Setting percentage 
svgDev.selectAll("text.data-key-percent")
  .data(dataDev)
  .enter()
  .append("text")
  .attr("class", "data-key-pourcent")
  .text(d => `${d[1]}%`)
  .attr("x", d => xScale(d[1]) + padding + 7)
  .attr("y", (d, i) => yScale(i) - 5)
  .style("font-size", 8);


// Setting the bottom axis
const xAxis = d3.axisBottom(xScale);

svgDev.append("g")
  .attr("transform", `translate(${padding}, ${h - padding})`)
  .call(xAxis);
