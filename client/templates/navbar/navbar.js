Template.navbar.helpers({
	breadcrumb: function () {
		return Session.get('breadcrumb');
	}
});

Template.navbar.events({
	'click [data-action="toggleSearch"]': function (event) {
		$('#main paper-toolbar').toggleClass('search-active');
	}
});
