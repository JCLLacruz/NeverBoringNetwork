module.exports = {
	'/posts': {
		get: {
			tags: {
				Posts: ' Get Posts',
			},
			description: 'Get posts',
			operationId: 'getPosts',
			parameters: [],
			responses: {
				200: {
					description: 'Posts were obtained',
					content: {
						'application/json': {
							schema: {
								$ref: '#/components/schemas/Post',
							},
						},
					},
				},
			},
		},
	},
};
