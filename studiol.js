Sessions = new Meteor.Collection("sessions");
user = "default"

if (Meteor.isClient) {
	Template.hello.greeting = function () {
		return "Welcome to StudioL scheduling.";
	};
  
	Template.hello.events({
		'click input' : function (event, template) {
			// template data, if any, is available in 'this'
			if (typeof console !== 'undefined')
				console.log("You pressed the button");
			var start_time = template.find(".start");
			var end_time = template.find(".end");		
			Sessions.insert({group: user, start: start_time, end: end_time});
		}
	});
  
	Template.hello.sessions = function() {
	return Sessions.find({}, {sort: {group: 1, start: 1}});
	};
}

if (Meteor.isServer) {
	Meteor.startup(function () {
		// code to run on server at startup
	});
}