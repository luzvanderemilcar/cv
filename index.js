import { Model, View, Controller } from '/utils/view.js';
import dataModel from "/cvData.js";

const app = new Controller(new Model(dataModel), new View());

app.init();

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
    /*  <a href="https://www.facebook.com/luzvanderemilcar">
        <i class="fa-brands fa-facebook-f fa-lg footer-icon"></i>
        <span class="sr-only">Facebook</span></a> <
      a href = "https://www.twitter.com/LuzvanderE" >
        <i class="fa-brands fa-twitter fa-lg footer-icon"></i> <
        span class = "sr-only" > Twitter < /span></a >
        <a href="https://ht.linkedin.com/in/luzvanderemilcar">
        <i class="fa-brands fa-linkedin-in fa-lg footer-icon"></i>
        <span class="sr-only">Linkedin</span>
      </a> <
        a href = "https://www.youtube.com/@eltog" >
        <i class="fa-brands fa-youtube fa-lg footer-icon"></i> <
        span class = "sr-only" > Youtube < /span> <
        /a> <
        /div> <
        div id = "copyriht-info" >
        <h6 class="date-year"></h6> <
        /div>
/*
const headerData = {
  name: "Luzvander EMILCAR",
  titles: [
    {
      name: "Gestionnaire",
      abbreviation: "Gest"
    },
    {
      name: "Designer graphique",
      abbreviation: "Des"
    },
    {
      name: "Développeur web",
      abbreviation: "Dev"
    }]
}
// Data for D3 Charts
const dataGestion = {
  sectionHeading: "Gestion",
  cpAbv: "ges",
  title: "Gestion",
  data: [["Résolution de problème", 70], ["Planification", 75], ["Communication", 80], ["Marketing", 70]],
  lists: [{
      heading: "Comptabilité",
      introductoryPhrase: "Je peux contribuer à des opérations et remplir des fonctions ayant rapport à :",
      items: ["La comptabilité générale. Je peux enregistrer les opérations journalieres, préparer les états financiers, entre autres l'état des flux de trésorerie", "La finance. Je peux faire la gestion du fonds de roulement, des comptes cycliques (encaisse, clients, stocks, fournisseurs, etc) et des activités d'investissement.", "J'utilise des logiciels d'informatique bureautique comme Word, Excel, Powerpoint, et autres comme rédiger des documents, créer des présentations et monter des programmes de traitements de données et effectuer des projections surtout en comptabilité de gestion."]
  },
    {
      heading: "Planification",
      introductoryPhrase: "Je peux contribuer à :",
      items: ["L'élaboration des budgets de ventes, de production, d'approvisionnement entre autres", "L'évaluation des risques en matières d'investissement"]
  },
    {
      heading: "Finance",
      introductoryPhrase: "Dans le champs de diagnostic financier de l'entreprise, je peux :",
      items: ["Effectuer des analyses sur les rapports financiers", "Déterminer les impacts des politiques de crédit, de recouvrement et d'approvisionnement sur la santé financière de l'entreprise", "Apporter des conseils afin de corriger les situations risquées"]

  }]
};

const dataDevelopment = {
  sectionHeading: "Développement",
  cpAbv: "dev",
  title: "Développement",
  data: [["HTML", 85], ["CSS", 75], ["JavaScript", 70], ["jQuery", 50], ["Bootstrap", 60], ["React", 75], ["Redux", 55]],
  lists: [{
      heading: "HTML, CSS et JavaScript",
      introductoryPhrase: "Je peux travailler sur des projets de front-end développement pour créer des sites web réactifs, des applications web et autres.",
      items: ["HTML : création du squelette du projet et de son contenu statique.", "CSS : designer l'interface de l'utilisateur avec les éléments graphiques et d'accessibilité.", "JavaScript : utiliser le langage pour gérer la réactivité par rapport à l'un isateur. Créer des algorithmes et des programmes pour le traitement des données."]
  },
    {
      heading: "Visualisation de données",
      introductoryPhrase: "J'utilise :",
      items: ["D3.js pour la visualisation des données, et la manipulation des éléments SVG. À noter que les graphes de cette section sont construites avec D3."]
  },
    {
      heading: "Création de SPA (Single Page Application)",
      introductoryPhrase: "Pour la création d'applications web d'une seule page, j'utilise : ",
      items: ["React.js pour la conception et l'organisation des données,  la création des composants, entre autre.", "Redux pour le management de l'état de l'application."]
  }]
};

const dataDesign = {
  sectionHeading: "Design",
  cpAbv: "des",
  title: "Design",
  data: [["Logo", 50], ["Flyer", 75], ["Card", 70], ["TOOLS", 0], ["PixelLab", 75], ["Photoshop", 45]],
  lists: [{
      heading: "",
      introductoryPhrase: "",
      items: [""]
  },
    {
      heading: "",
      introductoryPhrase: "",
      items: [""]
  }]
};

// D3 graphic Bar chart
// Grab the value of CSS varia
let bodyColor = getComputedStyle(document.body).getPropertyValue('--main-background-color');
let detailColor = getComputedStyle(document.body).getPropertyValue('--soft-color');

let sectionWidth = parseFloat(document.querySelector("#competence").offsetWidth);
let [w, padding, topPadding] = [300, 20, 40];

// Change the width according to viewport section
if (sectionWidth < w) {
  w = sectionWidth - 2.5 * padding;
}

let h = 0.75 * w;

const color = { whiteColor: "white", mainColor: "#020202", redColor: "#f00", yellowColor: "yellow", greenColor: "#0f0" };

// Change chart look according to dataSrc
function setChart(dataSrc) {
  let dataset = dataSrc.data;
  let title = dataSrc.title;
  let cp = dataSrc.cpAbv;
  let dataLength = dataset.length;

  //Setting the scale
  const xScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, w - 2 * padding]);

  const yScale = d3.scaleLinear()
    .domain([0, dataset.length])
    .range([topPadding, h - padding]);
  const svg = d3.select("#bar-chart")
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
    .data(dataset)
    .enter()
    .append("rect")
    .attr("width", w - 2 * padding)
    .attr("height", h / (dataLength + padding * .75))
    .attr("x", padding)
    .attr("y", (d, i) => yScale(i))
    .attr("fill", d => d[1] == 0 ? "none" : `${color.mainColor}`);

  // Path for triangle lever
  svg.selectAll("path")
    .data(dataset)
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
    .data(dataset)
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
    .data(dataset)
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

//Default D3 Graph
setChart(dataGestion);
*/
