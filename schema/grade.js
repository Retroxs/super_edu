/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grade', {
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
    exam_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    score: {
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
    tableName: 'grade'
  });
};
