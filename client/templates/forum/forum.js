Template.forum.helpers({
	subForum: function () {
		return subForums.find({forumId: this._id});
	}
});

Template.forum.events({
	//add your events here
});

Template.forum.onCreated(function () {
	//add your statement here
});

Template.forum.onRendered(function () {
	//add your statement here
});

Template.forum.onDestroyed(function () {
	//add your statement here
});

