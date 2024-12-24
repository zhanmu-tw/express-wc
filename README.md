# Express SSR TypeScript Web Component Example

This repository is a base project demonstrating the integration of Express, Server-Side Rendering (SSR), Tailwind, and TypeScript with Web Components.

## Features

- **Express**: A minimal and flexible Node.js web application framework.
- **Server-Side Rendering (SSR)**: Serve HTML content generated on the server.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Tailwind**: For CSS styling
- **Web Components**: Reusable custom elements with encapsulated functionality.

## Project Structure

```
├── public
├── src
│   ├── js
│   │   └── increment-number-button.ts
│   ├── routers
│   │   ├── api.ts
│   │   └── web.ts
│   └── app.ts
│   └── server.ts
│   └── styles.css
├── views
│   ├── partials
│   │   └── footer.ejs
│   │   └── navbar.ejs
│   └── index.ejs
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
   git clone https://github.com/zhanmu-tw/express-wc.git
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
