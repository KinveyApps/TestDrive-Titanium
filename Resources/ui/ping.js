/**
 * Code to render the ping screen. The Kinvey object is passed as parameter.
 * 
 */
function PingWindow(Kinvey) {
  // Create window.
  var self = Ti.UI.createWindow({
  	title: 'TestDrive',
  	backgroundColor: '#FFF'
  });

  // Add ping button.
  var button = Ti.UI.createButton({ title: 'Ping Kinvey' });
  button.addEventListener('click', function(e) {
    Kinvey.ping({
      success: function(response) {
        var alert = Ti.UI.createAlertDialog({
          title: 'Kinvey Ping Success.',
          message: 'Kinvey Service is alive, version: ' + response.version + ', response: ' + response.kinvey,
          buttonNames: ['OK']
        });
        alert.show();
      },
      error: function(error) {
        var alert = Ti.UI.createAlertDialog({
          title: 'Kinvey Ping Failed.',
          message: 'Response: ' + error.description,
          buttonNames: ['OK']
        });
        alert.show();
      }
    });
  });
  self.add(button);

  return self;
}

module.exports = PingWindow;