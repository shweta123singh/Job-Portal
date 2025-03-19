import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import FilterCard from './FilterCard'
import Job from './Job'


const jobs = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]


function Jobs() {
    return (
        <>
            <Navbar />
            <div className='px-[5%] mt-5'>
                <div className='flex gap-5'>
                    <div className='w-[20%]'>
                        <FilterCard />

                    </div>


                    {
                        jobs.length <= 0 ? <span>No Jobs Found</span> :
                            <div className='flex-1 h-[88vh] overflow-y-auto pb-5'>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                    {
                                        jobs.map((job, index) => (
                                            <div>
                                                <Job key={index} />
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