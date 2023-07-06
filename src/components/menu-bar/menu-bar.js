import SearchIcon from '@mui/icons-material/Search';
import {
  AppBar,
  Box,
  InputAdornment,
  TextField,
  Toolbar,
  Typography
} from '@mui/material';
import { useLocation, Link } from 'react-router-dom';

const MenuBar = ({ searchTerm, setSearchTerm }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <AppBar
      position='static'
      sx={{ boxShadow: 'none', borderBottom: '1px solid #eee' }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            My Virtual Garage
          </Link>
        </Typography>
        {isHomePage && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '20px',
              background: '#f7f7f7',
              padding: '0 10px',
            }}
          >
            <TextField
              variant='outlined'
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder='Search by Manufacturer or Model...'
              sx={{
                borderRadius: '20px',
                width: { xs: '200px', sm: '350px' },
                transition: 'all 0.3s ease',
                '& .MuiInputBase-root': {
                  height: '40px',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'transparent',
                  },
                },
                '& .MuiOutlinedInput-input': {
                  padding: '10px 14px',
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon sx={{ color: 'rgba(0, 0, 0, 0.54)' }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
