import { Field, ObjectType } from "type-graphql";
import {
    CreateDateColumn,
    BaseEntity,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    Column,
    ManyToOne,
} from "typeorm";
import { User } from "./user";

@ObjectType()
@Entity()
export class Listing extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Field()
    @Column({ default: "" })
    title: string;

    @Field()
    @Column({ default: "" })
    description: string;

    @Field()
    @Column({ default: false })
    sold: boolean;

    @Field(() => User)
    @ManyToOne(() => User, (user) => user.listings)
    creator: User;

    @Field()
    @Column()
    creatorId: string;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
