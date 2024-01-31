import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1706716282734 implements MigrationInterface {
    name = 'Test1706716282734'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`table\` (\`id\` int NOT NULL AUTO_INCREMENT, \`type\` varchar(255) NOT NULL, \`posX\` int NOT NULL, \`posY\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`table_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`total_price\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`total_price\` double NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`date_start\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`date_start\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`date_end\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`date_end\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` ADD CONSTRAINT \`FK_2e52c3d2ee23b941afed22f6a38\` FOREIGN KEY (\`table_id\`) REFERENCES \`table\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`order\` DROP FOREIGN KEY \`FK_2e52c3d2ee23b941afed22f6a38\``);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`date_end\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`date_end\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`date_start\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`date_start\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`total_price\``);
        await queryRunner.query(`ALTER TABLE \`order\` ADD \`total_price\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`order\` DROP COLUMN \`table_id\``);
        await queryRunner.query(`DROP TABLE \`table\``);
    }

}
