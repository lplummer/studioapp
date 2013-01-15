Sessions = new Meteor.Collection("sessions");

if (Meteor.isClient) {
	Template.hello.greeting = function () {
		return "Welcome to StudioL scheduling.";
	};
  
	Template.hello.events({
		'click input.add' : function () {
			// template data, if any, is available in 'this'
			var start_time = this.find("start").value;
			var end_time = this.find("end").value;		
			Sessions.insert({group: "logs", start: start_time, end: end_time});
			if (typeof console !== 'undefined')
				console.log("scheduled!");
				console.log(end_time);
		},
		'click input.cancel' : function () {
			// template data, if any, is available in 'this'
			Sessions.remove({});
			if (typeof console !== 'undefined')
				console.log("cancelled");
		}
	});
  
	Template.hello.sessions = function() {
	return Sessions.find({}, {sort: {group: 1, start: 1}});
	};
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		Sessions.insert({group: "group", start: "start time", end: "end time"});
	});
}