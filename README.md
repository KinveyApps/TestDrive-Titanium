# TestDrive-Titanium
The TestDrive sample application provides you with a near blank template to get started with. It is great for learning and trying Kinvey, or to build your first application upon.

## Run It
After downloading or cloning the repository:

* Make sure you have an [Appcelerator Titanium Platform account](https://my.appcelerator.com/auth/signup), and the [Titanium Studio IDE](http://docs.appcelerator.com/titanium/latest/#!/guide/Quick_Start) installed.
* Open Titanium Studio.
* Choose `File -> Import -> Existing folder as New Project`.
* Choose `Titanium Mobile` as project type, and click `Finish`:
![Import project](https://raw.github.com/KinveyApps/TestDrive-Titanium/master/screenshot-import-project.png)
* Replace `App Key` and `App Secret` (`Resources/app.js`) with your applications credentials.
* Optional: adjust the `Run Configurations` to suit your needs:
![Adjust Run Configurations](https://raw.github.com/KinveyApps/TestDrive-Titanium/master/screenshot-run-configurations.png)
* Run the project on the platform of your choice. 

## Functionality
This application demonstrates:

* Basic set-up for Titanium apps using Kinvey.
* Pinging the service

## Architecture
The application is set-up to run on Android and as mobile web application. The main entry point of the application is `Resources/app.js`. Here, Kinvey is initialized for use with your app.

The UI is also initialized in this file. By default, the sample is a single-tab application. The only page is defined in `Resources/ui/ping.js`, which shows a button to ping the Kinvey service.

The best place to learn how to add and modify your application is the [Titanium Documentation](http://docs.appcelerator.com).