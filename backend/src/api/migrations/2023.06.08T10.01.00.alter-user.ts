
import { DataTypes } from 'sequelize';
import { Migration } from '../../config/umzug';

export const up: Migration = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().removeColumn('users', 'name');
};

export const down: Migration = async ({ context: sequelize }) => {
	await sequelize.getQueryInterface().addColumn('users', 'name', {
		type: DataTypes.STRING,
		allowNull: false,
	});
};