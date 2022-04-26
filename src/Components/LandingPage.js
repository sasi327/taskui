import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase } from '@mui/material';
import '../css/landing.css'


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '100%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing()})`,
    transition: theme.transitions.create('width'),
    width: '300px',
    [theme.breakpoints.up('md')]: {
      width: '500px',
      
    },
  },
}));

function LandingPage() {
  return (
    <div>
      <div class="lead-banner">
        <img src="https://p0.pikist.com/photos/775/947/milwaukee-art-museum-light-modern-architecture.jpg" />
        <div class="banner-content">
          <div class="wrapper">
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase 
                color='error'
                placeholder="Search Here Experts,Articles,Exams,Courses"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </div>
        </div>
      </div>

    </div>


  )
}

export default LandingPage