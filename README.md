# Jython API Tutor/Helper Extension #

This helps in testing out jython commands that run directly in **XL Deploy** or **XL Release** server. This is an easy way to learn jython API for building REST API Extensions and XL-Rules Jython Step scripting.


# Requirements #

* **XL Deploy requirements**
	* **XL Deploy**: version 4.5.2+
* **XL Release requirements**
	* ** XL Release**: version 4.6.0+

# Installation #

Build the project:
```
gradle build
```

Copy the extension to the plugins folder of your **XL Deploy** or **XL Release** installation (XL*_HOME):
```
cp ./build/libs/xld-jytutor-plugin-1.0.0.jar $XL*_HOME/plugins
```

# Snapshot #

![Configuration] (/screenshot.png)


# SAMPLE #

You can actually refer to this [jython snippet](https://github.com/amitmohleji/XLDScripts/blob/master/exposeJythonVariables.py) to find out all the variables and methods exposed by jython services
