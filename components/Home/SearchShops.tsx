import { Box, Typography } from "@mui/material";

const SearchShops = () => {
    return (
        <Box sx={{ px: { xs: 2, md: 5 }, py: { xs: 2, md: 15 } }}>
            <Typography variant="h4" gutterBottom>Your One stop for all the shops</Typography>
            <Typography variant="body1">Order and manage your shopping directly with your shops.</Typography>
        </Box>
    )
}

export default SearchShops;