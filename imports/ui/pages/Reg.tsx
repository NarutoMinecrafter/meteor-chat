import React from 'react'
import { Meteor } from 'meteor/meteor'
import { useFormik } from 'formik'
import { createUser } from '../../../server/methods/UserMethods'
import { User } from '/imports/api/UserCollection'

export const Reg = () => {
  const formik = useFormik({
    initialValues: { nickname: 'f', email: 'g@f', password: 'h' },
    onSubmit: async (values: createUser) => {
      Meteor.call('createUser', values, (error: string, response: string) => {
        if (error) {
          console.log('Error: ' + error)
        } else {
          console.log(response)
        }
      })
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input type='text' value={formik.values.nickname} onChange={formik.handleChange} />
        <input type='email' value={formik.values.email} onChange={formik.handleChange} />
        <input type='password' value={formik.values.password} onChange={formik.handleChange} />
        <button>Submit</button>
      </form>
      <button
        onClick={() =>
          Meteor.call('getUsers', {}, (error: string, response: User) => {
            if (error) {
              console.log('Error: ' + error)
            } else {
              console.log(response)
            }
          })
        }
      >
        Get users
      </button>
      <button
        onClick={() =>
          Meteor.call('clearUserCollection', {}, (error: string, response: User) => {
            if (error) {
              console.log('Error: ' + error)
            } else {
              console.log(response)
            }
          })
        }
      >
        Clear user collection
      </button>
    </div>
  )
}
