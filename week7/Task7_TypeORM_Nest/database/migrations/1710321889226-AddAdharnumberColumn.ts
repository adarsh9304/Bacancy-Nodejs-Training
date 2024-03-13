/* eslint-disable prettier/prettier */
import { MigrationInterface, QueryRunner,TableColumn } from "typeorm";

export class AddAdharnumberColumn1710321889226 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("user", new TableColumn({
            name: "AdharNumber",
            type: "varchar",
            length: "255",
            isNullable: true
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("user", "AdharNumber"); 
    }


}
