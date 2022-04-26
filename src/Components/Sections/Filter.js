import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Paper } from '@mui/material'
import { Box, padding } from '@mui/system'
import React from 'react'
import { category, contentType, Date, PartnerName } from '../../References/filterReferences'

function Filter() {
    return (
        <>
            <Box sx={{ display: 'flex', padding: '20px' }}>
                <Paper elevation={6}>
                    <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
                        <FormLabel component="legend">Content Type</FormLabel>
                        <FormGroup sx={{ color: 'black' }}>
                            {contentType.map((data, index) => {
                                return <FormControlLabel key={index}
                                    control={
                                        <Checkbox />
                                    }
                                    label={data.detail}
                                />
                            })}

                        </FormGroup>
                        <FormLabel component="legend" sx={{ marginTop: "30px" }}>Category</FormLabel>
                        <FormGroup sx={{ color: 'black' }}>
                            {category.map((data, index) => {
                                return <FormControlLabel key={index}
                                    control={
                                        <Checkbox />
                                    }
                                    label={data.detail}
                                />
                            })}

                        </FormGroup>
                        <FormLabel component="legend" sx={{ marginTop: "30px" }}>Partner Name</FormLabel>
                        <FormGroup sx={{ color: 'black' }}>
                            {PartnerName.map((data, index) => {
                                return <FormControlLabel key={index}
                                    control={
                                        <Checkbox />
                                    }
                                    label={data.detail}
                                />
                            })}

                        </FormGroup>
                        <FormLabel component="legend" sx={{ marginTop: "30px" }}>Date</FormLabel>
                        <FormGroup sx={{ color: 'black' }}>
                            {Date.map((data, index) => {
                                return <FormControlLabel key={index}
                                    control={
                                        <Checkbox />
                                    }
                                    label={data.detail}
                                />
                            })}

                        </FormGroup>
                        <div style={{marginTop:'20px'}}>
                            <Button variant="contained" color="warning" >
                                Apply Filters
                            </Button>
                            <Button variant="text" sx={{ color: 'black'}}>
                                clear Filters
                            </Button>
                        </div>
                    </FormControl>
                </Paper>
            </Box>
        </>
    )
}

export default Filter