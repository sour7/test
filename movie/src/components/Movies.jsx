import React from 'react'
import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Box = styled.div`
    /* border:2px solid red; */
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 12px;
    align-content: center;
    
`

const Container= styled.div`
    width:70%;
    margin:auto;
    
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;


`
const Text= styled.h1`
    color: #870606;
    text-align: center;
`





export const Movies = () => {
    const [data, setData] = useState([])
    console.log(data.map((e) => e.name))

    useEffect(() => {


        fetch('http://localhost:8000/allmovies')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    return (
        <div>
            <Text>Moives List</Text>
            <Container>
            {
                data.map((e) =>
                    <Box key={e.id}>
                        <h2>Name:{e.name}</h2>
                        <h5>Rating:{e.ratings}</h5>
                        <p>Released date:{e.release_date}</p>
                    </Box>
                )
            }
            </Container>


        </div>
    )
}


