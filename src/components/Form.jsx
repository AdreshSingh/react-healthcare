import { useState } from "react"
import { useSave } from '../hooks/useSave.js'
import { redirect } from "react-router-dom";

function Form() {

    // custom hooks to save creditional
    const { saveSate, setSaveState } = useSave()

    // holding user details
    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [file, setFile] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ name, age, file })
        setSaveState([...saveSate, { name, age, file }])
        console.log(saveSate)
        return redirect("/")
    }
    return (
        <div className="flex flex-col items-center justify-center w-full m-5 rounded-md">
            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4 p-5 transition-all duration-100 bg-white rounded-md shadow-md sm:w-2/5">
                <div>
                    <h2 className="mt-5 font-bold tracking-tight text-center text-gray-900 text-2xl/9">
                        Register for Consulting!
                    </h2>
                </div>
                {/* Name */}
                <div className="flex flex-col">
                    <label className="block font-medium text-gray-900 text-sm/6" htmlFor="p-name" >Name</label>
                    <input onInput={(e) => (setName(e.target.value))} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm/6 outline-none indent-1 " type="text" id="p-name" />
                </div>
                {/* Age */}
                <div className="flex flex-col">
                    <label className="block font-medium text-gray-900 text-sm/6" htmlFor="p-age">Age</label>
                    <input onInput={(e) => (setAge(e.target.value))} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm/6 outline-none indent-1" type="text" id="p-age" />
                </div>
                {/* file */}
                <div className="flex items-center gap-x-3">
                    <label className="block font-medium text-gray-900 text-sm/6" htmlFor="file">File</label>
                    <input onChange={(e) => (setFile(e.target.value))} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-400 sm:text-sm/6 outline-none indent-1" type="file" id="p-file" />
                </div>
                {/* Submit */}
                <div className="flex flex-col">
                    <input className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" type="submit" />
                </div>
            </form>
        </div>)
}
export default Form