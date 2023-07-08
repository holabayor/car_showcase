"use client";

import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";

const SearchBar = () => {
    const handleSearch = () => { }

    const [manufacturer, setManufacturer] = useState(' ');

    const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
        <button
            type="submit"
            className={`-ml-3 z-10 ${otherClasses}`}>
            <Image
                src="'magnifying-glass.svg"
                alt="magnifying glass"
                width={40}
                height={40}
                className="object-contain"
            />
        </button>
    )

    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__itms">
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton otherClass es="sm:hidden" />
            </div>
        </form>
    )
}

export default SearchBar