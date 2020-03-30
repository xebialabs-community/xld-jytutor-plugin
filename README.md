# Jython API Tutor/Helper Extension #

[![GitHub All Releases](https://img.shields.io/github/downloads/xebialabs-community/xld-jytutor-plugin/total)](https://github.com/xebialabs-community/xld-jytutor-plugin/releases/latest)



This helps in testing out jython commands that run directly in **XL Deploy** server. This is an easy way to learn jython API for building REST API Extensions and XL-Rules Jython Step scripting.


# Requirements #

* **XL Deploy requirements**
	* **XL Deploy**: version 4.5.2+

# Installation #

Build the project:
```
gradle build
```

Copy the extension to the plugins folder of your **XL Deploy**  installation (XL*_HOME):
```
cp ./build/libs/xld-jytutor-plugin-1.0.0.jar $XL*_HOME/plugins
```

# Snapshot #

![Configuration](/screenshot.png)


# SAMPLE #

You can actually refer to this [jython snippet](https://github.com/amitmohleji/XLDScripts/blob/master/exposeJythonVariables.py) to find out all the variables and methods exposed by jython services

### Another one ### 
```
from com.xebialabs.overthere import OperatingSystemFamily
from com.xebialabs.overthere.ssh import SshConnectionType
ciType = Type.valueOf("overthere.SshHost")
ci = metadataService.findDescriptor(ciType).newInstance("Infrastructure/newinfra")
ci.os = OperatingSystemFamily.UNIX
ci.connectionType = SshConnectionType.SCP
ci.address = "myhost.com"
ci.username ="myuser"
ci.password = "mypass"
repositoryService.create(ci.id, ci)

```
