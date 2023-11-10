import { SidebarComponent } from '@/utils/import.utils'
import { Container } from 'postcss'
import React from 'react'

const Dashboard = () => {
  return (

    <div className='w-full h-full '>
      <div className="w-[260px] h-full">
      <SidebarComponent/>
      </div>
    </div>
  )
}

export default Dashboard