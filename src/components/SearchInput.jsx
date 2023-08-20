import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import MicIcon from "../assets/mic.svg";
import ImageIcon from "../assets/image.svg";

const SearchInput = ({focus}) => {
    const { query } = useParams();
    const [searchQuery, setSearchQuery] = useState(query || "");
    const navigate = useNavigate();

    const searchQueryHandler = (e) => {
        e.preventDefault()
        if (searchQuery?.length > 0) {
            navigate(`/${searchQuery}/${1}`);
        }
    };
    return (
        <form
            onSubmit={searchQueryHandler}
            id="searchBox"
            className="h-[46px] w-full md:w-[584px] flex items-center gap-3 px-4 border border-[#dfe1e5] rounded-3xl hover:shadow-inputShadow hover:border-borderColor focus-within:border-borderColor focus-within:shadow-inputShadow"
        >
            <AiOutlineSearch size={18} color="#9aa0a6" />
            <input
                type="text"
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                autoFocus={focus}
                className="grow outline-0 text-black/[0.87]"
            />
            <div className="flex items-center gap-3">
                {searchQuery && (
                    <IoMdClose
                        size={24}
                        color="#70757a"
                        className="cursor-pointer"
                        onClick={() => setSearchQuery("")}
                    />
                )}
                <img className="h-6 w-6 cursor-pointer" src={MicIcon} alt="" />
                <img
                    className="h-6 w-6 cursor-pointer"
                    src={ImageIcon}
                    alt=""
                />
            </div>
        </form>
    );
};

export default SearchInput;
