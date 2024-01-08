import React from 'react'
import { Outlet } from 'react-router-dom'
import Head from '../header/header'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Head />
      </header>
      <main className="flex-grow flex justify-center items-center h-full">
        <Outlet />
      </main>
      <footer className="p-3 text-center bg-[#ffc244] text-[#00A082] h-[64px] font-semibold text-xl">
        <a href="https://github.com/isin75/for-glovo">by ISIN</a>
      </footer>
    </div>
  )
}

export default Layout
