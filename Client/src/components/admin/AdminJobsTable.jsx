import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminJobsTable = () => {


    const { searchCompanyByText } = useSelector(store => store.company);
    const { allAdminJobs } = useSelector(store => store.job);
    const navigate = useNavigate();

    const [filterJobs, setFilterJobs] = useState(allAdminJobs);

    useEffect(() => {
        const filteredJobs = allAdminJobs.length >= 0 && allAdminJobs.filter((job) => {
            if (!searchCompanyByText) {
                return true
            };
            return job?.companyName?.toLowerCase().includes(searchCompanyByText.toLowerCase())
        })

        setFilterJobs(filteredJobs);

    }, [allAdminJobs, searchCompanyByText])

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterJobs && filterJobs?.map((company) => (
                            <tr key={company._id}>

                                <TableCell>{company?.companyName}</TableCell>
                                <TableCell>{company.createdAt.slice("T")}</TableCell>
                                <TableCell className="text-right">
                                    <Popover>
                                        <PopoverTrigger className=" cursor-pointer">
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div onClick={() => navigate(`/admin/companies/${company._id}`)} className='flex items-center w-fit cursor-pointer gap-2'>
                                                <Edit2 className='w-4' />
                                                <span>Edit</span>
                                            </div>
                                        </PopoverContent>


                                    </Popover>
                                </TableCell>
                            </tr>
                        ))
                    }

                </TableBody>
            </Table>
        </div>
    )
}

export default AdminJobsTable;
