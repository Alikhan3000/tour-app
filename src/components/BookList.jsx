import React, {useEffect, useState} from "react";

import BookCard from "./BookCard";

//booklist is responsible for fetchiing books and rending the list 

const BookList = ({books, setBooks, onRemove}) => {
//local state to manage loading and errors 

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    //function for fetching books from the API

    const fetchBooks = async () => {
        try {
            const res = await fetch("https://gutendex.com/books");
            // map the API data to only the field we need 
            const data = await res.json();
            // Copilot-generated: Map the API data to extract relevant fields for each book
            const trimmed = data.results.map((book) => ({
                id: book.id,
                title: book.title,
                author: book.author[0]?.name || "Unknown",
                description: `Download count: ${book.download_count}. Subject: ${book.subjects.slice(0, 3).join(", ")}`,

            }));
            setBooks(trimmed);//save data to global state
            setLoading(false);//set loading to false
        } catch (error) {
            setError(true);//set error to true // if fetching fails, show error
            setLoading(false);//set loading to false
        }   
    };

    //useEffect to fetch books when the component mounts
    useEffect(() => {
        fetchBooks();
    }, []);

    //render loading, error, and no books states or the list of books

    if (loading) {
        return <h2>Loading...</h2>;
    };

    if(error) {
        return <h2>Something went wrong...</h2>;
    };

    if (books.length === 0) {   
        return <h2>No books available</h2>;
        <button onClick={fetchBooks}>Refresh</button>
    };

    //render the list of books using the BookCard component

    return (
        <section className="book-list">
            {books.map((book) => (
                // Render each book using the BookCard component
                // Spread operator is used to pass all book properties as props to BookCard
                // The `key` prop is used to uniquely identify each book in the list
                <BookCard key={book.id} {...book} onRemove={onRemove} />
            ))}
        </section>
    );
}
    export default BookList;
    
