import {Outlet} from 'react-router-dom';

import React from 'react'

const AuthLayout = () => {
  return (
    <>
      <h1>Authlayout</h1>

      <Outlet></Outlet>
    </>
  )
}

export default AuthLayout
