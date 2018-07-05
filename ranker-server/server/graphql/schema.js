const typeDefs = [`
  type Query {
    posts : [Post]
  }

  type Post {
    title : String!
    content : String!
  }

  type Mutation {
    createPost(title:String!, content:String!): Post! 
  }

  schema {
    query: Query
    mutation: Mutation
  }
`];

export default typeDefs;

//date: { type: Date, default: Date.now }

// Post ! 필수 없애면 되자나