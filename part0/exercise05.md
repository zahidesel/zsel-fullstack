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
    Browser->>Server: GET /exampleapp/data.json
    Server-->>Browser: JSON data
