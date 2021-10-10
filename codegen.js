module.exports = {
    schema: [
        {
            "https://api.github.com/graphql": {
                headers: {
                    "Authorization": "Bearer " + process.env.REACT_APP_GITHUB_TOKEN,
                    "X-Hasura-Role": "user"
                }
            }
        }
    ],
    documents: ["./src/graphql/**/*.ts"],
    overwrite: true,
    generates: {
        "./src/generated/graphql.tsx": {
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo"
            ],
            // config: {
            //     skipTypename: false,
            //     withHooks: true,
            //     withHOC: false,
            //     withComponent: false,
            //     apolloReactHooksImportFrom: "@apollo/client"
            // }
        }
    }
};