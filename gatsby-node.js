const { node } = require("eslint-webpack-plugin/node_modules/webpack")
const crypto = require("crypto");

module.exports.onCreateNode = async({node, actions, createNodeId}) => {
    if(node.internal.type === "StrapiPost") {
        const newNode = {
            id: createNodeId(`StrapiPostMdxContent-${node.id}`),
            parent: null,
            children: [],
            internal: {
              type: "StrapiPostMdxContent",
              contentDigest: crypto
                .createHash("md5")
                .update(node.content || " ")
                .digest("hex"),
              mediaType: `text/markdown`,
              content: node.content || " ",
            }
          };
        actions.createNode(newNode);
        actions.createParentChildLink({
            parent: node,
            child: newNode,
        });
    }
}