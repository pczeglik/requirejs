/*global define */

define(function () {
  'use strict';

  var person = {
      readNews: function (news) {
        console.log('I have read a news: ' + news.title);
        person.shareNews(news);
      },
      shareNews: function (news) {
        console.log('Hi folks, You definitely should read that news: ' + news.title);
      }
    };

  return person;
});