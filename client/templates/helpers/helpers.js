Template.registerHelper('forumConfig', function () {
	return forumConfig;
});

Template.registerHelper('userCan', function (action) {
	return Roles.userIsInRole(Meteor.userId(), forumConfig.roles[action])
});
