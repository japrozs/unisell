"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListingResolver = void 0;
const is_auth_1 = require("../middleware/is-auth");
const listing_1 = require("../entities/listing");
const type_graphql_1 = require("type-graphql");
let ListingResolver = class ListingResolver {
    async getListing(id) {
        return listing_1.Listing.findOne({ where: { id }, relations: ["creator"] });
    }
};
__decorate([
    (0, type_graphql_1.UseMiddleware)(is_auth_1.isAuth),
    (0, type_graphql_1.Query)(() => listing_1.Listing),
    __param(0, (0, type_graphql_1.Arg)("id", () => String)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ListingResolver.prototype, "getListing", null);
ListingResolver = __decorate([
    (0, type_graphql_1.Resolver)(listing_1.Listing)
], ListingResolver);
exports.ListingResolver = ListingResolver;
//# sourceMappingURL=listing-resolver.js.map