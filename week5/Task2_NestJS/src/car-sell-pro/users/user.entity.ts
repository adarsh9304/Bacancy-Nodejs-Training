import { AfterInsert ,AfterRemove ,AfterUpdate , Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
   
  @Column()
  email: string;

   @Column()
  password: string;

   @AfterInsert()
   logInsert(){
    console.log('Inserted user with id ',this.id);
   }

   @AfterUpdate()
   logUpdate(){
    console.log('updated user with id ',this.id);
   }

   @AfterRemove()
   logRemove(){
    console.log('deleted user with id ',this.id);
   }

}
