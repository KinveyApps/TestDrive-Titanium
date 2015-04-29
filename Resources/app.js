/**
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

// Bootstrap and check dependencies.
if(Ti.version < '3.0') {
  alert('Sorry - this application template requires Titanium Mobile SDK 3.0 or later');
}

// Import the Kinvey module.
var Kinvey = require('kinvey-titanium-1.3.1');

// Initialize Kinvey.
Kinvey.init({
  appKey    : 'App Key',
  appSecret : 'App Secret'
});

// Open top-level UI component.
(function() {
  // Import the ping window.
  var PingWindow = require('ui/ping');

  // Create single tab application, with a ping screen as only tab.
  var tab = Ti.UI.createTab({  
    title: 'TestDrive',
    window: new PingWindow(Kinvey)
  });
  var tabGroup = Ti.UI.createTabGroup();
  tabGroup.addTab(tab);
  tabGroup.open();
}());