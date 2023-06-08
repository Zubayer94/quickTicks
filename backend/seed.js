require('ts-node/register');

require('./src/config/umzug').seeder.runAsCLI().finally(process.exit);