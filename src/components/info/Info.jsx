import homeTek from "../../assets/images/home-tek-img.webp"
import dbStore from "../../assets/images/db-store-img.webp"
import platzzaStore from "../../assets/images/platzza-store-img.webp"
import profileImg from '../../assets/images/profile-img.webp'


export const info = {
    firstName: "Juan",
    secondName: "Camilo",
    lastName: "Escobar",
    position: "a Front End Developer",
    profilePicture: profileImg,
    projects: [ // This is where your portfolio projects will be detailed
        {
            title: "E-commerce Platzza",
            live: "https://react-proyecto-final-escobar.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/juanc-escobar/react-proyecto-final-escobar", // this should be a link to the **repository** of the project, where the code is hosted.
            description: "The DB-Store  is an E-commerce web application for a style store featuring various categories of clothing and accessories. The application was built using a Product StoreAPI, HTML, CSS, Bootstrap, Javascript and the Sweet Alert library. The focus of the projectwas to test the functionality of the application.",
            image: platzzaStore,
        },
        {
            title: "The DB Store",
            live: "https://proyecto-final-js-escobar.vercel.app/",
            source: "https://github.com/juanc-escobar/proyecto-final-js-escobar",
            description: "The DB-Store  is an E-commerce web application for a style store featuring various categories of clothing and accessories. The application was built using a Product StoreAPI, HTML, CSS, Bootstrap, Javascript and the Sweet Alert library. The focus of the projectwas to test the functionality of the application.",
            image: dbStore,
        },
        {
            title: "Home-Tek",
            live: "https://home-tek-escobar.vercel.app/",
            source: "https://github.com/juanc-escobar/home-tek-escobar",
            description: "Home-Tek Is a website about home automation its a fully responsive website for a client to showcase their company's information. The website was developed using HTML5, CSS, Sass to ensure fast load times and proper visualization on any device.",
            image: homeTek,
        }

    ]
}

