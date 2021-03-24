import json
import copy
obj={}
data=[]
with open('2020_exam.txt') as json_file:
    f = json.load(json_file)
    
    for p in f:
        obj["courseCode"]=p
        obj["date"]=f[p]["date"]
        obj["day"]=f[p]["day"]
        time=f[p]["time"]
        if(time[-2:]=='am'):
            
            t2=time[0:-3].split('.')
            
            if(int(t2[0])<10):
                t='0'+t2[0]+t2[1]
            else:
                t=t2[0]+t2[1]
        else:
            t2=time[0:-3].split('.')
            t1=(int(t2[0])+12)
            t=str(t1) + t2[1]
        print(t)
        obj["time"]=t
        obj["duration"]=f[p]["duration"]
        #print(obj)
        data.append(copy.copy(obj))
    print(data)
with open('data3.txt', 'w') as outfile:
    json.dump(data, outfile)