Session.setDefault('pageTitle', 'Home');

Tracker.autorun(function () {
	var page = Session.get("pageTitle");
	document.title = page + ' | ' + forumConfig.title;
});
