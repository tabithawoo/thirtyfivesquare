import React from 'react';
import {Box,Grid,Typography} from '@material-ui/core';

export function ProductionDetails({production}) {
    production.collaborators.sort((first, second) => first.id - second.id);
    let collabNums = production.collaborators.length;
    let collabsHalf = Math.floor(collabNums/2);
    let collabsLeft = production.collaborators.slice(0,collabsHalf);
    let collabsRight = production.collaborators.slice(collabsHalf, collabNums-1);
return(
    <Box>
    <Typography variant='h6'>{production.title}</Typography>
    <Grid container>
        <Grid item xs={12} sm={6}>
            {collabsLeft.map((c) => {
                return(
                    <Typography variant='body1'>{c.role} <strong>{c.name}</strong></Typography>
                )
            })}
        </Grid>
        <Grid item xs={12} sm={6}>
            {collabsRight.map((c) => {
                return(
                    <Typography variant='body1'>{c.role} <strong>{c.name}</strong></Typography>
                )
            })}
        </Grid>
    </Grid>
    </Box>

)
}