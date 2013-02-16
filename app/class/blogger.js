/*global define */

define(function () {
	'use strict';

	var blogger = {
			news: {
				title: '',
				content: ''
			},
			writeNews: function (news) {
				blogger.news.title = news.title;
				blogger.news.content = news.content;
				return this;
			},
			informSubscribers: function () {
				blogger.publish(blogger.news);
			}
		};
	return blogger;
});