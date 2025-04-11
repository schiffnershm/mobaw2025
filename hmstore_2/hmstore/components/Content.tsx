"use client";

import { useState } from "react";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";

export default function Content() {

    const [selectedCategories, setSelectedCategories] = useState({});

    // Function to update state when a checkbox is clicked
    const handleCheckboxChange = (category: string, isChecked: boolean) => {
        setSelectedCategories(prevState => ({
        ...prevState,
        [category]: isChecked,
        }
        ));
    };

    return (
        <main>
            <ProductFilter onFilterChange={handleCheckboxChange}/>
            <ProductList categories={selectedCategories}/>
        </main>
    );
}