import { useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const urlEndpoint = 'http://localhost:5001/dinos';

export default function DinoCard() {
    const [dinos, setDinos] = useState([]);
    // const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${urlEndpoint}/all`).then((response) => {
            setDinos(response.data.dinos);
        });
    }, []);

    return (

        <div className='dinoCard'>
          {dinos.map((dino) => (
            <div key={dino.id}>
            <Card style={{ width: '18rem' }}>
            <Card.Body>
            <Card.Title className="cardTitle">{dino.name}</Card.Title>
            <Card.Text className="cardText">{dino.maker}</Card.Text>
            </Card.Body>
            </Card>
                </div>
            ))}
        </div>
    );
};