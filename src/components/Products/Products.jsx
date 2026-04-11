import React from "react";
import Heading from "../Heading/Heading";
import ProductList from "../ProductList/ProductList";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";


const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "Meat & Seafoods"];
  const [activeTab, setActiveTab] = React.useState("All");

  let filteredProducts = activeTab === "All" ? ProductList : ProductList.filter(product => product.category === activeTab);

  const renderCards = filteredProducts.slice(0, 8).map((product) => {
    return (
      <Cards
        key={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
      />
    );
  });

  return (
    <section>
      <div className="max-w-350 mx-auto px-10 py-20">
        <Heading highlight="Our" heading="Products" />

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mt-10">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className={`px-5 py-2 text-lg rounded-lg cursor-pointer ${
                  activeTab === category
                    ? "bg-gradient-to-b from-orange-400 to-orange-500 text-white"
                    : "bg-zinc-100"
                }`}
                onClick={() => setActiveTab(category)}
              >
                {category}
              </button>
            );
          })}
        </div>
        {/* Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-9 mt-20">{renderCards}</div>

        <div className="mt-15 mx-auto w-max">
        <Link
            to="/allproducts"
            className="bg-gradient-to-b from-orange-400 to-orange-500 px-8 py-3 rounded-lg md:text-lg text-white hover:scale-105 cursor-pointer hover:to-orange-600 transition-all duration-300"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
