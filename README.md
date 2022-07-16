# Movie Chat Application

This application allows you to search for movies using a filter by title and genre. You can also click on the movie row to access the chat.

This project was built using the following techs/libs: **TypeScript**, **React**, **Emotion**, **React Router Dom**, **MUI Material** and **Firebase**

## Pre-requisites

- Node 17.0.0 (.nvmrc)
- Yarn
- Nvm

## :computer: How to run

On the root folder, create a `.env` file and add the following line:

```
REACT_APP_FIREBASE_API_KEY=AIzaSyD6KLw-P_DX39ZOHLIcqD5uK7DuUVLr3rs
```

Use the correct nvm version:

```
nvm use
```

Instal the dependencies:

```
yarn install
```

To run the application, execute the following command in your terminal:

```bash
yarn start
```

The application will run at the address: [http://localhost:3000/](http://localhost:3000/)

## :file_folder: Architecture

The initial part of the project's architecture was focused on the standard formatting of the code. And for that, the **ESLint** and **Prettier** tools are being used.

This app is also using the `react-app-rewired`, which allows us to make adjustments to the application without having to eject the project.

The Chat is using SWR feature to get real-time messages. The name "SWR" is derived from stale-while-revalidate, an HTTP cache invalidation technique popularized by HTTP RFC 5861. SWR is the strategy of first returning the data from the cache (stale), then sending the fetch request (revalidate ), and finally return with the updated data.

### Folder structure

- **Src:** Where all the application files live

- **Components:** All components used globally by the application, components used only by a page or another specific component will stay elsewhere.

Example:

```
components
|-- ComponentName
   |-- index.tsx
   |-- styles.ts
```

- **Hooks:** Custom hooks used in the application.

- **Pages:** As the name implies, here are all the pages of our application. Inside each page folder we will have a components folder that contains all the unique components of the page.

Example:

```
pages
|-- Page
   |-- components
      |-- ComponentName.tsx
      or
      |-- ComponentName
          |-- index.tsx
          |-- styles.ts
   |-- index.tsx
   |-- styles.ts
```

- **Routes:** Files that manage the application routes.

- **Services:** Folder to allocate all files responsible for consuming external services, such as the axios configuration file for consuming RESTFul APIs.

- **Types:** Files containing the declarations.

- **Utils:** All modules or methods with utilities that can be used in any layer application.

## :wrench: List of Improvements

- Configure a better view for mobile devices
- Best UI for Chat
- Add "<username> is typing" functionality in Chat.
- Improved scroll management for Chat scrolling.
- Login to get simple user data
- Fix CORS error in API call.
- Extra cache layer to store already viewed messages. Use Redux (@rematch library).
- Create unit and integration tests;
- Deploy security layer for Firebase API KEY.
- Configure SEO
- Configure CI using Git Actions to deploy the application to Firebase Hosting.
