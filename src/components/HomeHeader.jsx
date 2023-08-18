import { TbGridDots } from "react-icons/tb";

const HomeHeader = () => {
    return (
        <header className="h-16 flex justify-between md:justify-end items-center gap-4 px-5">
            <div className="flex gap-4 items-center">
                <span className="text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer">
                    Gmail
                </span>
                <span className="text-black/[0.87] text-[13px] line-height hover:underline cursor-pointer">
                    Images
                </span>
                <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.05]">
                    <TbGridDots size={20} color="#5f6368" />
                </span>
            </div>
        </header>
    );
};

export default HomeHeader;
