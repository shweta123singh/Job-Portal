import React from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import Job from './Job'


const jobs = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

const Browse = () => {
    return (
        <>

            <Navbar />

            <div className='px-[5%] md:px-[8%] w-full my-10'>
                <h1 className='font-bold text-xl my-10'>Search Results ({jobs.length})</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 '>
                    {
                        jobs.map((job, index) => {
                            return (
                                <Job />
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
