import React from 'react'
import { Aboutus } from './components/Aboutus'
import { Bestselling } from './components/Bestselling'
import { Categories } from './components/Categories'
import { Customers } from './components/Customers'
import { Footer } from './components/Footer'
import { Thumbnail } from './components/Thumbnail'
import { Topbar } from './components/Topbar'

export const App = () => {
  return (
    <div>
      <Topbar />
      <Thumbnail />
      <Bestselling />
      <Aboutus />
      <Categories />
      <Customers />
      <Footer />
    </div>
  )
}