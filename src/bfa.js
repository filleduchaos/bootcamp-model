'use strict';

var Camper = require('./camper.js');
var Group = require('./group.js');

class BFA extends Camper {
  constructor(firstName, lastName, email, slackID, groupID) {
    super(firstName, lastName, email, slackID);
    this.group = new Group(groupID, this);
  }
  
  addToGroup(camper) {
    if(camper instanceof Camper) {
      if (camper.getGroupID() === 0) {
        return this.group.add(camper);
      } else if (camper.getGroupID() === this.groupID) {
        return `${camper.getFullName()} is already part of Group ${this.groupID}`;
      } else return `Not authorized to remove ${camper.getFullName()} from Group ${camper.getGroupID()}`;
    } else return 'Argument is not a Camper.';
  }
  
  removeFromGroup(camper) {
    if(camper instanceof Camper) {
      if (camper.getGroupID() === this.groupID) {
        return this.group.remove(camper);
      } else if (camper.getGroupID() === 0) {
        return `${camper.getFullName()} is not a member of any groups`;
      } else return `Not authorized to remove ${camper.getFullName()} from Group ${camper.getGroupID()}`;
    } else return 'Argument is not a Camper.';
  }
  
  toString() {
    return super.toString() + `BFA for Group ${this.groupID}\n`;
  }
}

module.exports = BFA;
