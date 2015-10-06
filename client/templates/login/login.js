Template.login.events({
	'click .github': function (event) {
		Meteor.loginWithGithub();
	}
});