// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Users = sequelize.define('users', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  }, {
    tableName: 'users',
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/reference-guide/relationships#adding-relationships.
  Users.associate = (models) => {
    Users.belongsToMany(models.users, {
      through: 'follow',
      foreignKey: 'followingId',
      otherKey: 'followerId',
      as: 'usersThroughFollows',
    });
    Users.belongsToMany(models.users, {
      through: 'follow',
      foreignKey: 'followerId',
      otherKey: 'followingId',
      as: 'usersThroughFollowsFollowerId',
    });
    Users.belongsToMany(models.posts, {
      through: 'like',
      foreignKey: 'UserId',
      otherKey: 'PostId',
      as: 'postsThroughLikes',
    });
    Users.hasMany(models.comments, {
      foreignKey: {
        name: 'commenterKey',
        field: 'commenter',
      },
      as: 'commenterComments',
    });
    Users.hasMany(models.comments, {
      foreignKey: {
        name: 'userIdKey',
        field: 'UserId',
      },
      as: 'comments',
    });
    Users.hasMany(models.posts, {
      foreignKey: {
        name: 'userIdKey',
        field: 'UserId',
      },
      as: 'posts',
    });
  };

  return Users;
};
