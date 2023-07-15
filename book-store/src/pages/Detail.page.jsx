import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Button } from "react-bootstrap";
import { loadStripe } from "@stripe/stripe-js";

export default function DetailPage() {
    const [data, setData] = useState({ id: '', title: '', image: '', price: 0 });
    const { id } = useParams();

    async function handleSubmit(event) {
        event.preventDefault();
        const stripe = await loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY)
        const body = {
            product_id: data.id
        };
        const headers = {
            "Content-Type": "application/json"
        };
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/charge`, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            });
            const session = await response.json();
            stripe.redirectToCheckout({
                sessionId: session.id
            });
        } catch (error) {
            console.log(error);

        }

    }
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/books/${id}`)
            .then(response => response.json())
            .then(data => setData(data.data))
            .catch(error => console.log(error))
    }, [id]);

    return (
        <div className="vh-100">
            <section className="py-2 ">
                <h1 className="text-center">{data.title}</h1>
                <div className="row m-4">
                    <div className="col col-lg-6">
                        <img className="w-75" style={{aspectRatio: '1/1', objectFit: 'contain', objectPosition: 'center'}} src={`${process.env.REACT_APP_API_URL}/images/${data.image}`} alt={data.title} />
                    </div>
                    <div className="col col-lg-6">
                        <dl className="row bg-white rounded-lg p-8">
                            <dt className="col col-lg-6">Price</dt>
                            <dd className="col col-lg-6">Rs {data.price}</dd>
                            <dt className="col col-lg-6">ISBN</dt>
                            <dd className="col col-lg-6">{data.isbn}</dd>
                            <dt className="col col-lg-6">Publisher</dt>
                            <dd className="col col-lg-6">{data.publisher}</dd>
                            <dt className="col col-lg-6">Author</dt>
                            <dd className="col col-lg-6">{data.authors}</dd>
                        </dl>
                        <div className="row">
                            {data.description}
                        </div>
                    </div>
                </div>
                <div className="row m-4">
                    <div className="col col-lg-4 align-self-center">
                        <Button className="w-100 m-4" onClick={handleSubmit} variant="primary">Buy</Button>
                    </div>
                </div>

            </section>
        </div>
    )
}