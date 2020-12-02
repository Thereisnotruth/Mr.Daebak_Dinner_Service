import React from 'react';
import { Grid, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

const SelectNum = (props) => {
  const { initialValue, change } = props
  return (
    <Grid item xs={2}>
                    <FormControl  className='num'>
                      <InputLabel>개수</InputLabel>
                      <Select value={initialValue} onChange={change}>
                        <MenuItem value={0}>0</MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
  )
}

export default SelectNum;