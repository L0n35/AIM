module.exports = function(sequelize, DataTypes) {
  var Team = sequelize.define("Team", {
    team_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    logo_link: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Team.associate = function(models) {
    // We're saying that a Event should belong to an initiator
    // A Event can't be created without an initiator due to the foreign key constraint
    Team.belongsToMany(models.Match, {
      through: "matches_tbl"
    });
  };

  return Team;
};
