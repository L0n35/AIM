const express = require("express");
const app = express();
const db = require("../models");

// Routes
app.get("/api/teams", async (req, res) => {
  const query = {};
  if (req.query.team_id) {
    query.team_id = req.query.team_id;
  } else if (req.query.team_name) {
    query.team_name = req.query.team_name;
  } else if (req.query.logo_link) {
    query.logo_link = req.query.logo_link;
  }

  db.Team.findAll({
    where: query
  }).then(function(dbEvent) {
    console.log(dbEvent);
    res.json(dbEvent);
  });
});

module.exports = app;
