/*
How to model a table?
https://sequelize.org/v5/manual/getting-started.html#modeling-a-table

id is string since we do not want it to be a auto incrementing integer.
*/
module.exports = (sequelize, Sequelize) => {
  const Recommendation = sequelize.define("doctorRecommendationsForPatients", {
    uuid: {
      type: Sequelize.STRING,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
    },
    uuidOfRecommendationMadeFor: {
      type: Sequelize.STRING
    },
    recommendationDescription: {
      type: Sequelize.STRING
    },
    priority: {
      type: Sequelize.INTEGER
    },
    recordChangedByUUID: {
      type: Sequelize.STRING
    },
    recordChangedFromIPAddress: {
      type: Sequelize.STRING,
      defaultValue: ''
    },
    isAutoRex: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    autoRecommendationsOrderId: {
      type: Sequelize.STRING
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });

  return Recommendation;
};
