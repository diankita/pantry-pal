'use client';
// TODO remove unused
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useEffect, useState } from 'react';
import { setTopNavConfig } from '@/lib/features/navigation/navigationSlice';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { fetchWithTimeout } from '@/services/api';
import { Fab, Paper } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';

export default function Page() {
  const dispatch = useAppDispatch();
  const [recipeList, setRecipeList] = useState([]);
  const [categories, setCategories] = useState([]);
  // const topNavConfig = useAppSelector(state => state.navigation.topNav);
  useEffect(() => {
    setCategories([
      {
        name: 'Seasonal',
        image:
          'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Seafood',
        image:
          'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Everyday',
        image:
          'https://images.unsplash.com/photo-1505714197102-6ae95091ed70?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Vegan',
        image:
          'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Desserts',
        image:
          'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Healthy',
        image:
          'https://images.unsplash.com/photo-1540914124281-342587941389?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        name: 'Quick',
        image:
          'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ]);
    dispatch(
      setTopNavConfig({
        visible: true,
        title: 'Home',
        showBackButton: false,
      })
    );

    fetchWithTimeout(`http://localhost:3001/recipe/random`).then((data) => {
      setRecipeList(data);
    });
  }, [dispatch]);

  return (
    // TODO fix rendering error
    <Container
      sx={{
        height: 'calc(100% - 3.5rem)',
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '2rem',
        paddingTop: '0.5rem',
      }}>
      <Box display={'flex'} gap={2}>
        <Box
          position={'relative'}
          width={'4rem'}
          sx={{ aspectRatio: '1', borderRadius: '50%' }}>
          <Image
            src="/lebron_james.png"
            priority
            alt="PantryPal Logo"
            fill={true}
            style={{ objectFit: 'cover', borderRadius: '50%' }}
          />
        </Box>
        <Box flex={1} margin={'auto'}>
          <Typography component={'p'} variant="h6" sx={{ fontWeight: 'bold' }}>
            Hi Lebron
          </Typography>
          <Typography>Who are you cooking today?</Typography>
        </Box>
        <IconButton
          onClick={() => handleDelete(inventory.id)}
          aria-label="delete"
          sx={{ alignSelf: 'center' }}>
          <NotificationsNoneIcon />
        </IconButton>
      </Box>

      <Box>
        <Typography component={'p'} variant="h5" sx={{ fontWeight: 'bold' }}>
          Category
        </Typography>
        <Box
          margin={'auto'}
          display={'flex'}
          gap={2}
          overflow={'auto'}
          width={'100%'}>
          {categories.length > 0 &&
            categories.map((category, index) => (
              <Box key={index}>
                <Box
                  position={'relative'}
                  width={'5.5rem'}
                  sx={{ aspectRatio: '1' }}>
                  <Image
                    priority
                    src={category.image}
                    alt={category.name}
                    fill={true}
                    sizes="100%"
                    style={{ objectFit: 'cover', borderRadius: '10%' }}
                  />
                </Box>
                <Typography component={'p'} variant="p" textAlign={'center'}>
                  {category.name}
                </Typography>
              </Box>
            ))}
        </Box>
      </Box>

      <Box>
        <Typography component={'p'} variant="h5" sx={{ fontWeight: 'bold' }}>
          Featured Recipes
        </Typography>
        <Typography component={'p'} variant="subtitle">
          Get lots of recipe inspiration delivered straight to your palm
        </Typography>
        {recipeList.length > 0 &&
          recipeList.map((recipe, index) => (
            <Box key={recipe.id} marginY={'1rem'} sx={{ position: 'relative' }}>
              <Paper
                variant="elevation"
                width={'100%'}
                sx={{
                  aspectRatio: '6/4',
                  position: 'relative',
                  borderRadius: '5%',
                }}>
                <Image
                  priority
                  src={recipe.image}
                  alt="PantryPal Logo"
                  fill={true}
                  style={{ objectFit: 'cover', borderRadius: '12px' }}
                />
              </Paper>
              <Fab
                color="secondary"
                sx={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <FavoriteBorderIcon />
              </Fab>
              <Typography
                component={'p'}
                variant="h6"
                sx={{ paddingX: '.3rem' }}>
                {recipe.title}
              </Typography>
            </Box>
          ))}
      </Box>
    </Container>
  );
}
