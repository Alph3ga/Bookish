'use client'
import { useEffect, useState } from "react";
import '@/styles/BookInfo.css'

export default function BookInfo(props){
    const [expanded, setExpanded] = useState(false);

    // Function to toggle description expansion
    const toggleExpand = () => {
    setExpanded(!expanded);
    };

    // Truncate long description with ellipsis
    const truncateDescription = (text, maxLength) => {
    if(!text){ return ""; }
    if (text.length <= maxLength) {
        return text;
    }
    return text.substr(0, maxLength) + '...';
    };

    return (
    <div className="book-container body_font">
        <div className="book-info">
            <img src={props.image} alt={`${props.title} cover`} className="book-image" />
            <div className="book-details">
                <h3 className="book-title">
                <a href="#" onClick={(e) => { e.preventDefault(); /* Handle link click */ }}>
                    {props.title}
                </a>
                </h3>
                <p className="book-author">by {props.authors? props.authors[0]: "Unknown"}</p>
                <p className="book-price">Price: {props.price? "₹"+props.price : "Free"}</p>
            </div>
        </div>
        <p className="book-description">
        {expanded ? props.description : truncateDescription(props.description, 150)}
        {!expanded && (props.description? props.description.length : 0) > 150 && (
            <button onClick={toggleExpand} className="expand-button">
            {expanded ? 'Show less' : 'Show more'}
            </button>
        )}
        </p>
    </div>
    );
}