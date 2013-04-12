if (!window.GA) {
	window.GA = {
		trackerWithTrackingId: function(id) {
			cordova.exec("GoogleAnalyticsPlugin.trackerWithTrackingId",id);
			//console.log("trackerWithTrackingId Initialized");
		},
		trackView: function(pageUri) {
			cordova.exec("GoogleAnalyticsPlugin.trackView",pageUri);
			//console.log("trackView Initialized");
		},
		trackEventWithCategory: function(category,action,label,value) {
			var options = {category:category,
				action:action,
				label:label,
				value:value};
			cordova.exec("GoogleAnalyticsPlugin.trackEventWithCategory",options);
		},
		hitDispatched: function(hitString) {
			//console.log("hitDispatched :: " + hitString);
		},
		trackerDispatchDidComplete: function(count) {
			//console.log("trackerDispatchDidComplete :: " + count);
		}
	};
}
