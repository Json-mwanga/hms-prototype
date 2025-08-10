# Frontend README.md

# My Fullstack App - Frontend

This is the frontend part of the My Fullstack App, built using Next.js, Vite, and Bootstrap. 

## Project Structure

- **public/**: Contains static assets such as images and icons.
- **src/**: Contains the source code for the application.
  - **pages/**: Contains the pages of the application.
    - **index.tsx**: The main entry point for the Next.js application.
  - **components/**: Contains reusable components.
    - **Navbar.tsx**: The navigation bar component utilizing Bootstrap for styling.
  - **styles/**: Contains custom styles.
    - **bootstrap-custom.css**: Custom styles that override or extend Bootstrap's default styles.
  - **main.tsx**: The entry point for the Vite application.

## Getting Started

To get started with the frontend application, follow these steps:

1. **Install Dependencies**: 
   Run the following command in the frontend directory:
   ```
   npm install
   ```

2. **Run the Development Server**: 
   Start the development server with:
   ```
   npm run dev
   ```

3. **Open in Browser**: 
   Navigate to `http://localhost:3000` to view the application.

## Built With

- [Next.js](https://nextjs.org/) - A React framework for server-rendered applications.
- [Vite](https://vitejs.dev/) - A fast build tool and development server.
- [Bootstrap](https://getbootstrap.com/) - A popular CSS framework for responsive design.

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.