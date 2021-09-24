import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class Colors extends BaseSchema {
	protected tableName = 'colors';

	public async up() {
		this.schema.createTable(this.tableName, (table) => {
			table.increments('id');

			table.string('name');
			table.string('display');
		});
	}

	public async down() {
		this.schema.dropTable(this.tableName);
	}
}
