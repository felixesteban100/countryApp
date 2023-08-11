import { getContinentColor } from "../functions"
import { SearchDisplayProps } from "../types"
import { AiOutlineSearch } from 'react-icons/ai';

function SearchDisplay({ filterByRegion, region, setRegion, byName, setByName }: SearchDisplayProps) {
  return (
    <div className="flex flex-col md:flex-row gap-5 md:justify-between items-center pt-5 md:pt-10">
      <div className="join w-full">
        <div className="flex justify-center items-center px-4 bg-base-100 join-item">
          <AiOutlineSearch className="text-3xl text-primary" />
        </div>
        <input
          onChange={(e) => {
            setByName(e.target.value)
            filterByRegion(region, e.target.value)
          }}
          className="input join-item w-full md:w-[50%]"
          placeholder="Search for a country"
        />
      </div>

      <select
        value={region}
        onChange={(e) => {
          setRegion(e.target.value)
          filterByRegion(e.target.value, byName)
        }}
        className={`select select-primary ${getContinentColor(region)} w-full md:w-[50%]`}
      >
        <option className={`${getContinentColor("All")}`}>All</option>
        <option className={`${getContinentColor("Asia")}`}>Asia</option>
        <option className={`${getContinentColor("Oceania")}`}>Oceania</option>
        <option className={`${getContinentColor("Europe")}`}>Europe</option>
        <option className={`${getContinentColor("North America")}`}>North America</option>
        <option className={`${getContinentColor("Antarctica")}`}>Antarctica</option>
        <option className={`${getContinentColor("South America")}`}>South America</option>
        <option className={`${getContinentColor("Africa")}`}>Africa</option>
      </select>
    </div>
  )
}

export default SearchDisplay