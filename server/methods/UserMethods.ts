import { UserCollection } from '../../imports/api/UserCollection'

export interface createUser {
  nickname: string
  email: string
  password: string
}

export const UserMethods = {
  createUser({ nickname, email, password }: createUser) {
    UserCollection.insert({ nickname, email, password, createdAt: new Date() })

    const message = 'The user has been created successfully!'

    return message
  },
  getUsers() {
    return UserCollection.find().fetch()
  },
  clearUserCollection() {
    UserCollection.remove({})

    const message = 'The collection has been successfully cleared!'

    return message
  }
}
