import { Meteor } from 'meteor/meteor'
import { UserMethods } from './methods/UserMethods'

Meteor.methods({ ...UserMethods })
