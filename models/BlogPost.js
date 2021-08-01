module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: { type: DataTypes, primaryKey: true },
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  });

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user',
    });
  };

  return BlogPost;
};