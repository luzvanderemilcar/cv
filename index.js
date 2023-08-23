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
  let value  = 0;
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
 $("#outline-box li").on("click", scrollToCompetence);
 
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

function scrollToCompetence() {
    //Identify which button was clicked
    let currentId = $(this).attr("id").match(/\w+(?=[-]\w+)/g)[0];
    competenceSet(currentId);
    document.querySelector("#competence").scrollIntoView();
}

