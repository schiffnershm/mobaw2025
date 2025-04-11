interface ProductFilterProps {
    onFilterChange: (category: string, selected: boolean) => void;
}

export default function ProductFilter({ onFilterChange }: ProductFilterProps) {
    
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = event.target; // Extract category and selected state
        console.log(value, checked); // Log the category and selected state
        onFilterChange(value, checked); // Call the provided callback with the correct arguments
    };
    
    return (
        <aside className="sidebar">
            <h2>Filters</h2>
            <label>
                <input type="checkbox" name="category" value="electronics" onChange={handleCheckboxChange}/> Electronics
            </label>
            <br/>
            <label>
                <input type="checkbox" name="category" value="clothing" onChange={handleCheckboxChange}/> Clothing
            </label>
            <br/>
            <label>
                <input type="checkbox" name="category" value="home" onChange={handleCheckboxChange}/> Home & Kitchen
            </label>
        </aside>
    );
}