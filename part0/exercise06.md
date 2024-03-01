sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Access https://studies.cs.helsinki.fi/exampleapp/spa
    Browser->>Server: GET /exampleapp/spa
    Server-->>Browser: HTML document
    Browser->>Server: GET /exampleapp/main.css
    Server-->>Browser: CSS file
    Browser->>Server: GET /exampleapp/main.js
    Server-->>Browser: JavaScript file

    Note right of Browser: User creates a new note

    Browser->>Browser: User creates a new note
    Browser->>Browser: Clicks Save button

    Note right of Browser: JavaScript code sends a POST request to save the note

    Browser->>Server: POST /exampleapp/new_note_spa
    Server-->>Browser: 201 Created
