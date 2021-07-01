import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Login } from './pages/Login'
import { Reg } from './pages/Reg'
import { Welcome } from './pages/Welcome'
import { Chat } from './pages/Chat'

export const Router = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Welcome />
      </Route>
      <Route path='/login' exact>
        <Login />
      </Route>
      <Route path='/reg' exact>
        <Reg />
      </Route>
      <Route path='/chat/:id' exact>
        <Chat />
      </Route>
      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  )
}
