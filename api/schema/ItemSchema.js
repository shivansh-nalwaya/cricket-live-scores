const { buildASTSchema } = require("graphql");
const gql = require("graphql-tag");
const ItemRepository = require("../repositories/ItemRepository");

const schema = buildASTSchema(gql`
  type Query {
    items: [Item]
    item(id: ID!): Item
  }

  type Item {
    id: ID
    title: String
    created_at: String
  }
`);

const rootValue = {
  items: () => ItemRepository.all(),
  item: ({ id }) => ItemRepository.find(id)
};

module.exports = { schema, rootValue };
