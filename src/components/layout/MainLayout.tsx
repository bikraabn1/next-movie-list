import React from 'react'
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar'
import { AppSidebar } from './AppSidebar'
import { Input } from '../ui/input'


interface Mainlayout {
    children: React.ReactNode
}

const Mainlayout = (props: Mainlayout) => {
    return (
        <div className='max-w-screen overflow-hidden'>
            <SidebarProvider>
                <AppSidebar />
                <main className='w-full mb-10'>
                    <nav className='flex items-center w-full py-5 px-2'>
                        <SidebarTrigger />
                        <h1 className='text-2xl font-semibold w-fit ms-5'>My Movie List</h1>
                    </nav>
                    <div className='px-5'>
                        {props.children}
                    </div>
                </main>
            </SidebarProvider>
        </div>
    )
}

export default Mainlayout
