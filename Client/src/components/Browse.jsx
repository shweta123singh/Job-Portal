import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Job from './Job'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import useGetAllJobs from '@/hooks/useGetAllJobs'


// const jobs = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// ]

const Browse = () => {

    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job)

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        }
    }, [])

    return (
        <>

            <Navbar />

            <div className='px-[5%] md:px-[8%] w-full my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({allJobs.length})</h1>

                {
                    allJobs.length <= 0 &&
                    <div className='text-gray-500 hover:text-gray-400 text-xl flex justify-center'>
                        <p className='text-center'>No Jobs Found!</p>
                    </div>
                }

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
                    {
                        allJobs.map((job) => {
                            return (
                                <Job key={job._id} job={job} />
                            )
                        })
                    }
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Browse
