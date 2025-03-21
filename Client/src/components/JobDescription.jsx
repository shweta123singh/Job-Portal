import React, { useEffect } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { JOB_API_END_POINT } from '@/utils/constant'
import { setSingleJob } from '@/redux/jobSlice'

const JobDescription = () => {

  const dispatch = useDispatch();
  const { singleJob } = useSelector(state => state.job)
  const { user } = useSelector(state => state.auth)


  const params = useParams();
  const jobId = params.id;

  useEffect(() => {
    const fetchSingleJobDescription = async () => {
      try {
        const response = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true
        });
        if (response.data.success) {
          dispatch(setSingleJob(response.data.job));
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchSingleJobDescription();
  }, [jobId, dispatch, user?._id])



  const isApplied = singleJob?.applications?.some(application => application.applicant === user._id) || false;

  return (
    <div className='px-[6%] my-10'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='font-bold text-xl'>{singleJob?.title}</h1>
          <div className='flex items-center gap-2 mt-4'>
            <Badge className="text-blue-700 font-bold" variant="ghost">
              {singleJob?.position} positions
            </Badge>
            <Badge className="text-[#F83002] font-bold" variant="ghost">
              {singleJob?.jobType} position
            </Badge>
            <Badge className="text-[#7209b7] font-bold" variant="ghost">
              {singleJob?.salary} LPA
            </Badge>
          </div>
        </div>
        <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f08ad] cursor-pointer'} `}>
          {
            isApplied ? 'Applied' : 'Apply Now'
          }
        </Button>
      </div>
      <div className=''>
        <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
      </div>
      <div className='my-4'>
        <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singleJob?.title}</span></h1>
        <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singleJob?.location}</span></h1>
        <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'> {singleJob?.description} </span></h1>
        <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singleJob?.experience} yrs</span></h1>
        <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singleJob?.salary} LPA</span></h1>
        <h1 className='font-bold my-1'>Total Applicaants: <span className='pl-4 font-normal text-gray-800'>{singleJob?.applications?.length}</span></h1>
        <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singleJob.createdAt.split("T")[0]}</span></h1>
      </div>





    </div>
  )
}

export default JobDescription
