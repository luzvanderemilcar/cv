const dataModel = {
  header: {
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
  },
  contact: {
    telephone: "+50933321829",
    email: "luzvanderemilcar@gmail.com",
    fax: "659270082",
    website: "index.html"
  },
  mainContent: {

    sections: [
      {
        sectionHeading: "En bref",
        title: "resume",
        icon: "📝",
        lists: [
          {
            introductoryPhrase: "Je peux :",
            items: ["Travailler seul ou en équipe ;", "Gérer les clients ;", "Concevoir et appliquer des modèles dans la prise de décision ;", "Analyser les rapports financiers avec la comptabilité gestion ;", "Concevoir et réaliser des designs graphiques selon les demandes et les besoins du client ;", "Concevoir et développer des sites et des applications web."]
      }
      ],
      hasChart: false
      },

      {
        sectionHeading: "Education",
        description: "",
        title: "Education",
        lists: [
          {
            heading: "Administration économique et sociale (AES)",
            schoolName: "Ecole de Droit et des Sciences Economiques des Gonaives",
            diploma: "Gestion des entreprises",
            startTime: "2015",
            endTime: "2019"
  },
          {
            heading: "Développement web",
            schoolName: "FreeCodeCamp",
            diploma: "Frond End Development Libraries",
            startTime: "2022",
            endTime: "-"
},
          {
            heading: "English",
            schoolName: "World English Institute",
            diploma: "Beginning to Advanced Course",
            startTime: "2024",
            endTime: "-"
}
        ],
        disabled: false,
        hasChart: false
},
      {
        sectionHeading: "Gestion",
        cpAbv: "ges",
        title: "Gestion",
        description: "Je peux contribuer à des opérations et remplir des fonctions ayant rapport à :",
        lists: [
          {
            heading: "Comptabilité",
            introductoryPhrase: "Je peux contribuer à des opérations et remplir des fonctions ayant rapport :",
            items: ["À la comptabilité générale : enregistrer les opérations journalières, préparer les états financiers, entre autres l'état des flux de trésorerie", "Au financement. : faire la gestion du fonds de roulement, des comptes cycliques (encaisse, clients, stocks, fournisseurs, etc) et des activités d'investissement.", "L'informatique bureautique: utiliser des logiciels comme Word, Excel, Powerpoint, et autres pour rédiger des documents, créer des présentations et monter des programmes de traitements de données et effectuer des projections surtout en comptabilité de gestion."]
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

  }],
        data: [["Résolution de problème", 70], ["Planification", 75], ["Communication", 80], ["Marketing", 70]],
        hasChart: false 
},
      {
        sectionHeading: "Développement",
        cpAbv: "dev",
        title: "Développement",
        description: "",
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
  }],
        data: [["HTML", 85], ["CSS", 75], ["JavaScript", 70], ["jQuery", 50], ["Bootstrap", 60], ["React", 75], ["Redux", 55]],
        hasChart: false
},
      {
        sectionHeading: "Design",
        cpAbv: "des",
        title: "Design",
        description: "J'ai débuté dans le domaine du design graphique avec la production de design pour une entreprise de beauté. Mon approche du design est fonctionnelle, c'est-à-dire à la communication entre le commanditaire et les destinataires de son message.",
        lists: [{
            heading: "Conception graphique",
            introductoryPhrase: "Je peux concevoir et produire des flyers, dessiner des logos et des cartes de multiples dimensions pour différentes occasions, entre autres.",
            items: ["Flyer", "Carte (invitation, marriage, business,  ...)", "Logo", "Etiquette"],
  },
          {
            heading: "Réalisation",
            introductoryPhrase: "Je peux utiliser des applications et des logiciels de design pour produire des graphiques divers. Ces environments de travail permettent de créer des designs qui satisfont les demandes et apportent les solutions conçues. Parmi eux, il y a notamment :",
            items: ["Photoshop Adobe", "Coral Draw", "Canva", "PixelLab"]
  }],
        data: [["Logo", 50], ["Flyer", 75], ["Card", 70], ["TOOLS", 0], ["PixelLab", 75], ["Photoshop", 45]],
        disabled: false,
        hasChart: false
}
]
  },
  footer: {
    links: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/@luzvanderemilcar",
    },
    {
  name: "Instagram",
  href: "https://www.instagram.com/@luzvanderemilcar",
}, 
{
  name: "Twitter",
  href: "https://www.twitter.com/LuzvanderE"
},
{
  name: "LinkedIn",
  href: "https://ht.linkedin.com/in/luzvanderemilcar"
},
{
  name: "YouTube",
  href: "https://www.youtube.com/@eltog"
}
    ],
    copyright: {
      owner: "Luzvander",
      period: "2024"
    }
  }
};
export default dataModel;

let {header, contact, mainContent, footer} = dataModel;

export { header, contact, mainContent, footer };