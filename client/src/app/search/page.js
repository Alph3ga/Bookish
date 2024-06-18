'use client'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react';
import axios from 'axios';
import BookInfo from '../../components/BookInfo';

import '@/styles/index.css'

export default function Page(){
    const [books, setBooks] = useState([]);
    const params= useSearchParams();

    useEffect(() => {
        axios.get((process.env.SERVER || "http://localhost")+":8080/search?query="
        + params.get('search_text')).then((response)=>{
            setBooks(response.data);
        })
        }, []);

    return (
    <div style={{maxHeight: '85vh', overflowY: 'auto' }}>
        {books.map((book, index) => (
        <BookInfo
            key={index}
            title={book.title}
            authors={book.authors}
            description={book.description}
            price={book.price}
            image={book.image}
        />
        ))}
    </div>
    );
}