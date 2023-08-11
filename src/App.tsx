import axios from "axios"
import { useQuery } from "react-query"
import useLocalStorage from "./customHooks/useLocalStorage"
import NavBar from "./components/NavBar"
import { CountryInfo } from './types';
import { CountriesDisplay } from "./components/CountriesDisplay";
import SearchDisplay from "./components/SearchDisplay";
import Footer from "./components/Footer";
import Drawer from "./components/Drawer";
import ModalContrySelected from "./components/ModalContrySelected";

function App() {
  const { isLoading, error, data: allCountries } = useQuery<CountryInfo[]>({
    // enabled: false,
    refetchOnMount: false,      // Disable refetch on component mount
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    queryKey: "getting all countries",
    // networkMode: 'offlineFirst',
    queryFn: async () => {
      return await axios.get('https://restcountries.com/v3.1/all')
        .then(data => {
          // return organizeData(data.data)
          return data.data
        })
    }
  })

  const [theme, setTheme] = useLocalStorage("COUNTRIES_APP_THEMES", 'forest')

  const [countries, setCountries] = useLocalStorage<CountryInfo[] | undefined>("COUNTRIES_APP_COUNTRIES", allCountries)
  const [region, setRegion] = useLocalStorage<string>("COUNTRIES_APP_REGION", "All")
  const [byName, setByName] = useLocalStorage("COUNTRIES_APP_NAME", "")
  const [countrySelected, setCountrySelected] = useLocalStorage<CountryInfo | undefined>("COUNTRIES_APP_COUTRYSELECTED", undefined)

  if (isLoading) {
    return (
      <div>LOADING...</div>
    )
  }

  if (error || !countries) {
    return (
      <div>ERROR</div>
    )
  }

  function filterByRegion(regionSelected: string, nameSelected: string) {
    let countriesFiltered = allCountries

    if (countriesFiltered !== undefined && (regionSelected !== "All" || nameSelected !== "")) {
      if (regionSelected !== "All") {
        console.log("regionSelected", regionSelected)
        countriesFiltered = countriesFiltered.reduce(
          (acc: CountryInfo[], currCountry: CountryInfo) => {
            if (currCountry.continents.includes(regionSelected)) {
              acc.push(currCountry)
            }
            return acc
          },
          []
        )
      }

      if (nameSelected !== "") {
        console.log("nameSelected", nameSelected)
        countriesFiltered = countriesFiltered.reduce(
          (acc: CountryInfo[], currCountry: CountryInfo) => {
            if (currCountry.name.common.toLowerCase().includes(nameSelected.toLowerCase())) {
              acc.push(currCountry)
            }
            return acc
          },
          []
        )
      }

      console.log("countriesFiltered", countriesFiltered)

      setCountries(countriesFiltered)
    } else {
      setCountries(allCountries)
    }
  }


  return (
    <div
      data-theme={theme}
      className="min-h-screen"
    >
      <NavBar />
      <Drawer
        setTheme={setTheme}
        theme={theme}
      />

      <ModalContrySelected
        countrySelected={countrySelected}
      />

      <div className="min-h-[86vh] w-full bg-base-300 ">
        <div className="mx-auto w-[80%] flex flex-col gap-10 pb-10">
          <SearchDisplay
            filterByRegion={filterByRegion}
            region={region}
            setRegion={setRegion}
            byName={byName}
            setByName={setByName}
          />
          <CountriesDisplay
            countries={countries}
            setCountrySelected={setCountrySelected}
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}


export default App