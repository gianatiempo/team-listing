import { rest } from 'msw';

const random = max => Math.floor(Math.random() * max) + 1;
const skills = [`Java`, `React`, `Redis`, 'MongoDb', 'AWS', 'Python', 'SQL', '.NET'];
const getRandomSkills = num =>
  skills
    .slice(0)
    .sort(() => 0.5 - Math.random())
    .splice(0, num);

const getRandomRole = () =>
  ['Developer', 'Functional Analyst', 'Tester', 'Project Manager', 'UX Expert', 'Product Owner']
    .slice(0)
    .sort(() => 0.5 - Math.random())
    .splice(0, 1);

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
        skills: getRandomSkills(3) // up to 3 team skills
      });
    }
    return res(ctx.json({ data }));
  }),

  rest.get('/api/team/:id', (req, res, ctx) => {
    const { id } = req.params;
    const members = random(14);
    return res(
      ctx.json({
        id: id,
        name: `Team Number ${id}`,
        objective: 'This team was created to push forward some project.',
        members, // up to 14 team members
        building: `Main Tech ${random(4)}`, // up to 4 buildings
        lvl1: `Mgmt 1 #${random(3)}`, // up to 3 lvl 1
        lvl2: `Mgmt 2 #${random(4)}`, // up to 4 lvl 2
        lvl3: `Mgmt 3 #${random(5)}`, // up to 5 lvl 3
        lvl4: `Mgmt 4 #${random(4)}`, // up to 4 lvl 4
        lvl5: `Mgmt 5 #${random(3)}`, // up to 3 lvl 5
        lvl6: `Mgmt 6 #${random(2)}`, // up to 2 lvl 6
        skills: getRandomSkills(3), // up to 3 team skills
        teamMembers: [...Array(members)].map((item, i) => ({
          id: i,
          username: `username${i}`,
          name: 'Random User',
          lastName: i + 1,
          photoUrl: 'https://ui-avatars.com/api/?background=random',
          bio: `Bio of Member ${i + 1} in the company`,
          skills: getRandomSkills(5),
          role: getRandomRole()
        }))
      })
    );
  })
];

export default handlers;
