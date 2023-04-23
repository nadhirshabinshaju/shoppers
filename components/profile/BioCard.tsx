import {
    Box,
    Grid,
    IconButton,
    Stack,
    Typography,
} from '@mui/material';
import LinkedIn from '@mui/icons-material/LinkedIn';
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';
import Instagram from '@mui/icons-material/Instagram';


const socialIcons = <Stack
    direction={{ xs: 'row', md: 'row' }}
    textTransform={'none'}
    justifyContent={{ xs: 'center', md: 'left' }}
    alignItems={{ xs: 'center', md: 'center' }}
    spacing={{ xs: 1, md: 1 }}
>
    <IconButton sx={{ textTransform: 'none' }}>
        <LinkedIn />
    </IconButton>
    <IconButton sx={{ textTransform: 'none' }}>
        <FacebookOutlined />
    </IconButton>
    <IconButton sx={{ textTransform: 'none' }}>
        <Instagram />
    </IconButton>
</Stack>

export default function BioCard() {
    return (
        <Box>
            <Grid
                container
                columns={12}
                sx={{ justifyContent: 'center' }}
            >
                <Grid item xs={4} md={2}>
                    <Box
                        sx={{
                            minHeight: { xs: 150, md: 400 },
                            py: { xs: 5, md: 15 },
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'center' },
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                height: { xs: 240, md: 500 },
                                width: { xs: 120, md: 250 },
                                background: "url('/nbs-ai.jpg')",
                                backgroundSize: 'cover',
                                filter: 'grayscale(100)',
                            }}
                        >
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={8} md={6}>
                    <Box
                        sx={{
                            py: { xs: 5, md: 15 },
                            px: { xs: 5, md: 10 },
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%'
                            // textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                        <Box>
                            <Typography variant='h2' gutterBottom sx={{ fontSize: { xs: 36, md: 56 }, textTransform: 'capitalize' }}>
                                <Box sx={{ display: { xs: 'none', md: 'block' } }}>Nadhirsha Bin Shaju</Box>
                                <Box sx={{ display: { xs: 'block', md: 'none' } }}>Nadhirsha <br />Bin <br />Shaju</Box>
                            </Typography>
                            <Typography
                                variant='body1'
                                gutterBottom
                                sx={{ fontSize: { xs: 14, md: 18 }, fontWeight: 400 }}
                            >
                                Fullstack Software Developer
                            </Typography>
                            {socialIcons}
                        </Box>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}
