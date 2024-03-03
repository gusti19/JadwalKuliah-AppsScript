function createCalendarEvents() {
  var events = [
    {
      "summary": "KECERDASAN BUATAN",
      "description": "https://zoom.us/j/96369129267",
      "start": {
        "dateTime": "2024-03-04T10:40:00",
        "timeZone": "Asia/Jakarta"
      },
      "end": {
        "dateTime": "2024-03-04T12:20:00",
        "timeZone": "Asia/Jakarta"
      },
      "location": "VR.02.02",
      "recurrence": [
        "RRULE:FREQ=WEEKLY;UNTIL=20240708T235959Z;BYDAY=MO"
      ]
    },
    {
      "summary": "PEMROGRAMAN BASIS DATA",
      "description": "-",
      "start": {
        "dateTime": "2024-03-04T15:30:00",
        "timeZone": "Asia/Jakarta"
      },
      "end": {
        "dateTime": "2024-03-04T17:10:00",
        "timeZone": "Asia/Jakarta"
      },
      "location": "04.02.01",
      "recurrence": [
        "RRULE:FREQ=WEEKLY;UNTIL=20240708T235959Z;BYDAY=MO"
      ]
      
    },
    {
      "summary": "BIG DATA & PREDICTIVE ANALYTICS",
      "description": "-",
      "start": {
        "dateTime": "2024-03-05T13:20:00",
        "timeZone": "Asia/Jakarta"
      },
      "end": {
        "dateTime": "2024-03-05T15:00:00",
        "timeZone": "Asia/Jakarta"
      },
      "location": "05.04.08",
      "recurrence": [
        "RRULE:FREQ=WEEKLY;UNTIL=20240709T235959Z;BYDAY=MO"
      ]
    },
    {
      "summary": "ANALISIS DESAIN SISTEM INFORMASI",
      "description": "-",
      "start": {
        "dateTime": "2024-03-05T15:30:00",
        "timeZone": "Asia/Jakarta"
      },
      "end": {
        "dateTime": "2024-03-05T17:10:00",
        "timeZone": "Asia/Jakarta"
      },
      "location": "05.04.04",
      "recurrence": [
        "RRULE:FREQ=WEEKLY;UNTIL=20240709T235959Z;BYDAY=MO"
      ]
    },
    {
      "summary": "ANALISIS DESAIN SISTEM INFORMASI",
      "description": "-",
      "start": {
        "dateTime": "2024-03-06T07:00:00",
        "timeZone": "Asia/Jakarta"
      },
      "end": {
        "dateTime": "2024-03-06T08:40:00",
        "timeZone": "Asia/Jakarta"
      },
      "location": "05.02.02",
      "recurrence": [
        "RRULE:FREQ=WEEKLY;UNTIL=20240710T235959Z;BYDAY=MO"
      ]
    },
    {
      "summary": "PENDIDIKAN KEWARGANEGARAAN",
      "description": "https://zoom.us/j/97625121587",
      "start": {
        "dateTime": "2024-03-06T10:40:00",
        "timeZone": "Asia/Jakarta"
      },
      "end": {
        "dateTime": "2024-03-06T12:20:00",
        "timeZone": "Asia/Jakarta"
      },
      "location": "VR.01.01",
      "recurrence": [
        "RRULE:FREQ=WEEKLY;UNTIL=20240710T235959Z;BYDAY=MO"
      ]
    },
    {
      "summary": "BIG DATA & PREDICTIVE ANALYTICS",
      "description": "-",
      "start": {
        "dateTime": "2024-03-06T13:20:00",
        "timeZone": "Asia/Jakarta"
      },
      "end": {
        "dateTime": "2024-03-06T15:00:00",
        "timeZone": "Asia/Jakarta"
      },
      "location": "05.04.07",
      "recurrence": [
        "RRULE:FREQ=WEEKLY;UNTIL=20240710T235959Z;BYDAY=MO"
      ]
    },
    {
      "summary": "PEMROGRAMAN WEB",
      "description": "-",
      "start": {
        "dateTime": "2024-03-06T15:30:00",
        "timeZone": "Asia/Jakarta"
      },
      "end": {
        "dateTime": "2024-03-06T17:10:00",
        "timeZone": "Asia/Jakarta"
      },
      "location": "05.04.06",
      "recurrence": [
        "RRULE:FREQ=WEEKLY;UNTIL=20240710T235959Z;BYDAY=MO"
      ]
    },
    {
      "summary": "ALJABAR LINIER DAN MATRIKS",
      "description": "-",
      "start": {
        "dateTime": "2024-03-07T10:40:00",
        "timeZone": "Asia/Jakarta"
      },
      "end": {
        "dateTime": "2024-03-07T12:20:00",
        "timeZone": "Asia/Jakarta"
      },
      "location": "05.03.07",
      "recurrence": [
        "RRULE:FREQ=WEEKLY;UNTIL=20240711T235959Z;BYDAY=MO"
      ]
    },
    {
      "summary": "PEMROGRAMAN BASIS DATA",
      "description": "-",
      "start": {
        "dateTime": "2024-03-07T13:20:00",
        "timeZone": "Asia/Jakarta"
      },
      "end": {
        "dateTime": "2024-03-07T15:00:00",
        "timeZone": "Asia/Jakarta"
      },
      "location": "L 2.4.2",
      "recurrence": [
        "RRULE:FREQ=WEEKLY;UNTIL=20240711T235959Z;BYDAY=MO"
      ]
    },
    {
      "summary": "PEMROGRAMAN WEB",
      "description": "-",
      "start": {
        "dateTime": "2024-03-08T07:00:00",
        "timeZone": "Asia/Jakarta"
      },
      "end": {
        "dateTime": "2024-03-08T08:40:00",
        "timeZone": "Asia/Jakarta"
      },
      "location": "L 2.4.5",
      "recurrence": [
        "RRULE:FREQ=WEEKLY;UNTIL=20240712T235959Z;BYDAY=MO"
      ]
    },
    {
        "summary": "BIG DATA & PREDICTIVE ANALYTICS",
        "description": "-",
        "start": {
          "dateTime": "2024-05-24T08:50:00",
          "timeZone": "Asia/Jakarta"
        },
        "end": {
          "dateTime": "2024-05-24T10:30:00",
          "timeZone": "Asia/Jakarta"
        },
        "location": "L 7.3.2",
        "recurrence": [
          "RRULE:FREQ=WEEKLY;UNTIL=20240712T235959Z;BYDAY=FR"
        ]
      },      
    {
      "summary": "RISET OPERASI",
      "description": "-",
      "start": {
        "dateTime": "2024-03-08T13:20:00",
        "timeZone": "Asia/Jakarta"
      },
      "end": {
        "dateTime": "2024-03-08T15:00:00",
        "timeZone": "Asia/Jakarta"
      },
      "location": "05.03.04",
      "recurrence": [
        "RRULE:FREQ=WEEKLY;UNTIL=20240712T235959Z;BYDAY=MO"
      ]
    }
];

  for (var i = 0; i < events.length; i++) {
    var event = events[i];

    var calendar = CalendarApp.getDefaultCalendar();

    var startTime = new Date(event.start.dateTime);
    var endTime = new Date(event.end.dateTime);

    var createdEvent = calendar.createEvent(event.summary, startTime, endTime, {
      location: event.location,
      description: event.description,
      recurrence: event.recurrence
    });

    // Set reminders
    var thirtyMinutesBefore = new Date(startTime.getTime() - 30 * 60 * 1000);
    var tenMinutesBefore = new Date(startTime.getTime() - 10 * 60 * 1000);

    createdEvent.addPopupReminder(thirtyMinutesBefore);
    createdEvent.addPopupReminder(tenMinutesBefore);

    Logger.log('Event created: %s', createdEvent.getId());
  }
}
