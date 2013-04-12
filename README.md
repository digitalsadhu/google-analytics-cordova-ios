# Google Analytics plugin for Cordova 2.5.0+ on iOS
====================
A iOS Google Analytics SDK 2.0 plugin for Cordova 2.5+

Setup:
---------------------
1. Add the SystemConfiguration and CoreData frameworks to Xcode.
2. Open your confix.xml file add a new entry under Plugins with the key as googleAnalyticsPlugin (note the lower case g) and the value as GoogleAnalyticsPlugin like so:

Example:
---------------------
    <plugins>
        ...
        <plugin name="googleAnalyticsPlugin" value="GoogleAnalyticsPlugin" />
        ...
    </plugins>

Then under ExternalHosts add a new entry with a value of * if necessary (Cordova 2.5 comes with this by default)

Example:
---------------------
    <widget>
        ...
        <access origin="*" />
        ...
    </widget>

3. Drag and drop the GoogleAnalytics folder onto your Plugins folder in Xcode. Select 'Copy items into destination group's folder (if needed)', select 'Create groups for any added folders', and check your target under 'Add to targets'.
4. Reference your cordova.js file and the GoogleAnalyticsPlugin.js in your html. To use, wrap the window.GA methods inside of an onDeviceReady function.

Example:
---------------------
	<script type="text/javascript">
		document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			window.GA.trackerWithTrackingId("UA-XXXXXXXX-X");
			window.GA.trackView("/index");
		}
	</script>

More details:
---------------------
For a more detailed guide see http://jelled.com/google-analytics-plugin-for-phonegap-cordova-2-2-0-ios

Credit:
---------------------
This is a fork with extremely minor changes of this repo: https://github.com/jelled/google-analytics-cordova-ios