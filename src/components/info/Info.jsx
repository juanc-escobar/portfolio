import homeTek from "../../assets/images/home-tek-img.webp"
import dbStore from "../../assets/images/db-store-img.webp"
import platzzaStore from "../../assets/images/platzza-store-img.webp"
import kunawa from "../../assets/images/kunawa.webp"
import calmpal from "../../assets/images/calmpal.webp"
import profileImg from '../../assets/images/profile-img.webp'


export const info = {
    firstName: "Juan",
    secondName: "Camilo",
    lastName: "Escobar",
    position: "a Front End Developer",
    profilePicture: profileImg,
    projects: [ // This is where your portfolio projects will be detailed
        {
            title: "Simpleland",
            live: "https://simple-land.com/",
            source: "",
            description: "Simpleland, a team project I contributed to, is an AI-powered landing page generator creating pages in just 60 seconds. It streamlines lead capture with automated text and image handling. Customize sections, text, and images effortlessly without coding.",
            image: null,
        },
        {
            title: "CalmPal",
            live: "https://development.app.calmpal.com/",
            source: "https://github.com/BinaryStudioAcademy/bsa-2023-calmpal",
            description: "CalmPal, a team project I contributed to, is an AI-powered Mental Health app. It serves as a trusted companion on the journey to inner peace, providing AI-driven therapy through a responsive chatbot and personalized mindfulness practices like meditation, mood tracking, and journaling.",
            image: calmpal,
        },
        {
            title: "Kunawa",
            live: "https://kunawaofficial.com/",
            source: "",
            description: "Kunawa Store represents an e-commerce platform crafted on Shopify. This project, undertaken on a freelance basis, was commissioned by an artisanal handbag brand in Colombia seeking to enhance its online presence through the establishment of a sophisticated e-commerce store.",
            image: kunawa,
        },
        {
            title: "Space-site",
            live: "https://space-travel-website-xi.vercel.app/",
            source: "https://github.com/juanc-escobar/SpaceTravelWebsite",
            description: "The Space Site Project is a React single-page application designed to deliver a fast and visually enhanced experience for the webpage. Emphasizing responsiveness, it ensures optimal performance across all devices.",
            image: null,
        },
        {
            title: "E-commerce Platzza",
            live: "https://react-proyecto-final-escobar.vercel.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/juanc-escobar/react-proyecto-final-escobar", // this should be a link to the **repository** of the project, where the code is hosted.
            description: "The Platzza Store is an E-commerce application for a style store featuring various categories of clothing and accessories. The application was built using the StoreAPI, Firebase, and React. The primary focus of the project was to test the functionality of an E-commerce platform and identify areas for improvement in the process.",
            image: null,
        },
        {
            title: "The DB Store",
            live: "https://proyecto-final-js-escobar.vercel.app/",
            source: "https://github.com/juanc-escobar/proyecto-final-js-escobar",
            description: "The DB-Store is an E-commerce web application for a style store featuring various categories of clothing and accessories. The application was built using a Product StoreAPI, HTML, CSS, Bootstrap, Javascript and the Sweet Alert library. The focus of the projectwas to test the functionality of the application.",
            image: null,
        },
        {
            title: "Home-Tek",
            live: "https://home-tek-escobar.vercel.app/",
            source: "https://github.com/juanc-escobar/home-tek-escobar",
            description: "Home-Tek Is a static website about home automation its a fully responsive website with beautiful animations for a client to showcase their company's information. The website was developed using HTML5, CSS, Sass, to ensure fast load times and proper visualization on any device.",
            image: null,
        },

    ]
}

