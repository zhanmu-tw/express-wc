# Express SSR TypeScript Web Component Example

This repository is a base project demonstrating the integration of Express, Server-Side Rendering (SSR), and TypeScript with Web Components.

## Features

- **Express**: A minimal and flexible Node.js web application framework.
- **Server-Side Rendering (SSR)**: Serve HTML content generated on the server.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Web Components**: Reusable custom elements with encapsulated functionality.

## Project Structure

```
├── public
│   ├── about
│   │   └── index.html
│   └── styles.css
│   └── index.html
├── src
│   ├── components
│   │   └── test-component.ts
│   ├── router
│   │   ├── api.ts
│   │   └── web.ts
│   └── server.ts
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/express-wc.git
   cd express-wc
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Application

1. Start the development server:

   ```sh
   npm run dev
   ```

2. Open your browser and navigate to `http://localhost:3000`.

### Available Scripts

- `npm run dev`: Start the development server with hot reloading.
- `npm run build`: Build the project for production.
- `npm start`: Start the production server.

## Usage

### API Endpoints

- `POST /api/increment`: Increment a number and return the updated value.
- `GET /`: Serve the main HTML page.
- `GET /components/*`: Serve web component files.

### Web Components

#### TestComponent

A custom web component that displays a number and provides buttons to change the text color and increment the number.

```html
<test-component></test-component>
```
