function createMarkup(html) {
    return {__html: html};
  }

const SearchedItem = ({ data }) => {
    const {link, formattedUrl, title, htmlSnippet} = data
    return (
        <div className="flex flex-col py-3 max-w-[700px]">
            <div
                className="group cursor-pointer"
                onClick={() => window.open(link, "_blank")}
            >
                <div className="text-sm truncate text-[#202124]">
                    {formattedUrl}
                </div>
                <div className="group-hover:underline text-xl text-[#1a0dab] pt-2">
                    {title}
                </div>
            </div>
            <div
                className="text-sm text-[#4d5156] leading-6 pt-1"
                dangerouslySetInnerHTML={createMarkup(htmlSnippet)}
            />
        </div>
    );
};

export default SearchedItem;
