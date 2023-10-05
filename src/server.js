import { createServer, Model } from "miragejs";

createServer({
  models: {
    projects: Model,
  },

  seeds(server) {
    server.create("project", {
      id: "1",
      name: "Movie List App",
      price: 60,
      description:
        "Solo project. MovieListApp built with React with the given requirements. Own design. ",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
      type: "React",
    });
    server.create("project", {
      id: "2",
      name: "Quiz",
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
      type: "React",
    });
    server.create("project", {
      id: "3",
      name: "Component library",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
      type: "React",
    });
    server.create("project", {
      id: "4",
      name: "Learning journal",
      price: 65,
      description:
        "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
      type: "Responsive",
    });
    server.create("project", {
      id: "5",
      name: "Color Scheme Generator",
      price: 120,
      description:
        "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
      type: "Javascript",
    });
    server.create("project", {
      id: "6",
      name: "Watchlist",
      price: 70,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
      type: "Javascript",
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
