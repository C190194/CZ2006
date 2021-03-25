import json
import copy
obj={}
data=[]
with open('dataDict1.txt') as json_file:
    f = json.load(json_file)
    
    for p in f:
        obj["courseCode"]=p
        obj["details"]=f[p]
        data.append(copy.copy(obj))
    print(data)
with open('data4.txt', 'w') as outfile:
    json.dump(data, outfile)