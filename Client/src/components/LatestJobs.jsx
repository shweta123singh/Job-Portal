import React from 'react'
import LatestJobCards from './LatestJobCards';


const random_jobs = [1, 2, 3, 4, 5, 6, 7, 8];

function LatestJobs() {


    return (
        <div className='px-[5%] w-full my-20'>
            <h1 className='text-xl sm:text-3xl lg:text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top</span> Job Openings</h1>
            {/* cards for job openings */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5'>
                {
                    random_jobs.slice(0, 7).map((item, index) => (
                        <LatestJobCards />
                    ))
                }
            </div>



        </div>
    )
}

export default LatestJobs