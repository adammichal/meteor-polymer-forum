Meteor.startup(function () {
	if (Forums.find().count() === 0 && subForums.find().count() === 0) {
		var feedback = Forums.insert({
			name: 'Feedback and Support',
			icon: 'help'
		});

		var discussion = Forums.insert({
			name: 'Discussions',
			icon: 'forum'
		})

		subForums.insert({
			forumId: feedback,
			name: 'Bug Reports',
			icon: 'bug',
			description: 'Post any bugs or issues you are having related to the site'
		});

		subForums.insert({
			forumId: feedback,
			name: 'Join the Team',
			icon: 'account-multiple',
			description: 'Apply here to join the Team'
		});

		subForums.insert({
			forumId: discussion,
			name: 'Google+ Discussions',
			icon: 'google-plus',
			description: 'Discussion for the Google Plus'
		})

		subForums.insert({
			forumId: discussion,
			name: 'GooglePlay Discussions',
			icon: 'google-play',
			description: 'Discussion for the Google Play Store'
		})
	}



});
