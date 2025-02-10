import { Logo } from "@/components/custom/logo";
import { Navbar } from "@/components/custom/navbar";
import { SearchBar } from "@/components/custom/search-bar";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

export default function Home() {
    return (
        <div>
            <Navbar />
            <SearchBar />
        </div>
    );
}
