import { MigrationInterface, QueryRunner } from "typeorm";

export class Init11706638488297 implements MigrationInterface {
    name = 'Init11706638488297'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`pic\` varchar(255) NOT NULL, \`category\` int NOT NULL, \`quantity\` int NOT NULL DEFAULT '1', \`total_price\` int NOT NULL DEFAULT '0', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`order\` (\`id\` int NOT NULL AUTO_INCREMENT, \`status\` int NOT NULL, \`total_price\` int NOT NULL, \`date_start\` int NOT NULL, \`date_end\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`order\``);
        await queryRunner.query(`DROP TABLE \`product\``);
    }

}
