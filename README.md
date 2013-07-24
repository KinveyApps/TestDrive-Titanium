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

## License

    Copyright 2013 Kinvey, Inc.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.