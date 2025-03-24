import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'

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
        array: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "Data Scientist", "Machine Learning"]
    },
    {
        filterType: "Salary",
        array: ["0-40k", "40k-100k", "100k-200k"]
    }
]


const FilterCard = () => {

    const [selectedValue, setSelectedValue] = useState("");
    const dispatch = useDispatch();

    const changeHandler = (value) => {
        setSelectedValue(value);
    }


    useEffect(() => {
        // console.log(selectedValue);
        dispatch(setSearchedQuery(selectedValue));
    }, [selectedValue])

    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />

            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                {
                    filterData.map((data, index) => (
                        <div key={index}>
                            <h1 className='font-bold text-lg'>{data.filterType}</h1>
                            {
                                data.array.map((item, idx) => {
                                    const itemId = `r${index - idx}`
                                    return (
                                        <div className='flex items-center spac-x-2 my-2' key={idx}>
                                            <RadioGroupItem value={item} id={itemId} />
                                            <Label htmlFor={itemId}>{item}</Label>
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
