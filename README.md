# FaceSnap Angular client

An Angular 16 course project for browsing and creating FaceSnap posts. The app includes an introduction page, a FaceSnap list and detail pages, a new post form, login and signup screens, and an HTTP interceptor for authentication tokens.

## Run locally

1. Run `npm install`.
2. Start a compatible API on `http://localhost:3000/api`.
3. Run `npm start` and open `http://localhost:4200`.

The client calls `/api/stuff` for FaceSnaps and `/api/auth/signup` and `/api/auth/login` for accounts. These data and authentication features depend on the backend; the frontend does not include a database. The API base URL is set in `src/environments/environment.ts`, while the auth service also uses local URLs directly.

## Project structure

- `src/app/facesnap/`: list, detail, and creation components.
- `src/app/authentification/`: login and signup components.
- `src/app/core/`: API services, token handling, route guard, and HTTP interceptor.

Run `npm run build` for a production build.

## Origin

This repository records work done while following an Angular course.
