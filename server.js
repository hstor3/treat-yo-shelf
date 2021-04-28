const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers");
const helpers = require("./utils/helpers");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({
  helpers,
});

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

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize
  .sync({
    force: false,
  })
  .then(() => {
    app.listen(PORT, () => console.log("Now listening"));
  });

/*
TODO: Setup ENV X
TODO: Change Models over to new Process. X
TODO: Setup Seed File X
TODO: Make sure Package and Server files are what they are supposed to be. X
TODO: Change Routes over to new Process. X
TODO: Make sure stuff's ready:
TODO: Homepage, Signup, Signin, Dashboard, Logout
TODO: Update Post X
TODO: Change Handlebars.
TODO: Change Utilities.
TODO: ESLint to our wishes.
TODO: Load Public folder with necessary things
TODO: Change CSS.
TODO: Setup Database X
*/
