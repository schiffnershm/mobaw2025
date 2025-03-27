"use client"

export default function Menu() {
    return (
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#" onClick={showContactInfo}>Contact</a></li>
            </ul>
        </nav>
    );
}

function showContactInfo() {
    alert("Contact us via email: store@hm.edu");
}