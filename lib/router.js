
var loginRequired = function (pause) {
	if (Meteor.loggingIn()) {
		this.render('loading');
		return pause()
	} else if (!Meteor.userId()) {
		this.render('login');
		return pause();
	}
};

Router.configure({
	layoutTemplate: 'mainLayout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function () {
		return [
			subs.subscribe('forums'),
			subs.subscribe('subForums')
		];
	}
});

Router.route('/', {
	name: 'home'
});

var chevron = '<i class="mdi mdi-chevron-right"></i>';

Router.route('/forum', {
	name: 'forum',
	onBeforeAction: function () {
		var breadcrumb = '<a href="/forum">Forum</a>';
		Session.set('breadcrumb', breadcrumb);
		this.next();
	}
});

Router.route('/forum/:forum', {
	name: 'forumName',
	onBeforeAction: function () {
		var forum = Forums.findOne({name: this.params.forum.replace(new RegExp('-', 'g'), ' ')});
		console.log(forum);
		var breadcrumb = '<a href="/forum">Forum</a>' +  chevron + '<a href="/forum/' + this.params.forum +'">' + forum.name +'</a>';
		Session.set('breadcrumb', breadcrumb);
		this.next();
	}
});

Router.route('/forum/:forum/:subForum', {
	name: 'subForum',
	onBeforeAction: function () {
		var forum = Forums.findOne({name: this.params.forum.replace(new RegExp('-', 'g'), ' ')});
		var subForum = subForums.findOne({name: this.params.subForum.replace(new RegExp('-', 'g'), ' ')});
		var breadcrumb = '<a href="/forum">Forum</a>' +  chevron + '<a href="/forum/' + this.params.forum +'">' + forum.name +'</a>';
		breadcrumb += chevron + '<a href="/forum/' + this.params.forum +'/' + this.params.subForum +'">' + subForum.name +'</a>';
		Session.set('breadcrumb', breadcrumb);
		this.next();
	}
});

Router.route('/settings', {
	name: 'settings',
	onBeforeAction: function () {
		var breadcrumb = '<a href="/settings">Settings</a>';
		Session.set('breadcrumb', breadcrumb);
		this.next();
	}
});

Router.route('/help', {
	name: 'help',
	onBeforeAction: function () {
		var breadcrumb = '<a href="/help">Help & Feedback</a>';
		Session.set('breadcrumb', breadcrumb);
		this.next();
	}
});


