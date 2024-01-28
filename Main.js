import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';

Meteor.startup(() => {
  Meteor.roles.addRoles(['admin', 'borrower', 'lender']);


  if (!Meteor.users.findOne({ username: 'admin' })) {
    const adminId = Accounts.createUser({
      username: 'admin',
      email: 'admin@example.com',
      password: 'admin123',
    });
    Roles.addUsersToRoles(adminId, 'admin');
  }
});