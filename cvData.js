import icons from '/icons.js';

const dataModel = {
  header: {
    name: "Luzvander EMILCAR",
    photo: "/Luzvander.jpg",
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
    whatsapp: "https://wa.me/message/HC7HI7PR7FHEF1",
    telegram : "https://t.me/luzvanderemilcar",
    email: "luzvanderemilcar@gmail.com",
    fax: "#",
    website: "#"
  },
  mainContent: {

    sections: [
      {
        sectionHeading: "En bref",
        title: "resume",
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
        icon: icons?.graduation,
        lists: [
          {
            heading: "Administration économique et sociale (AES)",
            schoolName: "école de Droit et des Sciences économiques des Gonaives",
            // Variables keys
            "Spécialisation": "Gestion des entreprises",
            "Début": "2015",
            "Fin": "2019"
  },
          {
            heading: "Développement web",
            ecole: "FreeCodeCamp",
            "Certification": "Frond End Development Libraries",
            'Début': "2022"
},
          {
            heading: "English Study",
            schoolName: "World English Institute",
            'Courses': "Elementary to Advanced Course",
            "Début": "2024",
}
        ],
        disabled: false,
        hasChart: false
},
      {
        sectionHeading: "Gestion",
        cpAbv: "ges",
        title: "Gestion",
        icon: icons?.listcheck,
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
        hasChart: true
},
      {
        sectionHeading: "Développement",
        cpAbv: "dev",
        title: "Développement",
        icon: icons?.listcheck,
        description: "",
        lists: [{
            heading: "HTML, CSS et JavaScript",
            introductoryPhrase: "Je peux travailler sur des projets de front-end développement pour créer des sites web réactifs, des applications web et autres.",
            items: ["HTML : création du squelette du projet et de son contenu statique.", "CSS : designer l'interface de l'utilisateur avec les éléments graphiques et d'accessibilité.", "JavaScript : utiliser le langage pour gérer la réactivité des applications web à l'utilisateur. Créer des algorithmes et des programmes pour le traitement des données."]
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
        data: [["HTML", 85], ["CSS", 75], ["JavaScript", 80], ["jQuery", 50], ["Bootstrap", 60], ["React", 75], ["Redux", 55]],
        hasChart: true
},
      {
        sectionHeading: "Design",
        cpAbv: "des",
        title: "Design",
        icon: icons?.listcheck,
        description: "Le design est un art, mais aussi une technique. Elle poursuit deux objectis : beauté et fonctionnalité. J'ai débuté dans le domaine du design graphique sans même savoir que je faisais du graphisme avec la production d'un graphique annonçant un événement. C'était une capture d'écran du programme, à laquelle j'ai ajouté du texte, et des lignes",
        lists: [{
            heading: "Conception",
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
        hasChart: true
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
        name: "X-twitter",
        href: "https://x.com/LuzvanderE"
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

let { header, contact, mainContent, footer } = dataModel;

export { header, contact, mainContent, footer };