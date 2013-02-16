/*global require */

require(['class/observer', 'class/blogger', 'class/person'],
  function (observer, blogger, person) {
    'use strict';

    observer.make(blogger);

    blogger.addSubscriber(person.readNews);
    blogger.writeNews({
      title: 'Test blog post',
      content: 'Test blog post content'
    }).informSubscribers();
  });
