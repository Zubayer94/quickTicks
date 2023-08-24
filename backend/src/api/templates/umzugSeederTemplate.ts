import type { Seeder } from '../../config/umzug';

const seedTableName = [
	{ id: 1, otherField: "otherValue"},
	{ id: 2, otherField2: "otherValue2"},
];

export const up: Seeder = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().bulkInsert('tableName', seedTableName);
};

export const down: Seeder = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().bulkDelete('tableName', { id: seedTableName.map(u => u.id) });
};