# Proprietiery. Atomic Modules 

## *1.* Gravity Subscriber

The following is an example payload recieved from gravity-subscriber once connected.

```
{
   "payload":{
      "seq":1,
      "eventName":"accountInitialized",
      "table":"accounts",
      "primaryKeys":[
         "REGNO"
      ],
      "primaryKey":[
         50,
         48,
         50,
         51,
         48,
         54,
         51,
         48,
         48,
         48,
         48,
         48,
         48
      ],
      "time":"2024-02-20T10:09:07.906Z",
      "timeNano":488,
      "record":{
         "URGENTMK":"",
         "RTIME":"093423",
         "EDEPT":"13F0",
         "PFTYPE":"Y",
         "ERRMARK":"2",
         "GRAPHNO":"",
         "ABSTRACT":"",
         "ODATE":"20230620",
         "ODRSHNO":"",
         "DRNO":"1296",
         "TMOUTMK":"",
         "ORIGI":"O",
         "ITEM":"N73-007",
         "EDATE":"20230630",
         "CONTENT":"",
         "REGNO":"2023063000000",
         "ODRNO":"",
         "CHARTNO":"229OOOO     ",
         "ETIME":"073513",
         "REPORT":"姓　　名：胡○○  ...",
         "DT":"2024-02-20T01:56:16.825Z",
         "AMEND":0,
         "TYPE":"0 ",
         "OTIME":"150100",
         "DXCODE2":"",
         "RDATE":"20230703",
         "CASENO":"23l06120OOOOO"
      }
   },
   "natsMsgId":"1",
   "_msgid":"99350de1.41ee2"
}
```

## *2.* Gravity Publisher

The following is an example payload queued by gravity-publisher ready to be published

```
{
   "payload":{
      "URGENTMK":"",
      "RTIME":"093423",
      "EDEPT":"13F0",
      "PFTYPE":"Y",
      "ERRMARK":"2",
      "GRAPHNO":"",
      "ABSTRACT":"",
      "ODATE":"20230620",
      "ODRSHNO":"",
      "DRNO":"1296",
      "TMOUTMK":"",
      "ORIGI":"O",
      "ITEM":"N73-007",
      "EDATE":"20230630",
      "CONTENT":"",
      "REGNO":"2023063000000",
      "ODRNO":"",
      "CHARTNO":"229OOOO     ",
      "ETIME":"073513",
      "REPORT":"姓　　名：胡○○...",
      "DT":"2024-02-20T01:56:16.825Z",
      "AMEND":0,
      "TYPE":"0 ",
      "OTIME":"150100",
      "DXCODE2":"",
      "RDATE":"20230703",
      "CASENO":"23l06120OOOOO"
   },
   "natsMsgId":"1fortest6",
   "_msgid":"6019f9e4.208528",
   "eventName":"userCreated"
}

```


## *3.* Terminologies

### *3.1* Overview
|Item                   | Description                                         |
|-----------------------|-----------------------------------------------------|
| msg.natsMsgId         | See [the following section](#nats)                  |
| msg.payload.seq       | The sequence number for an event in NATs JetStream  |
| msg.payload.eventName | Event name of the payload                           |
| msg.payload.table     | Data product name                                   |
| msg.payload.record    | Event content                                       |

### *3.2* msg.natsMsgId{#nats}

msg.natsMsgId is a string of data transformed from msg.payload.seq. As a matter of fact, msg.natsMsgId is actually an event consumer seq in *NATs JetStream*.
It's designed to trace the message from *Gravity Publish Node* to *Gravity Data Product* and in complement to redundency check purposes.

If you would like to test its functionalities, you may edit the `function node` in atomic
```
msg.natsMsgId = msg.natsMsgId + 'fortest001';
```
or delete if you choose to

```
delete msg.natsMsgId;
```

