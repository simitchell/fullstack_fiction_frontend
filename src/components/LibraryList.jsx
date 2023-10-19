import { useState, useEffect } from 'react';

export const LibraryList = () => {
    const [libraryList, setLibraryList] = useState([]);

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/books/';
        const getList = async () => {
            const data = await fetch(url).then(response =>
                response.json());
                setLibraryList(data);
        }
        getList();
    }, []);

    return (
        <ul>
            {libraryList?.map((book, index) => {
                return (
                    <li key={index}>
                        {book.title} - {book.author}
                    </li>
                )
            })}
        </ul>
    );
};