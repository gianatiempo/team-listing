import { rest } from 'msw';

const random = max => Math.floor(Math.random() * max) + 1;
const getRandomSkills = num =>
  [`Java`, `React`, `Redis`, 'MongoDb', 'AWS', 'Python', 'SQL', '.NET']
    .slice(0)
    .sort(() => 0.5 - Math.random())
    .splice(0, num);

const getRandomRoles = num =>
  ['Developer', 'Functional Analyst', 'Tester', 'Project Manager', 'UX Expert', 'Product Owner']
    .slice(0)
    .sort(() => 0.5 - Math.random())
    .splice(0, num);

const getRandomBuildings = num =>
  ['Main Tech 1', 'Main Tech 2', 'Main Tech 3', 'Main Tech 4']
    .slice(0)
    .sort(() => 0.5 - Math.random())
    .splice(0, num);

const getRandomMgmtLvl = (lvl, num, total = 6) =>
  [...Array(total)]
    .map((item, i) => `Mgmt ${lvl} #${i}`)
    .slice(0)
    .sort(() => 0.5 - Math.random())
    .splice(0, num);

const data = [];
for (let i = 1; i <= 300; i++) {
  data.push({
    id: i,
    name: `Team Number ${i}`,
    members: random(14), // up to 14 team members
    building: getRandomBuildings(1)[0], // up to 4 buildings
    lvl1: getRandomMgmtLvl(1, 1)[0],
    lvl2: getRandomMgmtLvl(2, 1)[0],
    lvl3: getRandomMgmtLvl(3, 1)[0],
    lvl4: getRandomMgmtLvl(4, 1)[0],
    lvl5: getRandomMgmtLvl(5, 1)[0],
    lvl6: getRandomMgmtLvl(6, 1)[0],
    skills: getRandomSkills(3) // up to 3 team skills
  });
}

const handlers = [
  rest.get('/api/team', (req, res, ctx) => {
    const page = req.url.searchParams.get('page');
    const limit = req.url.searchParams.get('limit');
    const sort = req.url.searchParams.get('sort');
    const order = req.url.searchParams.get('order');

    const sortedData =
      order !== 'undefined'
        ? data.sort((a, b) => (order === 'ascend' ? (a[sort] < b[sort] && 1) || -1 : (a[sort] > b[sort] && 1) || -1))
        : data.sort((a, b) => a.id - b.id);

    return res(ctx.json({ data: sortedData.slice((page - 1) * limit, page * limit), total: data.length }));
  }),

  rest.get('/api/team/filters', (req, res, ctx) => {
    return res(
      ctx.json({
        lvl1: getRandomMgmtLvl(1, 6).sort(),
        lvl2: getRandomMgmtLvl(2, 6).sort(),
        lvl3: getRandomMgmtLvl(3, 6).sort(),
        lvl4: getRandomMgmtLvl(4, 6).sort(),
        lvl5: getRandomMgmtLvl(5, 6).sort(),
        lvl6: getRandomMgmtLvl(6, 6).sort(),
        skills: getRandomSkills(8).sort(),
        role: getRandomRoles(6).sort(),
        building: getRandomBuildings(4).sort()
      })
    );
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
        building: getRandomBuildings(1), // up to 4 buildings
        lvl1: getRandomMgmtLvl(1, 1)[0],
        lvl2: getRandomMgmtLvl(2, 1)[0],
        lvl3: getRandomMgmtLvl(3, 1)[0],
        lvl4: getRandomMgmtLvl(4, 1)[0],
        lvl5: getRandomMgmtLvl(5, 1)[0],
        lvl6: getRandomMgmtLvl(6, 1)[0],
        skills: getRandomSkills(3), // up to 3 team skills
        teamMembers: [...Array(members)].map((item, i) => ({
          id: i,
          username: `username${i}`,
          name: 'Random User',
          lastName: i + 1,
          photoUrl: 'https://ui-avatars.com/api/?background=random',
          bio: `Bio of Member ${i + 1} in the company`,
          skills: getRandomSkills(5),
          role: getRandomRoles(1)
        }))
      })
    );
  })
];

export default handlers;
