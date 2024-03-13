/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner,TableColumn } from "typeorm";

export class AddContactnumberColumn1710321899444 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("user", new TableColumn({
            name: "contactNumber",
            type: "varchar",
            length: "255",
            isNullable: true
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("user", "contactNumber"); // Reverted
    }

}
