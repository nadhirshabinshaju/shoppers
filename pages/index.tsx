import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import LinkedIn from '@mui/icons-material/LinkedIn';
import FacebookOutlined from '@mui/icons-material/FacebookOutlined';
import Instagram from '@mui/icons-material/Instagram';
import TypewriterComponent from 'typewriter-effect';
import BioCard from '@/components/profile/BioCard';

const inter = Inter({ subsets: ['latin'] });

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Nadhirsha Bin Shaju | Fullstack software developer</title>
        <meta name='description' content='Fullstack software developer' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
      <BioCard />
      </Container>
    </>
  );
}
