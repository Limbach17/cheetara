var db = require("../models");

module.exports = function(app) {
  app.get("/api/frameworks", function(req, res) {
    db.Framework.selectAll({
        include: [
            {model: db.Subject},
            {model: db.Example},
          ]
    }).then(function(dbFramework) {
      res.json(dbFramework);
    });
  });

  app.get("/api/frameworks/:id", function(req, res) {
    db.Framework.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {model: db.Subject},
        {model: db.Example},
      ]
    }).then(function(dbFramework) {
      res.json(dbFramework);
    });
  });

  app.post("/api/frameworks", function(req, res) {
    db.Framework.create(req.body).then(function(dbFramework) {
      res.json(dbFramework);
    });
  });

  app.put("/api/frameworks", function(req, res) {
    db.Framework.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbFramework) {
      res.json(dbFramework);
    });
  });

  app.delete("/api/frameworks/:id", function(req, res) {
    db.Framework.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbFramework) {
      res.json(dbFramework);
    });
  });

};