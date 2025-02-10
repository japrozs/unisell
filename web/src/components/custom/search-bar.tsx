import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Logo } from "./logo";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = ({}) => {
    const [query, setQuery] = useState("");
    return (
        <>
            <div className="my-3 flex items-center max-w-[80rem] mx-auto gap-x-8">
                <a href="/">
                    <Logo className="w-auto h-12 text-primary-color" />
                </a>
                <div className="transition-all duration-75 rounded-full border focus-within:ring-2 px-3 group w-full flex items-center">
                    <IoSearchOutline className="text-xl text-gray-600" />
                    <input
                        value={query}
                        placeholder="Search for anything"
                        onChange={(e) => setQuery(e.target.value)}
                        className="text-md pl-4 py-2 rounded-full focus:outline-none w-full"
                    />
                    {query.trim().length !== 0 && (
                        <RxCross2
                            onClick={() => setQuery("")}
                            className="text-xl text-gray-600 hover:text-primary-color cursor-pointer"
                        />
                    )}
                </div>
                <button
                    className={
                        "min-w-44 text-center bg-black text-white hover:bg-opacity-[0.98] rounded-full py-2 px-3 whitespace-nowrap"
                    }
                >
                    Search
                </button>
            </div>
            <hr />
        </>
    );
};
