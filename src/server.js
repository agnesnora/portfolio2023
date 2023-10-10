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
        "Simple searchable movie app built with React with the given requirements. Pop up window with the movie details. Deletable lines and sortable columns.Both the table and the pop up mod can be paged. Own design. ",
      imageUrl: "src/Movie.png",
      type: ["React", "CSS", "HTML5"],
      live: "https://agnesnora.github.io/movieListApp/",
      code: "https://github.com/agnesnora/movieListApp",
    });
    server.create("project", {
      id: "2",
      name: "Quizzical",

      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl: "src/Quizzical.png",
      type: ["React", "CSS", "HTML5"],
      live: "https://agnesnora.github.io/quizzical/",
      code: "https://github.com/agnesnora/quizzical",
    });
    server.create("project", {
      id: "3",
      name: "Component library",

      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl: "src/Component.png",
      type: ["React", "CSS", "HTML5"],
      live: "https://clever-kitten-80ba4d.netlify.app/",
      code: "https://github.com/agnesnora/componentLibrary",
    });
    server.create("project", {
      id: "4",
      name: "Learning journal",

      description:
        "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
      imageUrl: "src/Journal.png",
      type: ["Responsive", "CSS", "HTML5"],
      live: "https://agnesnora.github.io/learning-journal/",
      code: "https://github.com/agnesnora/learning-journal",
    });
    server.create("project", {
      id: "5",
      name: "Color Scheme Generator",

      description:
        "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl: "src/Color.png",
      type: ["Javascript", "Api", "CSS", "HTML5"],
      live: "https://agnesnora.github.io/color-scheme-generator/",
      code: "https://github.com/agnesnora/color-scheme-generator",
    });
    server.create("project", {
      id: "6",
      name: "Movie Watchlist",
      live: "https://agnesnora.github.io/Watchlist/",
      code: "https://github.com/agnesnora/Watchlist",

      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl: "src/Watch.png",
      type: ["Javascript", "Api", "CSS", "HTML5"],
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
