import { Navbar } from "@/components/custom/navbar";
import { SearchBar } from "@/components/custom/search-bar";
import { useIsAuth } from "@/utils/use-is-auth";
import React from "react";
import { CgFileDocument } from "react-icons/cg";

interface SellProps {}

const Sell: React.FC<SellProps> = ({}) => {
    useIsAuth();
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
            </div>
        </div>
    );
};

export default Sell;
