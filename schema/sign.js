/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('sign', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    stu_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'student',
        key: 'id'
      }
    },
    sign: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'sign'
  });
};
