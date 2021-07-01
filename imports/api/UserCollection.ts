import { Mongo } from 'meteor/mongo'

export interface User {
  _id?: string
  nickname: string
  email: string
  password: string
  createdAt: Date
}

export const UserCollection = new Mongo.Collection<User>('user')
