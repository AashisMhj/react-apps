import { Card as BootstrapCard, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function Card({ title, id, image }) {
    return (
        <Col className='col-lg-4'>
            <BootstrapCard >
                <img className='card-img-top' src={`http://localhost:5001/images/${image}`} alt={title} />
                <div className="card-body">
                    <h5>{title}</h5>
                    <Link to={`/book/${id}`}>Detail</Link>
                </div>
            </BootstrapCard>
        </Col>
    )
}