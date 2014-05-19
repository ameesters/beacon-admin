Meteor.publish('requests', function() {
	return realtimeLog.find();
});