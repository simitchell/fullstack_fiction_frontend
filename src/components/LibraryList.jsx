import { useState, useEffect } from 'react';
import { OuterContainer } from './MyStyles';

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
        <OuterContainer>
            <h1>Fullstack Fiction Library</h1>
            <h2>Pulled from my Fullstack Fiction API</h2>
            <div className="topDisplay">
                <ul>
                    {libraryList?.map((book, index) => {
                        return (
                            <li key={index}>
                                {book.title} - {book.author} - {book.year}
                            </li>
                        )
                    })}
                </ul>
            </div>
            {/* <div className="cardDisplay">
                return (
                    <div key={index} className="card">
                        <h2>{book.title}</h2>
                    </div>
                )
            </div> */}
        </OuterContainer>
    );
};