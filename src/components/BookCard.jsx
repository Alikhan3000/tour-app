import React, {useState} from "react";

const BookCard = ({id, title, author, description, onRemove}) => {
    const[readMore, setReadMore] = useState(false);

    // Copilot-generated: Render the book card component, which represents a single book with its details
    return (
        <article className="book-card">
            {/* Copilot-generated: Display the book title as a heading, which is passed as a prop */}
            <h3>{title}</h3>
            {/* Copilot-generated: Display the book author as a subheading, also passed as a prop */}
            <h5>{author}</h5>
            <p>
                {/* Copilot-generated: Show either the full description or a truncated version based on the readMore state */}
                {readMore ? description : `${description.slice(0, 80)}...`}
                {/* Copilot-generated: Button to toggle the readMore state, allowing users to expand or collapse the description */}
                <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? "Show Less" : "Read More"}
                </button>
            </p>
            {/* Copilot-generated: Button to remove the book from the list, triggers the onRemove callback with the book's id */}
            <button className="btn-remove" onClick={() => onRemove(id)}>
                Remove Book
            </button>
        </article>
    );

}
export default BookCard;
