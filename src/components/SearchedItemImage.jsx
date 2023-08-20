const SearchedItemImage = ({ data }) => {
    const { image, link, title, displayLink } = data
    return (
        <div
            className="group flex flex-col py-3 cursor-pointer"
            onClick={() => window.open(image.contextLink, "_blank")}
        >
            <div className="rounded-xl overflow-hidden bg-black/[0.03] h-[100px] md:h-[120px] lg:h-[140px] group-hover:shadow-c">
                <img
                    className="h-full w-full object-contain"
                    src={link}
                    alt={title}
                />
            </div>
            <div className="text-xs text-[#70757a] pt-2">
                {displayLink}
            </div>
            <div className="text-sm text-[#3c4043] truncate pt-1 group-hover:underline">
                {title}
            </div>
        </div>
    );
};

export default SearchedItemImage;
