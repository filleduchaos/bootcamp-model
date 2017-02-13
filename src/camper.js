'use strict';

class Camper {
	constructor(firstName, lastName, email, slackID) {
	  this.name = [firstName, lastName];
		this.email = email;
		this.slackID = slackID;
		this.groupID = 0;
	}
	
	getFullName() {
	  return this.name.join(' ');
	}
    
	getFirstName() {
	  return this.name[0];
	}
	
	setFirstName(firstName) {
	  this.name[0] = firstName;
	}
	
	getLastName() {
	  return this.name[1];
	}
	
	setLastName(lastName) {
	  this.name[1] = lastName;
	}

	getEmail() {
	  return this.email;
	}
	
	setEmail (email) {
	  this.email = email;
	}

	getSlackID() {
	  return this.slackID;
	}
	
	setSlackID(slackID) {
	  this.slackID = slackID;
	}
	
	getGroupID() {
	  return this.groupID;
	}
	
	setGroupID(groupID) {
	  this.groupID = groupID;
	}
	
	toString() {
	  return `Name: ${this.getFullName()}\n
      	Email: ${this.email}\n
      	Slack ID: ${this.slackID}\n
      	Group: ${this.groupID}\n`;
	}
}

module.exports = Camper;