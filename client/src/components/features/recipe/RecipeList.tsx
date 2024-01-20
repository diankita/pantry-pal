'use client';
import {fetchWithTimeout} from '@/services/api';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/navigation';
import {Recipe} from '@/lib/types';

export default function RecipeList() {
  const router = useRouter();
  const [recipeSuggestions, setRecipeSuggestions] = useState<Recipe[]>([]);
  // TODO conver to use RTK

  useEffect(() => {
    fetchWithTimeout(`http://localhost:3001/recipe/findByUserInventory/1`).then(
      (data) => {
        setRecipeSuggestions(data);
      }
    );
  }, []);
  const renderedRecipes = recipeSuggestions.map((recipe) => (
    <Card
      key={recipe.id}
      sx={{display: 'flex', my: 2, flexDirection: 'column'}}
      onClick={() => {
        router.push(`/recipe/${recipe.id}`);
      }}
    >
      <CardMedia
        component="img"
        sx={{height: '10rem', objectFit: 'fit'}}
        image={recipe.image}
        alt={recipe.title}
      />
      <CardContent sx={{flex: '1 1 auto', flexWrap: 'wrap'}}>
        <Typography
          component="div"
          variant="subtitle2"
          sx={{textTransform: 'capitalize', fontWeight: 'bold'}}
        >
          {recipe.title}
        </Typography>
      </CardContent>
    </Card>
  ));
  return <Box paddingX={1}>{renderedRecipes}</Box>;
}
