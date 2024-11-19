import { useSave } from "../hooks/useSave"



export const Dashboard = () => {
    const { saveSate } = useSave()
    const userData = saveSate
    console.log(userData)

    return <>
        <table className="w-3/4 p-6 m-auto mt-5 text-center bg-blue-100 shadow-md">
            <thead>
                <tr className="border-b-2 border-gray-400">
                    <th>
                        Name
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                        File
                    </th>
                </tr>
            </thead>
            {
                saveSate.map((user, index) => (<tr key={index} className="border-b-2 even:border-gray-300">
                    <td>{user?.name}</td>
                    <td>{user?.age}</td>
                    <td>{user?.age}</td>
                </tr>))
            }
        </table>
    </>
}