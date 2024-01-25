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
import {useEffect, useState} from 'react';
import {fetchWithTimeout} from '@/services/api';
import Fab from '@mui/material/Fab';
import DOMPurify from 'dompurify';
import {useAppDispatch} from '@/lib/hooks';
import {setTopNavConfig} from '@/lib/features/navigation/navigationSlice';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';
import {useRouter} from 'next/navigation';
import {Recipe, Ingredient} from '@/lib/types';

export default function Page({params}: {params: {recipeId: string}}) {
  const router = useRouter();
  const recipeId = params.recipeId;

  const [recipe, setRecipe] = useState<Recipe>();
  const [sanitizedSummary, setSanitizedSummary] = useState<string>('');
  const [sanitizedInstructions, setSanitizedInstructions] = useState<string>('');
  const [tabValue, setTabValue] = useState<0 | 1>(0);

  const handleChange = (newValue: 0 | 1) => {
    setTabValue(newValue);
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setTopNavConfig({
        visible: false,
        showBackButton: false,
      })
    );

    fetchWithTimeout(`http://localhost:3001/recipe/details/${recipeId}`).then(
      (data) => {
        setRecipe(data);
        if (data?.summary) {
          setSanitizedSummary(DOMPurify.sanitize(data.summary));
          setSanitizedInstructions(DOMPurify.sanitize(data.instructions));
        }
      }
    );
  }, [recipeId]);

  const renderInstruction = (instruction: string) => {
    let splittedInstructions;
    if (instruction.includes('<') && instruction.includes('>')) {
      // If the instruction contains HTML tags, render as HTML
      splittedInstructions = splitHtmlInstructions(instruction);
    } else {
      // Otherwise, render as plain text
      splittedInstructions = splitTextInstructions(instruction);
    }
    return (
      splittedInstructions &&
      splittedInstructions.map((step: string | null, index: number) => (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemText primary={`Step ${index + 1}`} secondary={step} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))
    );
  };

  const splitTextInstructions = (text: string) => {
    return text.split('\n');
  };

  const splitHtmlInstructions = (html: string) => {
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
          sx={{paddingRight: '5px'}}
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
      <Box position={'relative'} width={'100%'} sx={{aspectRatio: '4/3'}}>
        <Image priority src={recipe.image} alt={recipe.title} fill={true} />
      </Box>
      <Paper
        sx={{
          position: 'relative',
          bottom: '2rem',
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
        <div dangerouslySetInnerHTML={{__html: sanitizedSummary}} />
        <Box>
          <Tabs
            value={tabValue}
            onChange={(e, newValue) => handleChange(newValue)}
            indicatorColor="primary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Steps" />
            <Tab label="Ingredients" />
          </Tabs>
          {tabValue === 0 && (
            <List>{renderInstruction(sanitizedInstructions)}</List>
          )}
          {tabValue === 1 && (
            <List>
              {recipe.ingredients.map(
                (ingredient: Ingredient, index: number) => (
                  <React.Fragment key={index}>
                    <ListItem>
                      <ListItemText
                        sx={{textTransform: 'capitalize'}}
                        primary={ingredient.name}
                        secondary={`${ingredient.amount} ${ingredient.unit}`}
                      />
                    </ListItem>
                    <Divider />
                  </React.Fragment>
                )
              )}
            </List>
          )}
        </Box>
      </Paper>
    </Box>
  );
}
