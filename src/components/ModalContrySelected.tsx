import { CountryInfo } from "../types"

type ModalContrySelectedProps = {
    countrySelected: CountryInfo | undefined
}

function ModalContrySelected({ countrySelected }: ModalContrySelectedProps) {

    if (countrySelected !== undefined) {
        return (
            <div>
                <input type="checkbox" id={`my-modal-countrySelected`} className="modal-toggle" value="" />
                <label htmlFor={`my-modal-countrySelected`} className="modal">

                    <label className="" htmlFor="">
                        <div className="rounded-md bg-base-100 h-[95vh] w-[80vw] max-w-[80rem] overflow-y-auto overflow-x-hidden">
                            <div className='flex flex-col justify-center mt-5'>
                                <div className="w-[95%] flex justify-end items-center">
                                    <label htmlFor="my-modal-countrySelected" className="btn btn-sm btn-circle">✕</label>
                                </div>
                                <div className="flex flex-col justify-center items-center gap-5">
                                    <img className="h-[10rem] w-[20rem]" src={countrySelected.flags.png} alt="" />
                                    <p className="text-primary text-3xl">{countrySelected.name.common}</p>
                                </div>
                            </div>
                        </div>
                    </label>
                </label>
            </div>
        )
    }


    return null
}

export default ModalContrySelected