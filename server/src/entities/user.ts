import { USER_DEFAULTS } from "../constants";
import { Field, ObjectType } from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";
import { Listing } from "./listing";

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;

    @Field()
    @Column({ unique: true })
    username: string;

    @Field()
    @Column({
        default: USER_DEFAULTS.BIO,
    })
    bio: string;

    @Field()
    @Column({ default: USER_DEFAULTS.PROFILE_PICTURE_URL })
    avatar: string;

    // @Field()
    // @Column({ default: false })
    // verified: boolean;

    // @Column()
    // verificationCode: string;

    @Field()
    @Column({ unique: true })
    email: string;

    @Column()
    password!: string;

    @Field(() => [Listing])
    @OneToMany(() => Listing, (listing) => listing.creator)
    listings: Listing[];

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
