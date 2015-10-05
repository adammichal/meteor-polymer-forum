Meteor.publish('userDataSelf', function () {
	return Meteor.users.find({_id: this.userId}, {fields: {status: 1, services: 1}})
});

Meteor.publish('forums', function () {
	return Forums.find({});
});

Meteor.publish('subForums', function () {
	return subForums.find({});
});
