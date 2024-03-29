//Competentences text marked
let admCompetences = `#### Gestion
_______

Je peux contribuer à des opérations et remplir des fonctions ayant rapport à :
- La comptabilité générale. Je peux enregistrer les opérations journalieres, préparer les états financiers, entre autres l'état des flux de trésorerie
- La finance. Je peux faire la gestion du fonds de roulement, des comptes cycliques (encaisse, clients, stocks, fournisseurs, etc) et des activités d'investissement.
- L'analyse financière. Je peux effectuer le diagnostic financier de l'entreprise avec l'analyse financière, utiliser la comptabilité de gestion pour évaluer la production et la commercialisation des produits, etc.

J'utilise des logiciels d'informatique bureautique comme Word, Excel, Powerpoint, et autres comme rédiger des documents, créer des présentations et monter des programmes de traitements de données et effectuer des projections surtout en comptabilité de gestion.`;

let desCompetences = `#### Design graphique
----------

J'ai débuté dans le domaine du design graphique avec la production de design pour une entreprise de beauté. Mon approche du design est fonctionnelle, c'est-à-dire à la communication entre le commanditaire et les destinataires de son message.
- Je peux utiliser des applications et des logiciels de design pour produire des graphiques divers.
- Je peux concevoir et produire des flyers, dessiner des logos et des cartes de multiples dimensions pour différentes occasions, entre autres.

J'utilise plusieurs programmes comme Coral Draw, Photoshop pour créer les designs qui satisfont les demandes et apportent les solutions conçues.`;

let devCompetences = `#### Développement web
----------

Je peux travailler sur des projets de front-end développement pour créer des sites web réactifs, des applications web et autres.
J'utilise plusieurs langages de programmation et de librairies pour réaliser le projet avec une approche de "separation of concerns" :
- HTML : création du squelette du projet et de son contenu statique.
- CSS : designer l'interface de l'utilisateur avec les éléments graphiques et d'accessibilité.
- JavaScript : utiliser le langage pour gérer la réactivité par rapport à l'un isateur. Créer des algorithmes et des programmes pour le traitement des données.

J'utilise D3.js pour la visualisation des données, et la manipulation des éléments SVG. À noter que les graphes de cette section sont construits avec D3.

J'utilise des librairies comme React et Redux pour développer des applications web`;

const topView = document.querySelector("#titre");
let competences;
let lastKnownScrollPosition = window.scrollY;
let scrollingDown;


// Disable headerIds and mangle options for marked text
marked.use({
    headerIds: false,
    mangle: false
});

// Setting the width of the hr with .cp-hr class for competences switches
$(".cp-hr").css("width", getWidthValue("button.cp-button"));

function getWidthValue(selector) {
    let value = 0;
    document.querySelectorAll(selector).forEach((item) => {
        value += parseFloat(item.offsetWidth+ 10);
    });
    return value;
}

//Cilck event listener for competences switches 
$(".cp-button").click(function() {
    //Identify which button was clicked
    let currentId = $(this).attr("id");
    if ($("#adm").hasClass("btn-dark")) {
        $("#adm").removeClass("btn-dark");
        $("#adm").addClass("btn-outline-light");
    }
    competenceSet(currentId);
});

//Content change based on adm, des or dev value
function competenceSet(id) {
    switch (id) {
        case 'adm':
        {
            competences = admCompetences;
            d3.select("#bar-chart").text("");
            setChart(dataAdm);
        }
        break;
        case 'des':
        {
            competences = desCompetences;
            d3.select("#bar-chart").text("");
            setChart(dataDes);
        }
        break;
        case 'dev':
        {
            competences = devCompetences;
            d3.select("#bar-chart").text("");
            setChart(dataDev);
        }
        break;
    }
    $("#competence-body div").html(DOMPurify.sanitize(marked.parse(competences)));
}

//Change the visibility of ToUp button
document.addEventListener("scroll", () => {

    scrollingDown = lastKnownScrollPosition < window.scrollY;

    if (topView.getBoundingClientRect().bottom > 0 || scrollingDown) {
        $("#to-top-link").css("visibility", "hidden");
    } else {
        if (!scrollingDown) {
            $("#to-top-link").css("visibility", "visible");
        }
    }

    //Update lastKnownScrollPosition to the current scrollY position 
    lastKnownScrollPosition = window.scrollY;
});

//Footer
let copyRightElement = document.querySelector("#copyriht-info h6 span.date-year");

let currentDateString = new Date()
.toLocaleDateString();

let year = currentDateString.slice(currentDateString.length-4, currentDateString.length);
let yearText = document.createTextNode(" " +year);
copyRightElement.appendChild(yearText);

// Data for D3 Charts
const dataAdm = {
    cpAbv: "adm",
    title: "Management - Skills",
    data: [["Problem solving", 70], ["Planning", 75], ["Communication", 80], ["Marketing", 70], ["Strategy", 60]]
};
const dataDev = {
    cpAbv: "dev",
    title: "Development - Skills",
    data: [["HTML", 85], ["CSS", 75], ["JavaScript", 70], ["jQuery", 50], ["Bootstrap", 60], ["React", 75], ["D3", 45], ["Redux", 55]]
};
const dataDes = {
    cpAbv: "des",
    title: "Design - Skills",
    data: [["Logo", 50], ["Flyer", 75], ["Banner", 50], ["Card", 70], [" ", 0], ["PixelLab", 75], ["Photoshop", 45], ["UI", 55]]
};

// D3 graphic Bar chart

let sectionWidth = parseFloat(document.querySelector("#competence").offsetWidth);
let [h, w, padding, topPadding] = [300, 650, 20, 40];
// Change the width according to viewport section
if (sectionWidth < w) {
    w = sectionWidth - 2.5 * padding;
}
const [mainColor, redColor, yellowColor, greenColor] = ["#020202", "#f00", "yellow", "#0f0"];

// Change chart look according to dataSrc
function setChart(dataSrc) {
    let dataset = dataSrc.data;
    let title = dataSrc.title;
    let cp = dataSrc.cpAbv;
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
        .style("background-color", "white");

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
        .style("font-size", 10);

    // Rectangle element for data-key-name
    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("width", w - 2 * padding)
        .attr("height", 10)
        .attr("x", padding)
        .attr("y", (d, i) => yScale(i))
        .attr("fill", d => d[1] == 0 ? "none" : `${mainColor}`);

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
                d[1] < 40 ? redColor :
                d[1] > 40 && d[1] < 60 ? yellowColor :
                greenColor;
        })
        .attr("stroke", yellowColor)
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
        .attr("fill", "white")
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
setChart(dataAdm);