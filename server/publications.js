Meteor.publish('forums', function () {
	return Forums.find({});
});

Meteor.publish('subForums', function () {
	return subForums.find({});
});
