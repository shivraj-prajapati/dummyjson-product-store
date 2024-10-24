
# DummyJSON Product Store 🛍️

Welcome to the **DummyJSON Product Store**! This is a modern product listing app that fetches data from the [DummyJSON](https://dummyjson.com) API, displaying product categories and their respective products. The project is built using **React** and styled with **Tailwind CSS**.

## 📋 Features

- Fetches product categories and products from the DummyJSON API.
- Displays a list of categories on the left side, with products shown on the right.
- Products dynamically update based on the selected category.
- Beautiful, modern UI using Tailwind CSS for styling.

## 🚀 Demo

Check out the live demo at [dummyjson-product-store](https://github.com/shivraj-prajapati/dummyjson-product-store).

## 🛠️ Tech Stack

- **React**: For building the user interface.
- **Axios**: For making HTTP requests to fetch data from the API.
- **Tailwind CSS**: For modern and responsive styling.
- **DummyJSON API**: To simulate fetching product data.

## ⚡ How it Works

1. **Fetching Categories**: When the app loads, it makes an API call to fetch product categories using:
    ```javascript
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalResponse) => {
        setFinalCategory(finalResponse);
      })
      .catch((err) => {
        console.log(err);
      });
    ```

2. **Fetching Products**: Initially, all products are fetched and displayed. Upon selecting a category, it fetches products for the selected category:
    ```javascript
    axios
      .get(`https://dummyjson.com/products/category/${catName}`)
      .then((res) => res.data)
      .then((finalResponse) => {
        setFinalProducts(finalResponse);
      })
      .catch((err) => {
        console.log(err);
      });
    ```

3. **Displaying Products**: Products are displayed in a responsive grid, each showing an image, title, and price:
    ```javascript
    <ProductItems
      key={i}
      title={product.title}
      price={product.price}
      image={product.thumbnail}
    />
    ```

## 📦 Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/shivraj-prajapati/dummyjson-product-store.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd dummyjson-product-store
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Run the project**:
    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

## 🧰 Requirements

Make sure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/) (v12+ recommended)
- **npm**: Comes with Node.js

## 🎨 Styling with Tailwind CSS

Tailwind CSS is used to provide a modern and responsive design for this app. Here's a glimpse of how Tailwind is used:

- **Responsive Grid Layout**:
    ```html
    <div className="grid grid-cols-[30%_auto] gap-[20px]">
    ```

- **Product Card Design**:
    ```html
    <div className="shadow-lg pb-4 p-2">
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <b>MRP : ₹ {price}</b>
    </div>
    ```

## 🐛 Issues and Contributions

Feel free to open issues or make contributions to improve the project. Contributions are always welcome!

---

Thank you for checking out this project! 💻✨
