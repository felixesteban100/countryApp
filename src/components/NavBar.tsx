
function NavBar() {
    return (
        <div className="navbar bg-base-100 h-[7vh]">
            <div className="mx-auto w-[80%] flex flex-row gap-10">
                <div className="flex gap-2 items-center">
                    <div className="flex-none">
                        <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">Where in the world?</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar