import React from 'react'
import adminLayout from '../components/Layout/admin'
import Sidebar from './Sidebar'

type Props = {}

const AdminPage = (props: Props) => {
  return (
    <div className="min-h-full">
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" />
              </div>
              <Sidebar />
            </div>
          </div>
        </div>

        <div className="md:hidden" id="mobile-menu">
          <Sidebar />
        </div>
      </nav>
        {/* <Outlet/> */}
    </div>
  )
}

AdminPage.Layout = adminLayout
export default AdminPage