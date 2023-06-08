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

export const seeder = new Umzug({
	migrations: {
		glob: ['../api/seeders/*.ts', { cwd: __dirname }],
	},
	context: sequelize,
	storage: new SequelizeStorage({
		sequelize,
		modelName: 'seeder_meta',
	}),
	logger: console,
});

export type Seeder = typeof seeder._types.migration;