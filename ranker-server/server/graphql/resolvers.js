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
        //모듈화
        //중복체크
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

  /*
  Wikis.findOne({'title': req.body.title}, function(err, wiki){
            if(wiki){
                return res.send({status:404})
            } else {
                var wiki = new Wikis();
                if(req.body.password){
                    wiki.password = req.body.password;
                }
                req.body.title = req.body.title.replace(/(<([^>]+)>)/gi, ""); //태그 제거 정규표현식
                wiki.title = req.body.title;
                wiki.number = manage.number;
                wiki.contents = req.body.contents;
                wiki.date = new Date();

                wiki.save(function(err){
                    if(err){
                        console.error(err);
                        res.render({status: 0});
                        console.log({status: 0});
                        return;
                    }
                    res.send({status:'success', newtitle: req.body.title});
                });
                manage.number = manage.number+1;
                manage.save(function(err){
                    if(err){
                        console.error(err);
                        res.render({status: 0});
                        console.log({status: 0});
                        return;
                    }
                })
            }
        }); //wiki findone
*/