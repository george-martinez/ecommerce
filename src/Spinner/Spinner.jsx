import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function Spinner() {
  return (
    <Box sx={{ display: 'flex', justifyContent:'center', mt:'20px'}}>
      <CircularProgress />
    </Box>
  );
}