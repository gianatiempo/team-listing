import { rest } from 'msw';

const random = max => Math.floor(Math.random() * max) + 1;

const handlers = [
  rest.get('/api/team', (req, res, ctx) => {
    const data = [];
    for (let i = 1; i <= 300; i++) {
      data.push({
        id: i,
        name: `Team Number ${i}`,
        members: random(14), // up to 14 team members
        building: `Main Tech ${random(4)}`, // up to 4 buildings
        lvl1: `Mgmt 1 #${random(3)}`, // up to 3 lvl 1
        lvl2: `Mgmt 2 #${random(4)}`, // up to 4 lvl 2
        lvl3: `Mgmt 3 #${random(5)}`, // up to 5 lvl 3
        lvl4: `Mgmt 4 #${random(4)}`, // up to 4 lvl 4
        lvl5: `Mgmt 5 #${random(3)}`, // up to 3 lvl 5
        lvl6: `Mgmt 6 #${random(2)}`, // up to 2 lvl 6
        skills: [`Java`, `React`, `Redis`] // up to 4 team skills
      });
    }
    return res(ctx.json({ data }));
  })
];

export default handlers;
