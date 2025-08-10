# My Fullstack Application

This project is a fullstack application built with Next.js, Vite, Bootstrap for the frontend, and Node.js with Express for the backend.

## Project Structure

```
hms-prototype
├── frontend
│   ├── public                # Static assets (images, icons)
│   ├── src
│   │   ├── pages            # Next.js pages
│   │   │   └── index.tsx    # Main entry point for the Next.js application
│   │   ├── components       # React components
│   │   │   └── Navbar.tsx   # Navigation bar component
│   │   ├── styles           # Custom styles
│   │   │   └── bootstrap-custom.css # Custom Bootstrap styles
│   │   └── main.tsx         # Entry point for the Vite application
│   ├── package.json         # Frontend dependencies and scripts
│   ├── tsconfig.json        # TypeScript configuration for frontend
│   ├── vite.config.ts       # Vite configuration
│   └── README.md            # Frontend documentation
├── backend
│   ├── src
│   │   ├── app.ts           # Entry point for the Express application
│   │   ├── routes           # Route definitions
│   │   │   └── index.ts     # Route setup
│   │   └── controllers      # Request handling
│   │       └── index.ts     # Controller definitions
│   ├── package.json         # Backend dependencies and scripts
│   ├── tsconfig.json        # TypeScript configuration for backend
│   └── README.md            # Backend documentation
└── README.md                # Overall documentation for the fullstack application
```

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-fullstack-app
   ```

2. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```
   cd ../backend
   npm install
   ```

### Running the Application

- To run the frontend:
  ```
  cd frontend
  npm run dev
  ```

- To run the backend:
  ```
  cd backend
  npm start
  ```

### Built With

- [Next.js](https://nextjs.org/) - React framework for server-side rendering
- [Vite](https://vitejs.dev/) - Build tool that focuses on speed
- [Bootstrap](https://getbootstrap.com/) - CSS framework for responsive design
- [Node.js](https://nodejs.org/) - JavaScript runtime for the backend
- [Express](https://expressjs.com/) - Web framework for Node.js

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.
