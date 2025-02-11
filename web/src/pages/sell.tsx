import { Button } from "@/components/custom/button";
import { Navbar } from "@/components/custom/navbar";
import { SearchBar } from "@/components/custom/search-bar";
import { Spinner } from "@/components/custom/spinner";
import { useIsAuth } from "@/utils/use-is-auth";
import React from "react";
import { CgFileDocument } from "react-icons/cg";

interface SellProps {}

const Sell: React.FC<SellProps> = ({}) => {
    const { data, loading } = useIsAuth();
    return (
        <div>
            <Navbar />
            <SearchBar />
            <div className="max-w-[80rem] mx-auto my-7">
                <div className="flex items-center">
                    <CgFileDocument className="text-2xl text-gray-300 mr-2.5" />
                    <p className="text-2xl g-sans font-semibold">My Listings</p>
                    <a href="/list" className="ml-auto mr-0 ">
                        <button
                            className={
                                "text-smol g-sans min-w-44 text-center bg-primary-color text-white hover:bg-opacity-[0.98] rounded-full py-2 px-3 whitespace-nowrap"
                            }
                        >
                            List an item
                        </button>
                    </a>
                </div>
                {!loading && data && data.me ? (
                    <div className="mt-4">
                        {data?.me?.listings.map((listing, i: number) => (
                            <a key={i} href={`/l/${listing.id}`}>
                                <div className="transition duration-75 hover:bg-gray-100/80 cursor-pointer rounded-lg p-3 w-72">
                                    <img
                                        className="w-72 mb-2.5 h-48 object-cover rounded-lg"
                                        src={
                                            listing.attachments.length === 0
                                                ? "https://i.redd.it/80hxyr8x3h6z.jpg"
                                                : `${process.env.NEXT_PUBLIC_API_URL}/${listing.attachments[1]}`
                                        }
                                    />
                                    <p className="line-clamp-2 overflow-hidden text-ellipsis">
                                        {listing.title}
                                    </p>
                                    <div className="flex items-center">
                                        <p className="ml-auto mr-0 mt-1 font-bold text-[1.1rem]">
                                            ${listing.price}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                        {/* TODO: fix this */}
                        {data.me.listings.length === 0 && (
                            <p>
                                You don't have any listings. Click the 'List an
                                item' button to create a listing.
                            </p>
                        )}
                    </div>
                ) : (
                    <div className="my-20">
                        <Spinner />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Sell;
