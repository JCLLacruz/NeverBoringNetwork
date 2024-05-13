const request = require('supertest');
const app = require('../index.js');
const User = require('../')

describe('Endpoints testing', () => {
    afterAll(async ()=>{
        return await User.deleteMany({});
    })
    const user = {
    username: 'testUser',
    email: 'testusers@getMaxListeners.com',
    password: 'holahola',
    birthday: '1988-06-15',
    name: {first: 'FirstNameTest',last: 'LastNameTest'},
    }
    test ('register', async () => {
        const res = await request(app)
        .post('/users')
        .send(user)
        .expect(201)
        const testUser = {
            ...user,
            _id: res.body.user._id,
            emailConfirmed: false,
            role: res.body.user.role,
            tokens: res.body.user.tokens, 
            password: res.body.user.password,
            createdAt: res.body.user.createdAt,
            updatedAt: res.body.user.updatedAt
        }
        const dataBaseUser = res.body.user;
        expect(dataBaseUser).toEqual(testUser);
    })
});