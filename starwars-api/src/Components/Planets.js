import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

export default function Planets({ data }) {
    return (
        <>
        <h1>Planets</h1>
        <Grid columns={3}>
        {data.map((planets, i) => {
            return (
                <Grid.Column key={i}>
                    <Card>
                        <Card.Content>
                            <Card.Header>{planets.name}</Card.Header>
                            <Card.Description>
                                <strong>Climate</strong>
                                <p>{planets.climate}</p>
                                <strong>Diameter</strong>
                                <p>{planets.diameter}</p>
                                <strong>population</strong>
                                <p>{planets.population}</p>
                                <strong>Gravity</strong>
                                <p>{planets.gravity}</p>
                                <strong>Orbital Period</strong>
                                <p>{planets.orbital_period}</p>
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            )
        })}
        </Grid>
    </>
    )
}
