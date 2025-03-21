import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux';



function LatestJobs() {

    const { allJobs } = useSelector(state => state.job);


    return (
        <div className='px-[5%] w-full my-20'>
            <h1 className='text-xl sm:text-3xl lg:text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top</span> Job Openings</h1>
            {/* cards for job openings */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5'>
                {
                    allJobs?.slice(0, 7).map((job, index) => (
                        <LatestJobCards key={job._id} job={job} />
                    ))
                }
            </div>



        </div>
    )
}

export default LatestJobs