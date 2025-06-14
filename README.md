# funTouch


create User


http://localhost:3000/api/users

request:

{
  "name": "testing",
  "email": "testing@gmail.com",
  "phone": "+919092568089",
  "preferences": [
    { "type": "task_created", "methods": ["email", "sms"] },
    { "type": "task_deleted", "methods": ["inApp"] }
  ]
}
response:

{
    "name": "testing",
    "email": "testing@gmail.com",
    "phone": "+919092568089",
    "preferences": [
        {
            "type": "task_created",
            "methods": [
                "email",
                "sms"
            ],
            "_id": "684d35aa214521bbdda2b010"
        },
        {
            "type": "task_deleted",
            "methods": [
                "inApp"
            ],
            "_id": "684d35ab214521bbdda2b011"
        }
    ],
    "_id": "684d35aa214521bbdda2b00f",
    "__v": 0
}



get notification by userId

http://localhost:3000/api/notifications/684d35aa214521bbdda2b00f

Response:


[
    {
        "_id": "684d3698214521bbdda2b019",
        "userId": "684d35aa214521bbdda2b00f",
        "eventId": "684d3698214521bbdda2b013",
        "method": "email",
        "title": "Ticket 123 created",
        "priority": "high",
        "sentAt": "2025-06-14T08:45:12.459Z",
        "__v": 0
    },
    {
        "_id": "684d3698214521bbdda2b01c",
        "userId": "684d35aa214521bbdda2b00f",
        "eventId": "684d3698214521bbdda2b013",
        "method": "sms",
        "title": "Ticket 123 created",
        "priority": "high",
        "sentAt": "2025-06-14T08:45:12.470Z",
        "__v": 0
    }
]

create Event post Api

http://localhost:3000/api/events

request:

{
  "type": "task_deleted",
  "title": "Ticket 123 closed",
  "description": "Task has been closed",
  "priority": "low"
}




