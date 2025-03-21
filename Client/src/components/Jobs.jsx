import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import FilterCard from './FilterCard'
import Job from './Job'
import { useSelector } from 'react-redux'


// const jobs = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10
// ]


function Jobs() {

    const { allJobs } = useSelector(state => state.job)

    return (
        <>
            <Navbar />
            <div className='px-[5%] mt-5'>
                <div className='flex gap-5'>
                    <div className='w-[20%]'>
                        <FilterCard />

                    </div>


                    {
                        allJobs.length <= 0 ? <span>No Jobs Found</span> :
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                    {
                                        allJobs.map((job) => (
                                            <div key={job._id}>
                                                <Job job={job} />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                    }

                </div>



            </div>



            <Footer />
        </>
    )
}

export default Jobs