import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Roles } from 'meteor/alanning:roles';

import './main.html';

Template.registerHelper('isAdmin', () => {
  return Roles.userIsInRole(Meteor.userId(), 'admin');
});

Template.registerHelper('isBorrower', () => {
  return Roles.userIsInRole(Meteor.userId(), 'borrower');
});

Template.registerHelper('isLender', () => {
  return Roles.userIsInRole(Meteor.userId(), 'lender');
});

Template.dashboard.helpers({
  loans() {
    // Fetch loans based on user role or other criteria
    return Loans.find();
  },
});