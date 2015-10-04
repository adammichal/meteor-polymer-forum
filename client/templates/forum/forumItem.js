Template.forumItem.helpers({
	forum: function () {
		return Forums.findOne({_id: this._id});
	}
});

Template.forumItem.events({
	'click paper-item': function () {
		var forum = Forums.findOne({_id: this._id});
		var options = {};
		options['forum'] = forum.name.replace(new RegExp(' ', 'g'), '-');

		Router.go('forumName', options);

	}
});

