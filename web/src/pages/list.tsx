import { Button } from "@/components/custom/button";
import { InputField } from "@/components/custom/input-field";
import { Navbar } from "@/components/custom/navbar";
import { SearchBar } from "@/components/custom/search-bar";
import { Form, Formik } from "formik";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { GrMoney } from "react-icons/gr";
import { LuTableProperties } from "react-icons/lu";
import { MdOutlineSubtitles } from "react-icons/md";
import { TbPencil, TbPhotoSquareRounded } from "react-icons/tb";

interface ListProps {}

const List: React.FC<ListProps> = ({}) => {
    return (
        <div>
            <Navbar />
            <SearchBar />
            <div className="max-w-[80rem] mx-auto my-7">
                <div className="flex items-stretch">
                    <div className="w-8/12 mr-5">
                        <div className="flex items-start">
                            <TbPencil className="text-gray-400 text-xl mt-0.5 min-w-10" />
                            <div className="w-full">
                                <p className="g-sans text-xl font-semibold flex items-center">
                                    List an item
                                </p>
                                <Formik
                                    initialValues={{
                                        usernameOrEmail: "",
                                        password: "",
                                    }}
                                    onSubmit={async (values, { setErrors }) => {
                                        console.log(values);
                                        // setErrors();
                                    }}
                                >
                                    {({ isSubmitting }) => (
                                        <Form className="w-full">
                                            <InputField
                                                name="title"
                                                placeholder="Brand New Air Jordan 5 Retro Grape 2013 Size US M 8.5 Grape-Ice Blue colorway"
                                                label="Title (the more descriptive the better)"
                                                fullWidth
                                            />
                                            <hr className="my-3 border-t border-dashed border-gray-200" />
                                            <div>
                                                <div className="flex items-center">
                                                    <LuTableProperties className="text-blue-500 mr-2" />
                                                    <p className="g-sans text-lg flex items-center">
                                                        Add item-specific
                                                        properties
                                                    </p>
                                                </div>
                                                <p className="text-sm text-gray-700 mt-1">
                                                    Add properties about your
                                                    item that might interest
                                                    potential buyers (for
                                                    example: size, brand,
                                                    condition)
                                                </p>
                                            </div>
                                            <div className="flex items-center w-full gap-x-5">
                                                <div className="w-full">
                                                    <InputField
                                                        name="password"
                                                        placeholder="Condition"
                                                        label="Field"
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="w-full">
                                                    <InputField
                                                        name="password"
                                                        placeholder="Brand new with tags"
                                                        label="Value"
                                                        fullWidth
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex items-center w-full gap-x-5">
                                                <div className="w-full">
                                                    <InputField
                                                        name="password"
                                                        placeholder="Size"
                                                        label="Field"
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="w-full">
                                                    <InputField
                                                        name="password"
                                                        placeholder="US 8.5/9"
                                                        label="Value"
                                                        fullWidth
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex items-center w-full gap-x-5">
                                                <div className="w-full">
                                                    <InputField
                                                        name="password"
                                                        placeholder="Brand"
                                                        label="Field"
                                                        fullWidth
                                                    />
                                                </div>
                                                <div className="w-full">
                                                    <InputField
                                                        name="password"
                                                        placeholder="Jordan"
                                                        label="Field"
                                                        fullWidth
                                                    />
                                                </div>
                                            </div>
                                            <button
                                                className={
                                                    "ml-auto mr-0 transition duration-75 mt-3 flex text-primary-color hover:bg-blue-50/80 font-semibold py-1 px-1.5 rounded-md"
                                                }
                                            >
                                                <GoPlus className="mr-2 text-xl" />
                                                Add property
                                            </button>
                                            <hr className="my-3 border-t border-dashed border-gray-200" />
                                            <div>
                                                <div className="flex items-center">
                                                    <LuTableProperties className="text-blue-500 mr-2" />
                                                    <p className="g-sans text-lg flex items-center">
                                                        Photos & Videos
                                                    </p>
                                                </div>
                                                <p className="text-sm text-gray-700 mt-1">
                                                    You can add up to 10 photos
                                                    and a 1-minute video. Buyers
                                                    want to see all details and
                                                    angles.
                                                </p>
                                            </div>
                                            <hr className="my-3 border-t border-dashed border-gray-200" />
                                            <InputField
                                                name="price"
                                                placeholder="235.99"
                                                label="Price (USD)"
                                                fullWidth
                                            />
                                            <InputField
                                                name="sellerLocation"
                                                placeholder="Piedmont Central University Housing"
                                                label="Seller Location"
                                                fullWidth
                                            />
                                            <p className="text-xs text-gray-500 mt-10 mb-3">
                                                A final value fee applies when
                                                your item sells. By selecting
                                                List item, you agree to accept
                                                the unisell User Agreement and
                                                Payments Terms of Use,
                                                acknowledge reading the User
                                                Privacy Notice and assume full
                                                responsibility for the item
                                                offered and the content of your
                                                listing.
                                            </p>
                                            <div className="flex items-center ml-auto mr-0 max-w-44">
                                                <Button
                                                    loading={isSubmitting}
                                                    colored
                                                    roundedFull
                                                    makeTextABitBigger
                                                    type="submit"
                                                    label="List item"
                                                    className="mt-5"
                                                />
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                    <div className="w-4/12 border-l border-dashed border-gray-200 pl-5">
                        <div className="flex items-stretch mb-10">
                            <MdOutlineSubtitles className="text-purple-500 text-lg mr-2 min-w-6 mt-[0.2rem]" />
                            <div>
                                <p className="g-sans text-lg flex items-center">
                                    Write a standout title
                                </p>
                                <ul className="list-disc mt-0.5">
                                    <li className="text-sm text-gray-700 mt-1">
                                        We’ll recommend search terms that buyers
                                        often use, so be sure to add these in
                                        the title.
                                    </li>
                                    <li className="text-sm text-gray-700 mt-1">
                                        Avoid all caps and focus on specific
                                        details like brand, model, size, and
                                        color.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-stretch mb-10">
                            <TbPhotoSquareRounded className="text-blue-500 text-lg mr-2 min-w-6 mt-[0.2rem]" />
                            <div>
                                <p className="g-sans text-lg flex items-center">
                                    Take high-quality photos
                                </p>
                                <ul className="list-disc mt-0.5">
                                    <li className="text-sm text-gray-700 mt-1">
                                        Snap your items from multiple angles in
                                        a well-lit place, and capture any
                                        blemishes for transparency.
                                    </li>
                                    <li className="text-sm text-gray-700 mt-1">
                                        Try cleaning up or modifying your images
                                        and add a white background for better
                                        visibility.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-stretch mb-10">
                            <GrMoney className="text-emerald-600 text-lg mr-2 min-w-6 mt-[0.2rem]" />
                            <div>
                                <p className="g-sans text-lg flex items-center">
                                    Set the right price
                                </p>
                                <ul className="list-disc mt-0.5">
                                    <li className="text-sm text-gray-700 mt-1">
                                        We will recommend a price based on
                                        recent sales of similar items.
                                    </li>
                                    <li className="text-sm text-gray-700 mt-1">
                                        You can even watch how other sellers are
                                        pricing their items, and modify your
                                        pricing strategy accordingly.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
