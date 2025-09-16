import { ContentData } from '../types';

const profilePhotoURL = 'assets/Profile.webp';

export const content: ContentData = {
  en: {
    name: 'ABDELILAH ELAZIRI',
    title: 'WEB DEVELOPER & DEVELOPER',
    profilePhoto: profilePhotoURL,
    contact: {
      title: 'CONTACT',
      location: 'Marrakesh, Morocco',
      phone: '+212 608 345 621',
      email: 'abdelilahelaziri96@gmail.com',
    },
    socials: {
      title: 'FOLLOW ME',
      linkedin: 'Abdelilah-elaziri',
      github: 'github.com/abdelilah-elaziri',
      linkedinURL: 'https://www.linkedin.com/in/abdelilah-elaziri/',
      githubURL: 'https://github.com/abdelilah-elaziri',
    },
    languages: {
      title: 'LANGUAGE',
      items: [
        { name: 'ARABIC', level: 5 },
        { name: 'ENGLISH', level: 4 },
        { name: 'FRENCH', level: 4 },
        { name: 'DEUTSCH', level: 2 },
      ],
    },
    hobbies: {
      title: 'HOBBIES',
      items: ['Photography', 'Sports', 'Graphic Design'],
    },
    about: {
      title: 'ABOUT ME',
      description: 'Web developer with over four years of experience specializing in WordPress and modern Javascript frameworks like ReactJs and Next.js. Skilled in HTML, CSS, PHP, and C#. I create custom themes, plugins, and dynamic web applications. Passionate about clean code, new technologies, and delivering high-quality solutions.',
    },
    experience: {
      title: 'EXPERIENCE',
      items: [
        { title: 'WEB DEVELOPER', subtitle: '', date: 'DEC 2022 - PRESENT', description: ['Create website woocommerce and vitren in wrodpress using theme "Avada". Also using another Theme Building Elementor.'] },
        { title: 'WEB DEVELOPER', subtitle: '', date: 'DEC 2021 - DEC 2022', description: ['Create website woocommerce in wrodpress using theme "Jupiterx", and using Building Elementor et crooblock.'] },
        { title: 'FULL STACK DEVELOPER', subtitle: '', date: 'DEC 2020 - AUG 2021', description: ['Create website wordpress using free theme "Astra", Building Elementor.', 'Manage all website through the use of server "Siteground".', 'Create Mail Template (Html & Css) in mailchimp.'] },
        { title: 'DEVELOPER & MAIL MARKETING', subtitle: '', date: 'JAN 2020 - MARCH 2020', description: ['Internship in Mail Marketing.', 'Internship in WordPress Developer & SEO'] },
        { title: 'DEVELOPER', subtitle: '', date: 'JAN 2019 - JUN 2019', description: ['Internship in creating application desktop and web application to Manage School for director, programming language C# and SQL Server.'] },
      ],
    },
    education: {
      title: 'EDUCATION',
      items: [
        { title: 'AUTO FORMATION', subtitle: '', date: 'SEPT 2019 - PRESENT', description: ['Learning anything about skillsoft technology and developer'] },
        { title: 'OFPPT TECHNOLOGIE MARRAKESH', subtitle: 'Technical Information Specialist', date: 'SEPT 2017 - JUNE 2019', description: [] },
        { title: 'FACULTY SEMLALIA MARRAKESH', subtitle: '', date: 'SEPT 2015 - 2017', description: ['2015-2016 Science Physique', '2016-2017 Science Biology'] },
        { title: 'BACCALAUREATE', subtitle: 'Baccalaureate Science of Life & Earth', date: 'JUNE 2015', description: [] },
      ],
    },
    skills: {
      title: 'SKILLS',
      items: [
        { name: 'WORDPRESS', level: 5 },
        { name: 'ASP.NET CORE', level: 4 },
        { name: 'HTML / CSS', level: 4 },
        { name: 'C# / PHP', level: 4 },
        { name: 'JAVASCRIPT', level: 4 },
        { name: 'LARAVEL', level: 3 },
        { name: 'REACT JS', level: 3 },
        { name: 'ILLUSTRATOR', level: 3 },
        { name: 'NEXT JS', level: 3 },
        { name: 'PHOTOSHOP', level: 3 },
      ],
    },
    footer: 'Made with ❤️ by Abdelilah ELAZIRI',
    toggle: { lang: 'FR', theme: { light: 'Light', dark: 'Dark' } },
  },
  fr: {
    name: 'ABDELILAH ELAZIRI',
    title: 'DÉVELOPPEUR WEB ET DÉVELOPPEUR',
    profilePhoto: profilePhotoURL,
    contact: {
      title: 'CONTACT',
      location: 'Marrakech, Maroc',
      phone: '+212 608 345 621',
      email: 'abdelilahelaziri96@gmail.com',
    },
    socials: {
      title: 'SUIVEZ-MOI',
      linkedin: 'Abdelilah-elaziri',
      github: 'github.com/abdelilah-elaziri',
      linkedinURL: 'https://www.linkedin.com/in/abdelilah-elaziri/',
      githubURL: 'https://github.com/abdelilah-elaziri',
    },
    languages: {
      title: 'LANGUE',
      items: [
        { name: 'ARABE', level: 5 },
        { name: 'ANGLAIS', level: 4 },
        { name: 'FRANÇAIS', level: 4 },
        { name: 'ALLEMAND', level: 2 },
      ],
    },
    hobbies: {
      title: "CENTRES D'INTERET",
      items: ['Photographie', 'Sports', 'Design graphique'],
    },
    about: {
      title: 'PROFILE',
      description: "Développeur web avec plus de quatre ans d'expérience, spécialisé dans WordPress et les frameworks JavaScript modernes comme React.js et Next.js. Compétent en HTML, CSS, PHP et C#, je crée des thèmes, plugins et applications web dynamiques. Passionné par le code propre, les nouvelles technologies et la livraison de solutions de qualité.",
    },
    experience: {
      title: 'EXPÉRIENCE',
      items: [
        { title: 'DÉVELOPPEUR WEB', subtitle: '', date: 'DÉC 2022 - PRÉSENT', description: ['Créer un site WooCommerce et un site vitrine sous WordPress en utilisant le thème « Avada ». Construire également un autre site en utilisant le constructeur de thème Elementor.'] },
        { title: 'DÉVELOPPEUR WEB', subtitle: '', date: 'DÉC 2021 - DÉC 2022', description: ['Créer un site WooCommerce sous WordPress en utilisant le thème « JupiterX », et le construire avec Elementor ainsi que les plugins Crocoblock.'] },
        { title: 'DÉVELOPPEUR WEB FULL STACK', subtitle: '', date: 'DÉC 2020 - AOÛT 2021', description: ["Créer un site WordPress en utilisant le thème gratuit « Astra », construit avec Elementor.", "Gérer l'hébergement et le serveur du site via SiteGround.", "Créer des modèles d'e-mails (HTML & CSS) dans Mailchimp."] },
        { title: 'DÉVELOPPEUR & MAIL MARKETING', subtitle: '', date: 'JAN 2020 - MARS 2020', description: ["Stage en marketing par e-mail.", "Stage en développement WordPress et référencement SEO."] },
        { title: 'DÉVELOPPEUR', subtitle: '', date: 'JAN 2019 - JUIN 2019', description: ["Stage en création d'application desktop et application web pour la gestion scolaire destinée au directeur, utilisant le langage de programmation C# et SQL Server."] },
      ],
    },
    education: {
      title: 'ÉDUCATION',
      items: [
        { title: 'AUTO FORMATION', subtitle: '', date: 'SEPT 2019 - PRÉSENT', description: ["Je me forme en continu aux technologies et aux compétences de développement (Skillsoft), et j'explore également l'utilisation des prompts et de l'Intelligence artificielle pour enrichir mon savoir-faire."] },
        { title: 'OFPPT TECHNOLOGIE MARRAKECH', subtitle: 'Technicien spécialisé en développement informatique', date: 'SEPT 2017 - JUIN 2019', description: [] },
        { title: 'FACULTÉ DES SCIENCES SEMLALIA', subtitle: '', date: 'SEPT 2015 - 2017', description: ['2015-2016 Science Physique', '2016-2017 Science Biologie'] },
        { title: 'BACCALAURÉAT', subtitle: 'Baccalauréat Science de la Vie et de la Terre', date: 'JUIN 2015', description: [] },
      ],
    },
    skills: {
      title: 'COMPÉTENCES',
      items: [
        { name: 'WORDPRESS', level: 5 },
        { name: 'C# / PHP', level: 4 },
        { name: 'HTML / CSS', level: 4 },
        { name: 'ASP.NET CORE', level: 4 },
        { name: 'JAVASCRIPT', level: 4 },
        { name: 'LARAVEL', level: 3 },
        { name: 'REACT JS', level: 3 },
        { name: 'ILLUSTRATOR', level: 3 },
        { name: 'NEXT JS', level: 3 },
        { name: 'PHOTOSHOP', level: 3 },
      ],
    },
    footer: 'Fait avec ❤️ par Abdelilah ELAZIRI',
    toggle: { lang: 'EN', theme: { light: 'Clair', dark: 'Sombre' } },
  },
};