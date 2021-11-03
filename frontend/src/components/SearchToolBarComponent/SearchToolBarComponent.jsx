import React from 'react'
import PropTypes from 'prop-types';
import { TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import ClearIcon from '@mui/icons-material/Clear'


const SearchToolBarComponent = (props) => {
  return (
    <div style={{marginBottom: '20px'}}>
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Buscar…"
        style={{marginTop: '10px', marginButtom: '10px', width: '100%'}}
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? 'visible' : 'hidden' }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
      />
    </div>
  )
}

SearchToolBarComponent.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};



export default SearchToolBarComponent



