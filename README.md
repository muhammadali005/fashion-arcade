Fashion Arcade

Fashion Arcade is a fully responsive e-commerce web application built using React.js for the frontend and Redux for managing the cart state. It fetches products dynamically from the Fake Store API to provide a realistic shopping experience.

Features
Product Listing: Displays a wide range of products fetched dynamically from the Fake Store API.
Product Details: View detailed information about each product, including category, price, rating, and description.
Cart Management: Add, view, and remove products from the cart with seamless state management using Redux.
Category Filters: Filter products by category (e.g., men's clothing, women's clothing, jewelry, electronics).
Loading Skeletons: Smooth user experience with loading skeletons while data is being fetched.
Fully Responsive: Optimized for all devices, including desktops, tablets, and mobile phones.
Tech Stack
React.js: For building the user interface.
Redux: For state management, specifically for cart functionality.
Fake Store API: For fetching fake products and data.
React Router: For navigation and routing.
Bootstrap: For responsive and visually appealing UI.
React-Loading-Skeleton: For skeleton screens during data loading.
Installation
Follow these steps to set up the project locally:

Clone the repository:
git clone https://github.com/yourusername/fashion-arcade.git
cd fashion-arcade

Install dependencies:
npm install

Start the development server:
npm start

Open your browser and navigate to:
http://localhost:3000

Folder Structure:

fashion-arcade/
├── public/
├── src/
│   ├── components/    # React components (e.g., Product, Products, Navbar, Footer)
│   ├── redux/         # Redux store, actions, and reducers
│   ├── styles/        # CSS files and styles
│   ├── App.js         # Main App component
│   ├── index.js       # Entry point
│   └── ...
├── package.json
├── README.md

API Usage
This project uses the Fake Store API, which provides a range of sample product data for development purposes. Below are the endpoints used in this app:

Get All Products: https://fakestoreapi.com/products
Get Product by ID: https://fakestoreapi.com/products/:id

Contributing:

Contributions are welcome! Follow these steps to contribute:

Fork the repository.
Create a new branch: git checkout -b feature-name.
Make your changes and commit: git commit -m 'Add some feature'.
Push the branch: git push origin feature-name.
Open a pull request.
