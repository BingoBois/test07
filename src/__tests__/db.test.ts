const dbfixtures = require('dbfixtures');
const fixturesMysqlDriver = require('dbfixtures-mysql-driver');

const mysqlConnectionInfo = {
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'mingade85',
  database: 'test07',
};

const fixtures  = {
  'accounts': [
    { id: 5, balance: 200 },
    { id: 6, balance: 300 },
    { id: 7, balance: 400 },
    { id: 10, balance: 500 },
  ],
  'creditcards': [
    { id: 1, pincode: 2338, created: new Date().toISOString(), last_used: new Date().toISOString(), attempts: 1, blocked: false, fk_account: 5 },
    { id: 2, pincode: 8443, created: new Date().toISOString(), last_used: new Date().toISOString(), attempts: 1, blocked: false, fk_account: 6 },
    { id: 3, pincode: 1111, created: new Date().toISOString(), last_used: new Date().toISOString(), attempts: 1, blocked: false, fk_account: 7 },
    { id: 4, pincode: 2222, created: new Date().toISOString(), last_used: new Date().toISOString(), attempts: 1, blocked: false, fk_account: 10 }
  ]
};

beforeAll(async function () {
    const mysqlDriver = await fixturesMysqlDriver.create(mysqlConnectionInfo);
    dbfixtures.setDrivers(mysqlDriver);
});

describe('fixtures example', function () {
  beforeEach(async function () {
    await dbfixtures.insertFixtures(fixtures);
  });
});