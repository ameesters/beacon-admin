Meteor.subscribe('requests');

// mimics the php long2ip function, borrowed from php.js:
UI.registerHelper('long2ip', function(context, options) {
	return [context >>> 24, context >>> 16 & 0xFF, context >>> 8 & 0xFF, context & 0xFF].join('.');
});

Template.monitor.helpers({
    urls: function() {
        return realtimeLog.find();
    }
});

Template.monitor.rerendered = function () {
  console.log("scrolltop is " + $('#traffic').scrollTop());
  $('#traffic').scrollTop($('#traffic').prop("scrollHeight"));
};