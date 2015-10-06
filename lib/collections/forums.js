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

Meteor.methods({
	addForum: function (name, icon) {
		if (!Roles.userIsInRole(this.userId, forumConfig.forum.addForumRoles)) {
			throw new Meteor.Error(403, "You're not autorized!");
		} else {
			Forums.insert({
				name: name,
				icon: icon
			})
		}
	},
	editForum: function (id,name, icon) {
		if (!Roles.userIsInRole(this.userId, forumConfig.forum.editForumRoles)) {
			throw new Meteor.Error(403, "You're not autorized!");
		} else {
			Forums.update({
				_id: id
			}, {
				$set: {
					name: name,
					icon: icon
				}
			})
		}
	},
	deleteForum: function (id) {
		if (!Roles.userIsInRole(this.userId, forumConfig.forum.deleteForumRoles)) {
			throw new Meteor.Error(403, "You're not autorized!");
		} else {
			Forums.remove({_id: id})
		}
	}
});