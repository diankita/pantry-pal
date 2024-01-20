'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchWithTimeout } from '@/services/api';
import Fab from '@mui/material/Fab';
import DOMPurify from 'dompurify';
import { useAppDispatch } from '@/lib/hooks';
import { setTopNavConfig } from '@/lib/features/navigation/navigationSlice';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import { useRouter } from 'next/navigation';

export default function Page({ params }: { params: { recipeId: string } }) {
  const router = useRouter();
  const recipeId = params.recipeId;

  const [recipe, setRecipe] = useState(null);
  const [sanitizedSummary, setSanitizedSummary] = useState('');
  const [sanitizedInstructions, setSanitizedInstructions] = useState('');
  const [tabValue, setTabValue] = useState(0);

  const handleChange = (newValue) => {
    setTabValue(newValue);
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setTopNavConfig({
        visible: false,
        title: '',
        showBackButton: false,
      })
    );
    fetchWithTimeout(`http://localhost:3001/recipe/details/${recipeId}`).then(
      (data) => {
        setRecipe(data);
        if (data?.summary) {
          // const sanitized = DOMPurify.sanitize(data.summary);
          setSanitizedSummary(DOMPurify.sanitize(data.summary));
          setSanitizedInstructions(DOMPurify.sanitize(data.instructions));
          // const sanitized = DOMPurify.sanitize(data.summary);
          // setSanitizedSummary(sanitized);
        }
      }
    );
  }, [recipeId]);

  const renderInstruction = (instruction: string) => {
    let newInstructions;
    if (instruction.includes('<') && instruction.includes('>')) {
      // If the instruction contains HTML tags, render as HTML
      newInstructions = splitHtmlInstructions(instruction);
      // return <div dangerouslySetInnerHTML={{ __html: instruction }} />;
    } else {
      newInstructions = splitTextInstructions(instruction);
      // Otherwise, render as plain text
    }
    // console.log(newInstructions);
    return newInstructions.map((step, index) => (
      <React.Fragment key={index}>
        <ListItem>
          <ListItemText primary={`Step ${index + 1}`} secondary={step} />
        </ListItem>
        <Divider />
      </React.Fragment>
    ));
    // <Typography variant="p" component="p">
    //   {newInstruction: newInstructions}
    // </Typography>
  };

  const splitTextInstructions = (text) => {
    // Split text using a regex that looks for a period followed by a space and a capital letter or a newline
    return text.split('\n');
    // return text.split(/\. (?=[A-Z])|\n/);
  };

  const splitHtmlInstructions = (html) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const items = doc.querySelectorAll('ol > li');
    return Array.from(items).map((li) => li.textContent);
  };

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <Box position={'relative'}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          padding: '1rem',
          zIndex: 1,
          left: 1,
          right: 1,
        }}
      >
        <Fab
          color="secondary"
          sx={{ paddingRight: '5px' }}
          onClick={() => {
            router.back();
          }}
        >
          <ArrowBackIosNewIcon />
        </Fab>
        <Fab color="secondary">
          <FavoriteBorderIcon />
        </Fab>
      </Box>
      <Box position={'relative'} width={'100%'} sx={{ aspectRatio: '4/3' }}>
        <Image
          priority
          src={recipe.image}
          alt={recipe.title}
          fill={true}
          // sx={{width: '6rem', height: '6rem', objectFit: 'cover'}}
        />
      </Box>
      <Paper
        sx={{
          position: 'relative',
          bottom: '2rem',
          // marginX: '.5rem',
          borderRadius: '1rem',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <Typography variant="h5" component="h1">
          {recipe.title}
        </Typography>
        {/* <Typography variant="p" component="p">
          <AccessTimeIcon />
          {recipe.readyInMinutes} mins
        </Typography> */}

        {/* <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <Rating name="read-only" value={recipe.rating} readOnly />
        <Typography component="span" sx={{ marginLeft: '8px' }}>
          ({recipe.reviews.length} Reviews)
        </Typography>
      </Box> */}
        <div dangerouslySetInnerHTML={{ __html: sanitizedSummary }} />
        {/* <Typography variant="body1" component="p" sx={{ my: 2 }}>
          {recipe.summary}
        </Typography> */}
        <Box>
          <Tabs
            value={tabValue}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Steps" />
            <Tab label="Ingredients" />
          </Tabs>
          {tabValue === 0 && (
            <List>
              {/* <Typography variant="h6">Steps</Typography> */}
              {renderInstruction(sanitizedInstructions)}
            </List>
          )}
          {tabValue === 1 && (
            <List>
              {/* <Typography variant="h6">Ingredients</Typography> */}
              {recipe.ingredients.map((ingredient, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemText
                      sx={{ textTransform: 'capitalize' }}
                      primary={ingredient.name}
                      secondary={`${ingredient.amount} ${ingredient.unit}`}
                    />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          )}
        </Box>
      </Paper>
    </Box>
  );
}
