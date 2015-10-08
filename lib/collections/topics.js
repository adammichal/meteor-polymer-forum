Topics = new Meteor.Collection('Topics');

Topics.attachSchema(new SimpleSchema({
	subForumId: {
		type: String
	},
	title: {
		type: String
	},
	created: {
		type: Date,
		defaultValue: new Date()
	},
	createdBy: {
		type: String
	},
	text: {
		type: String
	},
	locked: {
		type: Boolean,
		defaultValue: false
	},
	pinned: {
		type: Boolean,
		defaultValue: false
	},
	views: {
		type: Number,
		defaultValue: 0
	}
}));
