# Demand Xpress Contact Full Stack Assessment

## Project Structure

```
backend/
    .env
    contacts.db
    db.js
    package.json
    server.js
    models/
        contactModel.js
    routes/
        contacts.js
frontend/
    .gitignore
    package.json
    README.md
    public/
        favicon.ico
        index.html
        logo192.png
        logo512.png
        manifest.json
        robots.txt
    src/
        App.css
        App.js
        App.test.js
        index.css
        index.js
        logo.svg
        reportWebVitals.js
        setupTests.js
        components/
            ContactForm.js
            ContactList.js
            Pagination.js
```

## Local Setup Instructions

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env` as needed.
4. Start the backend server:
   ```bash
   node server.js
   ```

### Frontend
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage
- The frontend will run on its default port (usually 3000).
- The backend will run on the port specified in `.env` or default (usually 5000).
- Ensure both servers are running for full functionality.

## License
This project is for assessment purposes only.
