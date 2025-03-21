import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'

const CompaniesTable = () => {


    const { companies } = useSelector(store => store.company);

    return (
        <div>
            <Table>
                <TableCaption>A list of your recent register companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        companies && companies?.map((company) => (
                            <tr key={company._id}>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage src={company?.logo || "logo"} alt="logo" />
                                    </Avatar>
                                </TableCell>
                                <TableCell>{company?.companyName}</TableCell>
                                <TableCell>{company.createdAt.slice("T")}</TableCell>
                                <TableCell className="text-right">
                                    <Popover>
                                        <PopoverTrigger className=" cursor-pointer">
                                            <MoreHorizontal />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div className='flex items-center w-fit cursor-pointer gap-2'>
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

export default CompaniesTable;
