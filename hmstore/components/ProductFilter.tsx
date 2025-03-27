export default function ProductFilter() {
    return (
        <aside className="sidebar">
            <h2>Filters</h2>
            <label>
                <input type="checkbox" name="category" value="electronics"/> Electronics
            </label>
            <br/>
            <label>
                <input type="checkbox" name="category" value="clothing"/> Clothing
            </label>
            <br/>
            <label>
                <input type="checkbox" name="category" value="home"/> Home & Kitchen
            </label>
        </aside>
    );
}