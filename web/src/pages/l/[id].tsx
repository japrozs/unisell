import { Carousel } from "@/components/custom/carousel";
import { Navbar } from "@/components/custom/navbar";
import { SearchBar } from "@/components/custom/search-bar";
import { Spinner } from "@/components/custom/spinner";
import { useGetListingQuery, useMeQuery } from "@/generated/graphql";
import { convertToTableData, shortenText, shouldShortenText } from "@/utils";
import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { LuHeart, LuTableProperties, LuTextQuote } from "react-icons/lu";
import { TbChartBarPopular } from "react-icons/tb";

interface ListingPageProps {}

const ListingPage: React.FC<ListingPageProps> = ({}) => {
    const { data: meData } = useMeQuery();
    const router = useRouter();
    const client = useApolloClient();
    const id =
        typeof router.query.id == "string"
            ? router.query.id
            : "00000000-0000-0000-0000-000000000000";
    const { data, loading } = useGetListingQuery({
        variables: {
            id,
        },
    });
    const [showFullBody, setShowFullBody] = useState(false);
    return (
        <div>
            <Navbar />
            <SearchBar />
            {data && !loading ? (
                <div className="max-w-[80rem] flex items-start mx-auto my-7 gap-x-8">
                    <div className="w-8/12">
                        <Carousel listing={data.getListing} />
                        <div className="mt-4 flex items-start gap-x-3">
                            <LuTextQuote className="mt-1 text-lg text-blue-500 min-w-5" />
                            <div>
                                <p className="g-sans mb-1 text-lg flex items-center">
                                    Item Description from the seller
                                </p>
                                {shouldShortenText(
                                    data.getListing.description
                                ) ? (
                                    <>
                                        {showFullBody ? (
                                            <p className="whitespace-pre-line text-gray-700 break-words">
                                                {data.getListing.description}
                                                <span
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setShowFullBody(
                                                            !showFullBody
                                                        );
                                                    }}
                                                    className="ml-1.5 text-blue-500 whitespace-nowrap font-medium text-smol hover:bg-blue-50 py-0.5 px-1 rounded-md cursor-pointer"
                                                >
                                                    Show less
                                                </span>
                                            </p>
                                        ) : (
                                            <p className="whitespace-pre-line text-gray-700 break-words">
                                                {shortenText(
                                                    data.getListing.description
                                                )}
                                                ...
                                                <span
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setShowFullBody(
                                                            !showFullBody
                                                        );
                                                    }}
                                                    className="ml-1.5 text-blue-500 whitespace-nowrap font-medium text-smol hover:bg-blue-50 py-0.5 px-1 rounded-md cursor-pointer"
                                                >
                                                    Show more
                                                </span>
                                            </p>
                                        )}
                                    </>
                                ) : (
                                    <p className="whitespace-pre-line text-gray-700 break-words">
                                        {data.getListing.description}
                                    </p>
                                )}
                            </div>
                        </div>
                        {/* <hr className="my-3 border-t border-dashed border-gray-200" /> */}
                    </div>
                    <div className="w-4/12">
                        <p className="text-[1.35rem] g-sans font-semibold leading-snug">
                            {data.getListing.title}
                        </p>
                        <hr className="my-3 border-t border-dashed border-gray-200" />
                        <div className="flex items-center ">
                            <img
                                src={data.getListing.creator.avatar}
                                className="h-10 w-10 object-cover rounded-full"
                                height={20}
                                width={20}
                                alt="avatar"
                            />
                            <div className="ml-2.5">
                                <a
                                    href={`/u/${data.getListing.creator.username}`}
                                    className="text-sidebar-item text-smol line-clamp-1 truncate text-ellipsis font-semibold text-gray-800 hover:text-primary-color hover:underline"
                                >
                                    {data.getListing.creator.name}
                                </a>
                                <p className="text-xs text-gray-700 menlo">
                                    @{data.getListing.creator.username}
                                </p>
                            </div>
                        </div>
                        <hr className="my-3 border-t border-dashed border-gray-200" />
                        <div className="flex items-center">
                            <p className="ml-auto mr-0 font-semibold text-[1.6rem]">
                                ${data.getListing.price}
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center">
                                <LuTableProperties className="text-blue-500 mr-2" />
                                <p className="g-sans text-lg flex items-center">
                                    Properties
                                </p>
                            </div>
                            <table className=" my-3 border-collapse border border-gray-300 w-full">
                                {/* <thead>
                                    <tr>
                                        <th className=" border border-gray-300 px-4 py-2">
                                            Field
                                        </th>
                                        <th className="border border-gray-300 px-4 py-2">
                                            Value
                                        </th>
                                    </tr>
                                </thead> */}
                                <tbody>
                                    {convertToTableData(
                                        JSON.parse(data.getListing.properties)
                                    ).map(([field, value], index) => (
                                        <tr key={index}>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {field}
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">
                                                {value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <hr className="my-5 border-t border-dashed border-gray-200" />
                        <button
                            className={
                                "text-smol g-sans w-full text-center bg-primary-color text-white hover:bg-opacity-[0.98] rounded-full py-2 px-3 whitespace-nowrap"
                            }
                        >
                            Buy it now
                        </button>
                        <button
                            className={
                                "mt-3 flex items-center justify-center text-smol g-sans w-full text-center border border-primary-color text-primary-color hover:bg-gray-50 rounded-full py-2 px-3 whitespace-nowrap"
                            }
                        >
                            <LuHeart className="mr-2.5 text-lg" />
                            Add to watchlist
                        </button>
                        <div className="mt-4 flex items-center py-3 px-5 bg-gray-100 rounded-md">
                            <TbChartBarPopular className="text-xl text-primary-color mr-2.5" />
                            <p className="text-smol text-gray-800">
                                <span className="font-semibold">
                                    People want this.
                                </span>{" "}
                                12 people are watching this.
                            </p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="my-20">
                    <Spinner />
                </div>
            )}
        </div>
    );
};

export default ListingPage;
