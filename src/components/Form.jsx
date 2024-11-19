function Form() {

    return (
        <div className="w-full  flex flex-col items-center justify-center rounded-md ">
            <form className="flex flex-col w-full mt-5 p-5  sm:w-1/4 gap-4 bg-white shadow-md rounded-md transition-all duration-100">
                <div>
                    <h2 className="mt-5 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Register for Consulting!
                    </h2>
                </div>
                {/* Name */}
                <div className="flex flex-col">
                    <label className="block text-sm/6 font-medium text-gray-900" htmlFor="p-name" >Name</label>
                    <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm/6 outline-none" type="text" id="p-name" />
                </div>
                {/* Age */}
                <div className="flex flex-col">
                    <label className="block text-sm/6 font-medium text-gray-900" htmlFor="p-age">Age</label>
                    <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm/6 outline-none" type="text" id="p-age" />
                </div>
                {/* file */}
                <div className="flex gap-x-3 items-center">
                    <label className="block text-sm/6 font-medium text-gray-900" htmlFor="file">File</label>
                    <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-400 sm:text-sm/6 outline-none" type="file" id="p-file" />
                </div>
                {/* Submit */}
                <div className="flex flex-col">
                    <input className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600" type="submit" />
                </div>
            </form>
        </div>)
}
export default Form