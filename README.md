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

### Another one ###
```
appBaseFolder = "Applications/namespaces"
envBaseFolder = "Environments/k8s"

namespace = "xl2"

# Creating new Application
ciType = Type.valueOf("udm.Application")
app = metadataService.findDescriptor(ciType).newInstance("%s/%s" % (appBaseFolder, namespace))
repositoryService.create(app.id,app)

# Creating new Deployment Package
ciType = Type.valueOf("udm.DeploymentPackage")
dp = metadataService.findDescriptor(ciType).newInstance("%s/1.0" % app.id)
repositoryService.create(dp.id,dp)

# Creating new Namespace Spec
ciType = Type.valueOf("k8s.NamespaceSpec")
nsp = metadataService.findDescriptor(ciType).newInstance("%s/%s" % (dp.id, namespace))
nsp.namespaceName = namespace
repositoryService.create(nsp.id,nsp)

ciType = Type.valueOf("udm.Environment")
env = metadataService.findDescriptor(ciType).newInstance("%s/%s" % (envBaseFolder, namespace))
env.members.add("Infrastructure/GKE")
repositoryService.create(env.id,env)

```

