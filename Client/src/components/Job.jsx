import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 '>
            <div className='flex justify-between items-center'>
                <p className='text-sm text-gray-500'>2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon"><Bookmark /></Button>
            </div>

            <div className='flex gap-2 items-center my-2'>
                <Button>
                    <Avatar>
                        <AvatarImage src="data:image/png;base64,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" />

                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium text-lg'>Comapny name</h1>
                    <p className='text-sm text-gray-600'>India</p>
                </div>
            </div>

            <div className=''>
                <h1 className='font-bold text-lg my-2 '>Job Title</h1>
                <p className='text-sm text-gray-600'>Job Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates natus reprehenderit labore sint, id ad. In velit est doloremque saepe.</p>

            </div>

            <div className='flex items-center gap-2 mt-4'>
                <Badge className="text-blue-700 font-bold" variant="ghost">
                    12 positions
                </Badge>
                <Badge className="text-[#F83002] font-bold" variant="ghost">
                    Part time
                </Badge>
                <Badge className="text-[#7209b7] font-bold" variant="ghost">
                    24 LPA
                </Badge>

            </div>

            <div className='flex items-center gap-4 mt-4'>
                <Button variant="outline">Details</Button>
                <Button className="bg-[#7209b7]">Save For Later</Button>
            </div>

        </div>
    )
}

export default Job
