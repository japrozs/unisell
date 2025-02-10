import { Logo } from "@/components/custom/logo";
import { Navbar } from "@/components/custom/navbar";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function Home() {
    const [query, setQuery] = useState("");
    return (
        <div>
            <Navbar />
            <div className="my-3 flex items-center max-w-[80rem] mx-auto gap-x-8">
                <Logo className="w-auto h-14 text-primary-color" />
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
                        "min-w-52 text-center bg-black text-white hover:bg-opacity-[0.98] rounded-full py-2 px-3 whitespace-nowrap"
                    }
                >
                    SEARCH UNISELL
                </button>
            </div>
            <hr />
        </div>
    );
}
