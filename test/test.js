const request = require('supertest');
const app = require('../index.js');
const User = require('../models/User.js');

describe('Endpoints testing', () => {
	afterAll(async () => {
		return await User.deleteMany({});
	});
	const user = {
		username: 'testUser',
		email: '19lacruz88@gmail.com',
		password: 'holahola',
		birthday: '1988-06-15',
		name: { first: 'FirstNameTest', last: 'LastNameTest' },
	};
	test('register', async () => {
		const res = await request(app).post('/users').send(user).expect(201);
		const { _id, emailConfirmed, birthday, role, tokens, FollowIds, FollowerIds, PostIds, password, createdAt, updatedAt, __v } = res.body.user;
		const testUser = {
			...user,
			_id,
			emailConfirmed,
			birthday,
			role,
			tokens,
			FollowIds,
			FollowerIds,
			PostIds,
			password,
			createdAt,
			updatedAt,
			__v,
		};
		const dataBaseUser = res.body.user;
		expect(dataBaseUser).toEqual(testUser);
	});
	test ('login', async () => {
        const res = await request(app)
        .post('/users/login')
        .send({email: user.email,password: user.password})
        expect(200)
        expect(res.body.msg).toBe(`Welcome ${user.name.first}.`)
    })
});
