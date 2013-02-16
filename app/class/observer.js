/*global define */

define(function () {
  'use strict';

  var Observer = {
    addSubscriber: function (callback) {
      if (!this.subscribers[callback]) {
        this.subscribers.push(callback);
      }
    },
    removeSubscribers: function (callback) {
      for (var i = 0, j = this.subscribers.length; i < j; i += 1) {
        if (this.subscribers[i] === callback) {
          delete(this.subscribers[i]);
          return;
        }
      }
    },
    publish: function (what) {
      for (var i = 0, j = this.subscribers.length; i < j; i += 1) {
        if (typeof this.subscribers[i] === 'function') {
          this.subscribers[i](what);
        }
      }
    },
    make: function (o) {
      for (var key in this) {
        if (this.hasOwnProperty(key)) {
          o[key] = this[key];
        }
      }
      o.subscribers = [];
    }
  };

  return Observer;
});