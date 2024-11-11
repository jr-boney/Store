import React from 'react'
import Image from "next/image"

const Layout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex min-h-screen'>
        <section className='bg-brand p-10'>
            <div>
                <Image src="/assets/icons/logo-full.svg"
                alt="logo"
                width={16}
                height={16}
                className="h-auto" />
                <div className='space-y-5 text-white'>
                    <h1 className='h1'>Manage your files the best way</h1>
                    <p className='body-1'>
                        Thisis aplace where you can store all your files

                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Layout