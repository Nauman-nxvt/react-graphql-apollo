module.exports = {
    schema: [
        {
            'https://api.github.com/graphql': {
                headers: {
                    Authorization:
                        'Bearer ' + process.env.REACT_APP_GITHUB_TOKEN,
                },
            },
        },
    ],
    documents: ['./src/graphql/**/*.ts'],
    overwrite: true,
    generates: {
        './src/generated/graphql.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ],
        },
    },
}
