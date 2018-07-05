import Post from '../mongoose/schema';

const resolvers = {
    
    Query: {
      posts: async () => {
        return await Post.find();
      }
    },

    Mutation: {
      createPost: (_, {title, content}) => {
        let newPost;
        newPost = new Post();
        newPost.title = title;
        newPost.content = content;
        //post.date = new Date();
        newPost.save(function(err){
          if(err){
            console.error(err);
            return err;
          }
        });
      return newPost;
      }
    }
  };

  export default resolvers;