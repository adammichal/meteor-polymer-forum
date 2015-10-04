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
