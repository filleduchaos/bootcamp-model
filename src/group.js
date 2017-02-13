'use strict';

var Camper = require('./camper.js);
var BFA = require('./bfa.js');

class Group {
	constructor(id, bfa) {
	  this.id = id;
		this.memberList = [];
		this.setBFA(bfa);
	}
	
	setBFA(bfa) {
	  this.memberList[0] = bfa;
	  bfa.setGroupID(this.id);
	}
	
	add(camper) {
    if (!(camper instanceof BFA)) {
      if (!this.isMember(camper)) {
        this.memberList.push(camper);
        camper.setGroupID(this.id);
        return `${camper.getFullName()} successfully added to Group ${this.id}`;
      } else return `${camper.getFullName()} is already a member of Group ${this.id}`;
    } else return `Group ${this.id} already has a BFA`;
	}
	
	remove(camper) {
	  let index = this.memberList.indexOf(camper);
	  
    if(index > 0) {
	    this.memberList.splice(index, 1);
	    camper.setGroupID(0);
	    return `${camper.getFullName()} successfully removed from Group ${this.id}`;
    } else return `Cannot remove Group ${this.id}'s BFA`;
	}

	isMember(camper) {
    if(this.memberList.indexOf(camper) === -1) {
      return false;
    } else return true;
	}
	
	getBFAName() {
	  return this.memberList[0].getFullName();
	}
	
	getCamperNames() {
	  let names = '';
	  
	  for (var i = 1; i < this.memberList.length; i++) {
	    names += this.memberList[i].getFullName() + '\n';
	  }
	  
	  return names;
	}
	
	toString() {
	  return `Group ${this.id}:\n\nBFA: ${this.getBFAName()}\n\nMembers:\n${this.getCamperNames()}`;
	}
}class Group {
	constructor(id, bfa) {
	  this.id = id;
		this.memberList = [];
		this.setBFA(bfa);
	}
	
	setBFA(bfa) {
	  this.memberList[0] = bfa;
	  bfa.setGroupID(this.id);
	}
	
	add(camper) {
    if (!(camper instanceof BFA)) {
      if (!this.isMember(camper)) {
        this.memberList.push(camper);
        camper.setGroupID(this.id);
        return `${camper.getFullName()} successfully added to Group ${this.id}`;
      } else return `${camper.getFullName()} is already a member of Group ${this.id}`;
    } else return `Group ${this.id} already has a BFA`;
	}
	
	remove(camper) {
	  let index = this.memberList.indexOf(camper);
	  
    if(index > 0) {
	    this.memberList.splice(index, 1);
	    camper.setGroupID(0);
	    return `${camper.getFullName()} successfully removed from Group ${this.id}`;
    } else return `Cannot remove Group ${this.id}'s BFA`;
	}

	isMember(camper) {
    if(this.memberList.indexOf(camper) === -1) {
      return false;
    } else return true;
	}
	
	getBFAName() {
	  return this.memberList[0].getFullName();
	}
	
	getCamperNames() {
	  let names = '';
	  
	  for (var i = 1; i < this.memberList.length; i++) {
	    names += this.memberList[i].getFullName() + '\n';
	  }
	  
	  return names;
	}
	
	toString() {
	  return `Group ${this.id}:\n\n
      	BFA: ${this.getBFAName()}\n\n
      	Members:\n
      	${this.getCamperNames()}`;
	}
}