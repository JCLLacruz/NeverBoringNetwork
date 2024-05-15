const request = require('supertest');
const app = require('../index.js');
require('dotenv').config();
const User = require('../models/User.js');
const {jwt_secret} = process.env;

describe('Endpoints testing', () => {
	afterAll(async () => {
		return await User.deleteMany();
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
		const { _id, emailConfirmed, birthday, role, tokens, FollowIds, FollowerIds, PostIds, password, createdAt,online, updatedAt, __v } = res.body.user;
		const testUser = {
			...user,
			_id,
			emailConfirmed,
			birthday,
			role,
            online,
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
	let _id;
	let token = [];
	test('login', async () => {
		const res = await request(app).post('/users/login').send({ email: user.email, password: user.password }).expect(200);
		token = res._body.user.tokens[0];
		_id = res._body.user._id;
		expect(res.body.msg).toBe(`Welcome ${user.name.first}.`);
	});
	test('allOnlineUsers', async () => {
		const res = await request(app).get('/users/onlineusers').expect(200);
		expect(res.body.msg).toBe('Online users');
	});
	test('userFindById', async () => {
		const res = await request(app).get(`/users/id/${_id}`).expect(200);
		expect(res.body.msg).toBe(`User with id: ${_id} was found.`);
	});
    test('getOnline', async () => {
		console.warn('_id',_id,'token',token);
        const res = await request(app)
        .put(`/users/getonline/${_id}`)
		.set({ Authorization: token })
        .expect(200);
        expect(res.body.msg).toBe(`User with Id: ${_id} ist online`);
    })
    test('logout', async () => {
        const res = await request(app)
        .delete(`/users/logout/${_id}`)
		.set({ Authorization: token })
        .expect(200);
        expect(res.body.msg).toBe('User logged out')
    })
});
