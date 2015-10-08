subForums = new Meteor.Collection('subForums');

subForums.attachSchema(new SimpleSchema({
	forumId: {
		type: String,
		label: 'Forum Id'
	},
	name: {
		type: String,
		label: 'Name'
	},
	icon: {
		type: String,
		label: 'Icon'
	},
	description: {
		type: String,
		max: 300,
		label: 'Description'
	}
}));

Meteor.methods({
	addSubForum: function (forumId, name, icon, description) {
		if (!Roles.userIsInRole(this.userId, forumConfig.roles.addSubForumRoles)) {
			throw new Meteor.Error(403, "You're not autorized!");
		} else {
			subForums.insert({
				name: name,
				icon: icon,
				description: description,
				forumId: forumId
			})
		}
	},
	editSubForum: function (id,update) {
		if (!Roles.userIsInRole(this.userId, forumConfig.roles.editSubForumRoles)) {
			throw new Meteor.Error(403, "You're not autorized!");
		} else {
			subForums.update({
				_id: id
			}, {
				$set: update
			})
		}
	},
	deleteSubForum: function (id) {
		if (!Roles.userIsInRole(this.userId, forumConfig.roles.deleteSubForumRoles)) {
			throw new Meteor.Error(403, "You're not autorized!");
		} else {
			subForums.remove({_id: id})
		}
	}
});