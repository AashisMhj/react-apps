import { Card as BootstrapCard, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Card({ title, id, image }) {
    return (
        <Col className='col-lg-3 col-sm-6'>
            <BootstrapCard className='p-2 m-2' >
                <img className='card-img-top bg-black' style={{aspectRatio: '1/1', objectFit: 'contain'}} src={`${process.env.REACT_APP_API_URL}/images/${image}`} alt={title} />
                <div className="card-body">
                    <h5>{title}</h5>
                    <Link to={`/book/${id}`}>Detail</Link>
                </div>
            </BootstrapCard>
        </Col>
    )
}