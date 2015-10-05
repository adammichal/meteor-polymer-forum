Template.forumHome.helpers({
	forums: function () {
		return Forums.find({});
	},
	subForum: function () {
		return subForums.find({forumId: this._id})
	}
});

Template.forumHome.events({
	'click header': function () {
		var forumId = this._id;

		$('[data-forumId="' +forumId+'"] .chevron').toggleClass('closed');
	}
});

