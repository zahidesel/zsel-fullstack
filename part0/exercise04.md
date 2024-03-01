sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Access https://studies.cs.helsinki.fi/exampleapp/notes
    Browser->>Server: GET /exampleapp/notes
    Server-->>Browser: HTML document
    Browser->>Server: GET /exampleapp/main.css
    Server-->>Browser: CSS file
    Browser->>Server: GET /exampleapp/main.js
    Server-->>Browser: JavaScript file
    Browser->>Server: GET /exampleapp/data.json
    Server-->>Browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]

    Note right of Browser: JavaScript code fetches JSON data from the server

    Browser->>Server: POST /exampleapp/new_note
    Server-->>Browser: 201 Created

    Note right of User: User writes a new note and clicks Save

    Browser->>Server: GET /exampleapp/notes
    Server-->>Browser: Updated notes list