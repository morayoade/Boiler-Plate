/* eslint-disable react/jsx-filename-extension */
import React, { FC } from 'react'
import './Header.scss'

const Header:FC = () => {
  return (
    <div className="container-fluid p-0 d-none d-md-block">
        <div className="heading px-4 py-3">
           <div className="row justify-content-between">
          <div className="col-2">
          <text className="headding-greetings">Hello,</text>
          <h3 className="heading-Name pt-1">Kwik Logistics</h3>
          </div>
        <div className="col-7 ml-4">
          <input className="searchField form-control" type="search" />
        </div>
        <div className="col-2 heading-notification">
          <text className="">mo</text>
        </div>
     </div>
      </div>

    </div>
  )
}

export default Header
