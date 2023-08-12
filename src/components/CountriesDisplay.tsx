import { usePagination } from "@mantine/hooks";
import { getContinentColor/* , shuffle */ } from "../functions";
import { CountriesDisplayProps, CountryInfo } from "../types";
import { useState, useEffect } from 'react'

// const COUNTRIES_PER_PAGE = 8

export function CountriesDisplay({ countries, setCountrySelected }: CountriesDisplayProps) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [countriesPerPage, setCountriesPerPage] = useState(8)
    const [visibleResults, setVisibleResults] = useState<CountryInfo[]>(countries.slice(0, countriesPerPage/* simultaneous */))

    // console.log(windowWidth)

    useEffect(() => {
        setVisibleResults(countries.slice(0, countriesPerPage))
    }, [countries, countriesPerPage])

    const handleResize = () => { setWindowWidth(window.innerWidth) };

    useEffect(() => {
        // Add event listener to track window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }); // No dependency array, so this effect runs on every component render

    useEffect(() => {
        switch (true) {
            case windowWidth > 615 && windowWidth < 1110:
                setCountriesPerPage(4)
                break;

            case windowWidth < 615:
                setCountriesPerPage(2)
                break;

            default:
                setCountriesPerPage(8)
                break;
        }
    }, [windowWidth])

    const pagination = usePagination({
        total: Math.ceil(countries.length / countriesPerPage),
        initialPage: 1,
        onChange(page: number) {
            const start = (page - 1) * countriesPerPage
            const end = start + countriesPerPage
            setVisibleResults(countries.slice(start, end))
        }
    })



    // const lastPage = pagination.range[pagination.range.length - 1]

    return (
        <>
            {
                visibleResults.length > 0 ?
                    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center items-center gap-20 ${visibleResults.length > 5 ? "" : visibleResults.length > 3 ? "mb-0 lg:mb-[20rem]" : "mb-0 md:mb-[20rem] lg:mb-[20rem] "}`}>
                        {/* shuffle( */visibleResults/* ) */.map((current: CountryInfo) => {
                            return (
                                <label
                                    key={`${current.name.official}-${current.area}`}
                                    htmlFor="my-modal-countrySelected"
                                    onClick={() => setCountrySelected(current)}
                                    className="card rounded-md bg-base-100 shadow-xl h-full group/country cursor-pointer"
                                >
                                    <figure className="w-full h-44 object-contain">
                                        <img className="w-full h-full object-cover" src={current.flags.png} alt={current.flags.alt} />
                                    </figure>
                                    <div className="card-body group-hover/country:bg-primary">
                                        <h2 className="card-title ">
                                            <p className="group-hover/country:text-base-100">{current.name.common}</p>
                                            {current.continents.map((currentContinent, index) => {
                                                return (
                                                    <div key={`${currentContinent}-${index}`} className={`badge badge-outline ${getContinentColor(currentContinent)}`}>
                                                        {currentContinent.slice(0, 3).toUpperCase()}
                                                    </div>
                                                )
                                            })}
                                            {/* <div>

                                    </div> */}
                                        </h2>
                                        {
                                            /* <p>{current.name.official}</p> */
                                        }
                                        {
                                            /* <div className="card-actions justify-end">
                                             <div className={`badge badge-outline`}>{current.continents}</div>
                                            </div> */
                                        }
                                    </div>
                                </label>
                            );
                        })}
                    </div>
                    :
                    <div className="w-full flex justify-center items-center">
                        <p className="animate-textShadowPopBr text-4xl md:text-5xl font-bold">
                            No results found
                        </p>
                    </div>
            }

            {/* <div className="join w-full flex justify-center">
                <button
                    onClick={() => pagination.previous()}
                    className={`join-item btn ${pagination.active !== 1 ? "" : "btn-disabled"}`}
                >
                    «
                </button>
                <button className="join-item btn">Page {pagination.active}</button>
                <button
                    onClick={() => pagination.next()}
                    className={`join-item btn ${pagination.active !== lastPage ? "" : "btn-disabled"}`}
                >
                    »
                </button>
            </div> */}

            <div className="join w-full flex justify-center">
                {pagination.range.map((currentPage) => {
                    return (
                        <button
                            key={currentPage}
                            onClick={() => pagination.setPage(currentPage !== 'dots' ? currentPage : 1)}
                            className={`join-item btn btn-primary ${pagination.active === currentPage ? "btn-secondary btn-active" : ""} ${currentPage === 'dots' ? "btn-disabled" : ""}`}>
                            {currentPage === "dots" ? <p className="text-secondary">...</p> : currentPage}
                        </button>
                    )
                })}
            </div>
        </>
    );
}
