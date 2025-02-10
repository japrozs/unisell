import { useMeQuery } from "@/generated/graphql";
import React from "react";
import { LuBell, LuShoppingCart } from "react-icons/lu";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
    const { data, loading } = useMeQuery();
    return (
        <div className="py-1 border-b text-smol border-gray-200">
            <div className="max-w-[80rem] mx-auto flex items-center gap-x-5">
                {!loading && data && data.me ? (
                    <p>
                        Hi{" "}
                        <span className="text-primary-color font-semibold cursor-pointer">
                            Japroz!
                        </span>
                    </p>
                ) : (
                    <p>
                        Hi!{" "}
                        <a
                            href="/login"
                            className="text-primary-color cursor-pointer underline"
                        >
                            sign in
                        </a>{" "}
                        or{" "}
                        <a
                            href="/register"
                            className="text-primary-color cursor-pointer underline"
                        >
                            register
                        </a>
                    </p>
                )}
                <p className="ml-10 hover:underline hover:text-primary-color cursor-pointer">
                    Daily Deals
                </p>
                <p className="hover:underline hover:text-primary-color cursor-pointer">
                    Help & Contact
                </p>
                <div className="flex items-center ml-auto mr-0 gap-x-5">
                    <a
                        href="/sell"
                        className="hover:underline hover:text-primary-color cursor-pointer"
                    >
                        Sell
                    </a>
                    <p className="hover:underline hover:text-primary-color cursor-pointer">
                        Watchlist
                    </p>
                    <p className="hover:underline hover:text-primary-color cursor-pointer">
                        My activity
                    </p>
                    <LuBell className="text-yellow-500" />
                    <LuShoppingCart className="hover:text-primary-color cursor-pointer" />
                </div>
            </div>
        </div>
    );
};
