(function() {
  'use strict';

  var Camper = require('../src/camper.js');
  var BFA = require('../src/bfa.js');
  var Group = require('../src/group.js');

  var camper1 = new Camper("John", "Smith", "jsmith@gmail.com", "john_smith");
  var camper2 = new Camper("Yewande", "Adekaiyoja", "yadekaiyoja@gmail.com", "yewandex");

  var groupCount = 1;

  var bfa1 = new BFA("Jane", "Doe", "janedoe@andela.com", "jane", groupCount);
  groupCount++;
  var bfa2 = new BFA("Alex", "Terfa", "terfal@andela.com", "terfal", groupCount);

  describe("Camper Class: Create a camper, modify its attributes", function() {

    it("The camper should be a type of `object`, and an instance of the `Camper` class", function() {
      expect(typeof camper1).toEqual(typeof {});
      expect(camper1 instanceof Camper).toBeTruthy();
    });

    it("The camper should be in group 0 on creation", function() {
      expect(camper1.getGroupID()).toEqual(0);
    });

    it("The name, email and slackID should be properties of the camper", function() {
      expect(camper1.getFullName()).toBe('John Smith');
      expect(camper1.getEmail()).toBe('jsmith@gmail.com');
      expect(camper1.getSlackID()).toBe('john_smith');
    });

    it("The camper should be able to change its attributes via methods", function() {
      camper1.setSlackID('jsmith');
      expect(camper1.getSlackID()).toBe('jsmith');
    });

  });

  describe("BFA Class: Inheritance and polymorphism", function() {

    it("The bfa should be a type of `object`, and an instance of both `Camper` and `BFA`", function() {
      expect(typeof bfa1).toEqual(typeof {});
      expect(bfa1 instanceof Camper).toBeTruthy();
      expect(bfa1 instanceof BFA).toBeTruthy();
    });

    it("should be able to change its attributes via Camper methods", function() {
      bfa1.setEmail('jane_doe@andela.com');
      expect(bfa1.getEmail()).toBe('jane_doe@andela.com');
    });

  });

  describe("BFA and Group Class: Functionality", function() {

    it("should be able to add only unassigned campers to a group", function() {
      expect(bfa1.addToGroup(camper1)).toBe('John Smith successfully added to Group 1');
      expect(bfa2.addToGroup(camper2)).toBe('Yewande Adekaiyoja successfully added to Group 2');
      expect(bfa1.addToGroup(camper2)).toBe('Not authorized to remove Yewande Adekaiyoja from Group 2'); 
    });
	
    it("should be able to remove only members of their group", function() {
      bfa1.addToGroup(camper1);
      expect(bfa2.removeFromGroup(camper1)).toBe('Not authorized to remove John Smith from Group 1');
    });

  }); 

})();
