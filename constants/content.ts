
import { ContentData } from '../types';

const profilePhotoURL = 'https://raw.githubusercontent.com/abdelilah-elaziri/Abdelilah-ELAZIRI-Portfolio/refs/heads/main/assets/Profile.png';

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
        { name: 'DEUTSCH', level: 3 },
      ],
    },
    hobbies: {
      title: 'HOBBIES',
      items: ['Photography', 'Sports', 'Graphic Design'],
    },
    about: {
      title: 'ABOUT ME',
      description: 'Web developer with over four years of experience specializing in WordPress and modern Javascript frameworks like ReactJs and Next.js. Skilled in HTML, CSS, PHP, and C#. I create custom themes, plugins, and dynamic web applications. Passionate about clean code, new technologies, and delivering high-quality solutions. I am deeply interested in AI and Prompting, and I enjoy challenging myself with difficult problems to find creative solutions.',
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
        { name: 'LARAVEL', level: 4 },
        { name: 'HTML / CSS / JS', level: 4 },
        { name: 'PHP', level: 3 },
        { name: 'REACT JS / NEXT JS', level: 3 },
        { name: 'C# / ASP.NET', level: 2 },
        { name: 'ILLUSTRATOR', level: 3 },
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
        { name: 'ALLEMAND', level: 3 },
      ],
    },
    hobbies: {
      title: "CENTRES D'INTERET",
      items: ['Photographie', 'Sports', 'Design graphique'],
    },
    about: {
      title: 'PROFILE',
      description: "Développeur web avec plus de quatre ans d'expérience, spécialisé dans WordPress et les frameworks JavaScript modernes comme React.js und Next.js. Compétent en HTML, CSS, PHP et C#, je crée des thèmes, plugins et applications web dynamiques. Passionné par le code propre, les nouvelles technologies et la livraison de solutions de qualité. Je m'intéresse vivement à l'IA et au Prompting, et j'aime relever des défis complexes pour trouver des solutions innovantes.",
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
        { title: 'BACCALAUREAT', subtitle: 'Baccalauréat Science de la Vie et de la Terre', date: 'JUIN 2015', description: [] },
      ],
    },
    skills: {
      title: 'COMPÉTENCES',
      items: [
        { name: 'WORDPRESS', level: 5 },
        { name: 'LARAVEL', level: 4 },
        { name: 'HTML / CSS / JS', level: 4 },
        { name: 'PHP', level: 3 },
        { name: 'REACT JS / NEXT JS', level: 3 },
        { name: 'C# / ASP.NET', level: 2 },
        { name: 'ILLUSTRATOR', level: 3 },
        { name: 'PHOTOSHOP', level: 3 },
      ],
    },
    footer: 'Fait avec ❤️ par Abdelilah ELAZIRI',
    toggle: { lang: 'DE', theme: { light: 'Clair', dark: 'Sombre' } },
  },
  de: {
    name: 'ABDELILAH ELAZIRI',
    title: 'WEB-ENTWICKLER & ENTWICKLER',
    profilePhoto: profilePhotoURL,
    contact: {
      title: 'KONTAKT',
      location: 'Marrakesch, Marokko',
      phone: '+212 608 345 621',
      email: 'abdelilahelaziri96@gmail.com',
    },
    socials: {
      title: 'FOLGE MIR',
      linkedin: 'Abdelilah-elaziri',
      github: 'github.com/abdelilah-elaziri',
      linkedinURL: 'https://www.linkedin.com/in/abdelilah-elaziri/',
      githubURL: 'https://github.com/abdelilah-elaziri',
    },
    languages: {
      title: 'SPRACHE',
      items: [
        { name: 'ARABISCH', level: 5 },
        { name: 'ENGLISCH', level: 4 },
        { name: 'FRANZÖSISCH', level: 4 },
        { name: 'DEUTSCH', level: 3 },
      ],
    },
    hobbies: {
      title: 'HOBBYS',
      items: ['Fotografie', 'Sport', 'Grafikdesign'],
    },
    about: {
      title: 'ÜBER MICH',
      description: 'Webentwickler mit über vier Jahren Erfahrung, spezialisiert auf WordPress und moderne Javascript-Frameworks wie ReactJs und Next.js. Erfahren in HTML, CSS, PHP und C#. Ich erstelle maßgeschneiderte Themes, Plugins und dynamische Webanwendungen. Leidenschaftlich für sauberen Code, neue Technologien und hochwertige Lösungen. Ich interessiere mich sehr für KI und Prompting und fordere mich gerne mit schwierigen Problemen heraus.',
    },
    experience: {
      title: 'ERFAHRUNG',
      items: [
        { title: 'WEB-ENTWICKLER', subtitle: '', date: 'DEZ 2022 - HEUTE', description: ['Erstellung von WooCommerce- und Vitrinen-Websites in WordPress mit dem Theme „Avada“. Verwendung von Elementor Theme Builder.'] },
        { title: 'WEB-ENTWICKLER', subtitle: '', date: 'DEZ 2021 - DEZ 2022', description: ['Erstellung von WooCommerce-Websites in WordPress mit dem Theme „Jupiterx“, unter Verwendung von Elementor und Crooblock.'] },
        { title: 'FULL STACK ENTWICKLER', subtitle: '', date: 'DEZ 2020 - AUG 2021', description: ['Erstellung von WordPress-Websites mit dem kostenlosen Theme „Astra“, Elementor Builder.', 'Verwaltung aller Websites über den Server „Siteground“.', 'Erstellung von E-Mail-Vorlagen (Html & Css) in Mailchimp.'] },
        { title: 'ENTWICKLER & E-MAIL-MARKETING', subtitle: '', date: 'JAN 2020 - MÄRZ 2020', description: ['Praktikum im E-Mail-Marketing.', 'Praktikum als WordPress-Entwickler & SEO.'] },
        { title: 'ENTWICKLER', subtitle: '', date: 'JAN 2019 - JUN 2019', description: ['Praktikum bei der Erstellung einer Desktop-Anwendung und Webanwendung zur Schulverwaltung für Direktoren, Programmiersprache C# und SQL Server.'] },
      ],
    },
    education: {
      title: 'AUSBILDUNG',
      items: [
        { title: 'SELBSTSTUDIUM', subtitle: '', date: 'SEPT 2019 - HEUTE', description: ['Lernen von Skillsoft-Technologien und Softwareentwicklung.'] },
        { title: 'OFPPT TECHNOLOGIE MARRAKESCH', subtitle: 'Spezialist für technische Informationen', date: 'SEPT 2017 - JUNI 2019', description: [] },
        { title: 'FAKULTÄT SEMLALIA MARRAKESCH', subtitle: '', date: 'SEPT 2015 - 2017', description: ['2015-2016 Physik', '2016-2017 Biologie'] },
        { title: 'ABITUR', subtitle: 'Abitur in Lebens- und Geowissenschaften', date: 'JUNI 2015', description: [] },
      ],
    },
    skills: {
      title: 'FÄHIGKEITEN',
      items: [
        { name: 'WORDPRESS', level: 5 },
        { name: 'LARAVEL', level: 4 },
        { name: 'HTML / CSS / JS', level: 4 },
        { name: 'PHP', level: 3 },
        { name: 'REACT JS / NEXT JS', level: 3 },
        { name: 'C# / ASP.NET', level: 2 },
        { name: 'ILLUSTRATOR', level: 3 },
        { name: 'PHOTOSHOP', level: 3 },
      ],
    },
    footer: 'Gemacht mit ❤️ von Abdelilah ELAZIRI',
    toggle: { lang: 'EN', theme: { light: 'Hell', dark: 'Dunkel' } },
  },
};
