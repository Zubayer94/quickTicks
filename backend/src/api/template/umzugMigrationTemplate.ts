
import { DataTypes } from 'sequelize';
import { Migration } from '../../config/umzug';

export const up: Migration = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().createTable('tableName', {});
};

export const down: Migration = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().dropTable('tableName');
};