module.exports = {
	'/users/register': {
		post: {
			tags: {
				Users: ' Create a user',
			},
			description: 'create a user',
			operationId: 'getPosts',
			parameters: [],
			responses: {
				200: {
					description: "The user's email must be confirmed during de register.",
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/User',
							},
						},
					},
				},
			},
		},
	},
};
