Template.subForumItem.helpers({
	subForum: function () {
		return subForums.findOne({_id: this._id})
	}
});

Template.subForumItem.events({
	'click paper-item': function () {
		var subForum = subForums.findOne({_id: this._id});
		var forum = Forums.findOne({_id: subForum.forumId});
		var options = {};
		options['forum'] = forum.name.replace(new RegExp(' ', 'g'), '-');
		options['subForum'] = subForum.name.replace(new RegExp(' ', 'g'), '-');

		Router.go('subForum', options);

	}
});

