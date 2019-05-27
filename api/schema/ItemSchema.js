const { buildASTSchema } = require("graphql");
const gql = require("graphql-tag");
const ItemRepository = require("../repositories/ItemRepository");

let ITEMS = [];

ItemRepository.all().then(data => {
  ITEMS = data;
});

const schema = buildASTSchema(gql`
  type Query {
    items: [Item]
  }

  type Item {
    id: ID
    title: String
    created_at: String
  }
`);

const rootValue = {
  items: () => ITEMS
};

module.exports = { schema, rootValue };
