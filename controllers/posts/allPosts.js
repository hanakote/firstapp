const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = async (req, res) => {
  const posts = await prisma.post.findMany();
  res.render("posts/allPosts", {posts});
};

