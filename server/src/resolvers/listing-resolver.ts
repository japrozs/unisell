import { isAuth } from "../middleware/is-auth";
import { Listing } from "../entities/listing";
import {
    Arg,
    Ctx,
    ObjectType,
    Query,
    Resolver,
    UseMiddleware,
} from "type-graphql";

@Resolver(Listing)
export class ListingResolver {
    @UseMiddleware(isAuth)
    @Query(() => Listing)
    async getListing(@Arg("id", () => String) id: string) {
        return Listing.findOne({ where: { id }, relations: ["creator"] });
    }
}
