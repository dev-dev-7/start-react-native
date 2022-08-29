const PostSchema = {
  name: 'Post',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: 'string',
    description: 'string?',
    tags: 'string[]',
    price: 'string?',
    files: 'string[]',
    userId: 'string',
    currency: 'string?',
    views: 'string?',
    distance: 'int?',
    country: 'string?',
    city: 'string?',
    area: 'string?',
    createdAt: 'string?',
    relation: { type: 'string', default: "5" }
  }
};

export default PostSchema;