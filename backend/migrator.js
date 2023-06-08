require('ts-node/register');

require('./src/config/umzug').migrator.runAsCLI().finally(process.exit);