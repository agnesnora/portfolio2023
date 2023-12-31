import { createServer, Model } from "miragejs";

createServer({
  models: {
    projects: Model,
  },

  seeds(server) {
    server.create("project", {
      id: "1",
      name: "Movie List App",
      description:
        "A simple searchable movie app built with React with the given requirements. Pop-up window with the movie details. Deletable lines and sortable columns. Both the table and the pop-up mode can be paged. Own design.",
      imageUrl: "images/Movie.png",
      type: ["React", "CSS", "HTML5"],
      live: "https://agnesnora.github.io/movieListApp/",
      code: "https://github.com/agnesnora/movieListApp",
    });

    server.create("project", {
      id: "2",
      name: "Quizzical",

      description:
        "This Quizzical app was a solo project as part of the React Basics Module of the Scrimba Frontend Career Path. Built from scratch using React, CSS and API. Own design with surprise confetti. ",
      imageUrl: "images/Quizzical.png",
      type: ["React", "CSS", "Responsive"],
      live: "https://agnesnora.github.io/quizzical/",
      code: "https://github.com/agnesnora/quizzical",
    });
    server.create("project", {
      id: "3",
      name: "Tindog",
      imageUrl: "images/Tindog.png",
      live: "https://tindogagnesnora.netlify.app",
      code: "https://github.com/agnesnora/tindogReact",

      description:
        "Tindog is a dating app for dogs, which was a solo project of Scrimba Career Path. The main feature was to pop up a like/nope badge on the dog's image after clicking on the like or dislike buttons. I expanded it with a chat feature, and the users can also save the liked dogs in their profile.",

      type: ["React", "Responsive", "CSS"],
    });

    server.create("project", {
      id: "4",
      name: "Color Scheme Generator",

      description:
        "The Color Scheme Generator was a solo project as part of the Working with APIs Module of the Scrimba Career Path. The user can choose 'seed color' and color scheme mode. Clicking the button makes a request to the Color API to get a color scheme. As a stretch goal I have added a day/night button and the possibility to save the favourite schemes to the user's profile. Own design.  ",
      imageUrl: "images/Color.png",
      type: ["React", "API", "CSS"],
      live: "https://coloragnesnora.netlify.app",
      code: "https://github.com/agnesnora/colorReact",
    });

    server.create("project", {
      id: "5",
      name: "Component library",
      imageUrl: "images/Component.png",
      description:
        "This Component Library was a solo project as part of the Advanced React Module of the Scrimba Career Path. Built from scratch, creating reusable components in React. Own design.",
      type: ["React", "CSS", "Responsive"],
      live: "https://clever-kitten-80ba4d.netlify.app/",
      code: "https://github.com/agnesnora/componentLibrary",
    });
    server.create("project", {
      id: "6",
      name: "Data Analytics",

      description:
        "In this recent project, I embarked on a hands-on journey to sharpen my coding skills by translating a Figma design into a functional web application. The primary goal of this exercise was to enhance my proficiency in CSS and polish my responsive design techniques.",
      imageUrl: "images/Data.png",
      type: ["Responsive", "CSS", "React"],
      live: "https://dataanalyticsagnesnora.netlify.app/",
      code: "https://github.com/agnesnora/Data-Analitics",
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/projects", (schema, request) => {
      return schema.projects.all();
    });

    this.get("/projects/:id", (schema, request) => {
      const id = request.params.id;
      return schema.projects.find(id);
    });
  },
});
