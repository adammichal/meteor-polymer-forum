Forums = new Meteor.Collection('Forums');

Forums.attachSchema(new SimpleSchema({
	name: {
		type: String,
		label: 'Name'
	},
	icon: {
		type: String,
		label: 'Icon'
	}
}));

if (Meteor.isServer) {
	if (Forums.find().count() === 0) {
		Forums.insert({
			name: 'Feedback and Support',
			icon: 'help'
		});

		Forums.insert({
			name: 'Discussions',
			icon: 'forum'
		})
	}
}