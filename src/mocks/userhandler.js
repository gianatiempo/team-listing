import { rest } from 'msw';

const handlers = [
  rest.get('/api/user', (req, res, ctx) => {
    return res(
      ctx.json({
        id: 0,
        username: 'admin',
        name: 'John',
        lastName: 'Wick',
        photoUrl: 'https://avatarfiles.alphacoders.com/842/84239.jpg',
        skills: ['Being The One'],
        role: 'Owner'
      })
    );
  })
];

export default handlers;
