if (Meteor.isClient) {

// Router config

	Router.configure({
		layoutTemplate: 'mainLayout',
		loadingTemplate: 'loading',
		notFoundTemplate: 'notFound',
		waitOn: function () {
			return [
				subs.subscribe('userDataSelf'),
				subs.subscribe('forums'),
				subs.subscribe('subForums')
			];
		},
		onBeforeAction: function (pause) {
			if (Meteor.loggingIn()) {
				this.layout('loginLayout');
				this.render('loading')
			} else if (!Meteor.userId()) {
				this.layout('loginLayout');
				this.render('login');
			} else {
				this.next();
			}
		}
	});

// Routes

	Router.route('/', {
		name: 'home'
	});

	var chevron = '<i class="mdi mdi-chevron-right"></i>';

	Router.route('/forum', {
		name: 'forumHome',
		onBeforeAction: function () {
			var breadcrumb = '<a href="/forum">Forum</a>';
			Session.set('breadcrumb', breadcrumb);
			Session.set('pageTitle','Forum');
			this.next();
		}
	});

	Router.route('/forum/:forum', {
		name: 'forum',
		data: function () {
			return Forums.findOne({name: this.params.forum.replace(new RegExp('-', 'g'), ' ')});
		},
		onBeforeAction: function () {
			var forum = Forums.findOne({name: this.params.forum.replace(new RegExp('-', 'g'), ' ')});
			console.log(forum);
			var breadcrumb = '<a href="/forum">Forum</a>' +  chevron + '<a href="/forum/' + this.params.forum +'">' + forum.name +'</a>';
			Session.set('breadcrumb', breadcrumb);
			Session.set('pageTitle', forum.name + ' Forum');
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
			Session.set('pageTitle', subForum.name + ' Forum');
			this.next();
		}
	});

	Router.route('/settings', {
		name: 'settings',
		onBeforeAction: function () {
			var breadcrumb = '<a href="/settings">Settings</a>';
			Session.set('breadcrumb', breadcrumb);
			Session.set('pageTitle', 'Settings');
			this.next();
		}
	});

	Router.route('/help', {
		name: 'help',
		onBeforeAction: function () {
			var breadcrumb = '<a href="/help">Help & Feedback</a>';
			Session.set('breadcrumb', breadcrumb);
			Session.set('pageTitle', 'Help & Feedback');
			this.next();
		}
	});
}



