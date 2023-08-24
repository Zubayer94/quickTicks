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
		folder: 'src/api/migrations',
		template: filepath => [
			// read template from filesystem
			[filepath, fs.readFileSync(path.join(__dirname, '../api/templates/umzugMigrationTemplate.ts')).toString()],
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
	create: {
		folder: 'src/api/seeders',
		template: filepath => [
			// read template from filesystem
			[filepath, fs.readFileSync(path.join(__dirname, '../api/templates/umzugSeederTemplate.ts')).toString()],
		],
	},
});

export type Seeder = typeof seeder._types.migration;