
var updateGitHubUserData = function (id, username) {
	var user = Meteor.users.findOne({_id: id});

	if (user.services.github.lastUpdate == undefined || moment(user.services.github.lastUpdate).isBefore(moment().subtract(1, 'day'))) {
		var options = {
			headers: {
				"User-Agent": "HenriBeck"
			}
		};

		HTTP.get('https://api.github.com/users/' + username,options, function (err, res) {
			if (res.statusCode == 200) {
				var update = {};
				update['services.github.avatar'] = res.data.avatar_url;
				update['services.github.location'] = res.data.location;
				update['services.github.name'] = res.data.name;
				update['services.github.lastUpdate'] = new Date();
				Meteor.users.update({
					_id: id
				}, {
					$set: update
				})
			} else {
				throw new Meteor.Error(err)
			}
		})
	}
};

Accounts.onCreateUser(function (options, user) {
	return user;
});

Meteor.users.find().observeChanges({
	changed: function (id, doc) {
		if (doc.status && doc.status.online === true) {
			var user = Meteor.users.findOne({_id: id});
			updateGitHubUserData(id, user.services.github.username);
		}
	}
});