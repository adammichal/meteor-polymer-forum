Template.sideBar.helpers({
	forum: function () {
		return Forums.find({})
	},
	subForum: function () {
		return subForums.find({forumId: this._id})
	}
});

Template.sideBar.events({
	'click paper-item[data-route]': function (event) {
		var route = $(event.currentTarget).data('route');
		var options = {};
		if (route == 'forum') {
			options['forum'] = this.name.replace(new RegExp(' ', 'g'), '-');
		} else if (route == 'subForum') {
			options['forum'] = Forums.findOne({_id: this.forumId}).name.replace(new RegExp(' ', 'g'), '-');
			options['subForum'] = this.name.replace(new RegExp(' ', 'g'), '-');
		}
		console.log(options);
		Router.go(route, options)
	},
	'click [data-action="logout"]': function(event) {
		Meteor.logout();
	}
});