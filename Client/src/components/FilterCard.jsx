import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

// location
// salary
// job types

const filterData = [
    {
        filterType: "Location",
        array: ["Delhi", "Banglore", "Mumbai", "Ranchi", "Patna"]
    },
    {
        filterType: "Industry",
        array: ["Frontend Developer", "Banglore", "Mumbai", "Ranchi", "Patna"]
    },
    {
        filterType: "Salary",
        array: ["0-40k", "40k-100k", "100k-200k"]
    }
]


const FilterCard = () => {
    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />

            <RadioGroup>
                {
                    filterData.map((data, index) => (
                        <div key={index}>
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((item, index) => {
                                    return (
                                        <div className='flex items-center spac-x-2 my-2' key={index}>
                                            <RadioGroupItem value={item} />
                                            <Label>{item}</Label>
                                        </div>
                                    )

                                })
                            }
                        </div>
                    ))
                }
            </RadioGroup>



        </div>
    )
}

export default FilterCard
