module.exports = (sequelize, Sequelize) => {
  const UserRole = sequelize.define("user_role", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    componentsAllowedToAccess: {
      type: Sequelize.STRING
    },
    multiStateDisplayAreaComponentLoadSequence: {
      type: Sequelize.STRING
    },
    currentStateDisplayAreaComponentLoadSequence: {
      type: Sequelize.STRING
    },
    // Timestamps
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });

  UserRole.associate = function (models) {
    UserRole.hasMany(models.user, { as: 'users' })
  };

  return UserRole;
};
