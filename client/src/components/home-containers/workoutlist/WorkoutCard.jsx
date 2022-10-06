import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import "../../css/workoutcard.css";
import { fontSize } from '@mui/system';

export default function WorkoutCard() {
  return (
    <ImageList sx={{ width: 820, height: 450, padding: 1 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader sx={{ textAlign: 'center', fontSize: 30, fontStyle: "san-serif", fontStyle: "italic", color: "black", fontWeight: "bold", textDecoration: "underline" }} component="div">Workouts</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img className='img'
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgL0O4AOtaPQ3MN5iehj08_Bq9bUEgEAjhpg&usqp=CAU',
    title: 'Chest',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://cdn.mos.cms.futurecdn.net/zkrwxQVtsn3Yi2Pgmh89eN-1200-80.jpg',
    title: 'Bicep',
    url: "https://www.livritefitness.com/workouts/bicep-workouts#barbell_curls"
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqBSd3WTIhSGkXpI1xupkGdnLBIQjPCrLcNw&usqp=CAU',
    title: 'Tricep',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRszD-qY2sNipGaup_CulToghHS5YXcO_Tkfg&usqp=CAU',
    title: 'Back',
    cols: 2,
  },
  {
    img: 'https://seannal.com/wp-content/uploads/2015/03/best-shoulder-exercises-for-mass.jpg',
    title: 'Shoulder',
    cols: 2,
  },
  {
    img: 'https://www.muscleandfitness.com/wp-content/uploads/2015/01/heavy-squatting-bigger-arms.jpg?quality=86&strip=all',
    title: 'Legs',
    rows: 2,
    cols: 2,
    featured: true,
  },
];