import { useState, useEffect } from "react"
import { Row } from "react-bootstrap";
import Card from "./Card";


export default function ListPage(){
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/api/books`)
            .then(response => response.json())
            .then(result => setBooks(result.data || []))
            .catch(error => console.log(error));
    }, [])
    return (
        <section className="py-2">
            <h1 className="text-center mx-5">Browse and Buy</h1>
            <Row>
                {
                    books.map((item) => <Card key={item.id} title={item.title} id={item.id} image={item.image} />)
                }
            </Row>
        </section>
    )
}