import { CircularProgress, Box, Typography } from '@mui/material';
export default function LoadingPage() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
            <Box sx={{marginBottom: '20px'}}>
                <Typography variant='h3'>Loading</Typography>
            </Box>
            <CircularProgress />
        </Box>
    )
}