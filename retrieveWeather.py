'''
Created on Jun 15, 2013

@author: joe
'''


import httplib
import xml.etree.ElementTree as ET


def queryweather(xmlRequest):
    
    urlWeather = "api.openweathermap.org"
    apiWeather = "/data/2.5/weather?q=Berlin,de&mode=xml&units=metric"
    
    webservice = httplib.HTTP(urlWeather)
    webservice.putrequest("POST", apiWeather)
    webservice.putheader("Host", urlWeather)
    webservice.putheader("User-Agent","Python post")
    webservice.putheader("Content-type", "text/xml; charset=\"UTF-8\"")
    webservice.putheader("Content-length", "%d" % len(xmlRequest))
    webservice.endheaders()
    webservice.send("")
    statuscode, statusmessage, header = webservice.getreply()
    print statuscode, statusmessage, header
    result = webservice.getfile().read()
    print "result=", result
    return result    
    
def main():
    
    res = ET.fromstring(queryweather(""))
    
    clouds_value = int([element.attrib["value"] for element in res.iter("clouds")][0])
    weather_number = int([element.attrib["number"] for element in res.iter("weather")][0])
    
    print clouds_value, weather_number
    

if __name__ == '__main__':
    main()