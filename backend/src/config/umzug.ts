import { Umzug, SequelizeStorage } from 'umzug';
import sequelize from './database';
import fs = require('fs');
import path = require('path');

export const migrator = new Umzug({
	migrations: {
		glob: ['../api/migrations/*.ts', { cwd: __dirname }],
	},
	context: sequelize,
	storage: new SequelizeStorage({sequelize}),
	logger: console,
	create: {
		folder: 'migrations',
		template: filepath => [
			// read template from filesystem
			[filepath, fs.readFileSync(path.join(__dirname, '../api/template/umzugMigrationTemplate.ts')).toString()],
		],
	},
});

export type Migration = typeof migrator._types.migration;