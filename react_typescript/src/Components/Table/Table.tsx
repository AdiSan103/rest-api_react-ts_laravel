import React from 'react'

type Props = {
    items:any;
}

const Table = ({items}: Props) => {
    // console.log(items.activities);
    
    return  (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Color
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Active (0), Tidak (1)
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(items).map((item,key) => {
                    return (
                        <tr key={key} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                            <td className="px-6 py-4">
                                {key + 1}
                            </td>
                            <td className="px-6 py-4">
                                {(items.activities[key].title)}
                            </td>
                            <td className="px-6 py-4">
                                {(items.activities[key].description)}
                            </td>
                            <td className="px-6 py-4">
                                {(items.activities[key].active)}
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Edit</a>
                                <a href="#" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Active</a>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}

export default Table;