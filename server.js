const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

const currentSession = {
  secret: "theserverisalie",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(currentSession));

// using handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

<<<<<<< HEAD
app.listen(PORT, () => {
  sequelize.sync({ force: false })
  console.log('Now listening on port 3001')
});
=======
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening on port 3001"));
});
>>>>>>> a2a5bc062fbceb4b130aca82108c7645b03b0e2c
