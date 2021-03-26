import json
import copy
obj={}
data=[]
with open('output.txt') as json_file:
    f = json.load(json_file)
    
    for p in f:
        #print(p)
        obj["courseCode"]=p['courseCode']
        obj['name']=p['name']
        obj['au']=p['au']
        for l in p['index']:
            obj['index']['index_number']=
        obj['name']=p['name']
        obj['name']=p['name']
        obj['name']=p['name']
        data.append(copy.copy(obj))
    #print(data)
# with open('final.txt', 'w') as outfile:
#     json.dump(data, outfile)