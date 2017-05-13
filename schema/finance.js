/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('finance', {
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
    should_pay: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pay: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    teacher_sign: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'finance'
  });
};
