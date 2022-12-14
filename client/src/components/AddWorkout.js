import React, { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EXERCISE } from "../utils/mutations";
import { QUERY_ME, QUERY_EXERCISES, QUERY_EXERCISE } from "../utils/queries"
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Auth from "../utils/auth";

const theme = createTheme();

const AddWorkout = () => {
    const [exerciseText, setText] = useState({
        exerciseType: "",
        title: "",
        weight: "",
        sets: "",
        reps: "",
        distance: "",
        time: "",
        username: "",
    });
    const [addExercise, { error }] = useMutation(ADD_EXERCISE, {
        update(cache, { data: { addExercise } }) {
            try {
                const myUsername = Auth.getProfile().data.username
                console.log(myUsername)
                // const { me } = cache.readQuery({
                //     query: QUERY_ME,
                //     variables: { username: myUsername }
                // });
                cache.writeQuery({
                    query: QUERY_ME,
                    variables: { username: myUsername },
                    data: { exercises: [addExercise] },
                });
                // update exercise array cache
                cache.writeQuery({
                    query: QUERY_EXERCISES,
                    variables: { username: myUsername },
                    data: { exercises: [addExercise, ...exerciseText] }
                });

            } catch (error) {
                console.warn('Users first Exercise inserted!')
            }


        }
    });
    const ref = useRef(null);

    const handleChange = (event) => {
        const { name, value } = event.target;
        exerciseText.username = Auth.getProfile().data.username;
        setText({
            ...exerciseText,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await addExercise({
                variables: { ...exerciseText }
            });
            console.log(exerciseText)

            setText({
                exerciseType: "",
                title: "",
                weight: "",
                sets: "",
                reps: "",
                distance: "",
                time: "",
                username: "",
            });
        } catch (e) {
            console.error(e);
        }
    };



    return (
        <ThemeProvider theme={theme}>
            <Container componenet="main" maxWidth="sm">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Add your latest workout!
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            ref={ref}
                            margin="normal"
                            required
                            fullWidth
                            name="title"
                            label="What did your workout consist of and how did you feel after?"
                            type="title"
                            onChange={handleChange}
                            value={exerciseText.title}
                            autoComplete="title"
                            autoFocus
                        />
                        <TextField
                            ref={ref}
                            margin="normal"
                            required
                            fullWidth
                            name="exerciseType"
                            label="What kind of exercise? (ex: fitness and cardio"
                            type="exerciseType"
                            onChange={handleChange}
                            value={exerciseText.exerciseType}
                            // autoComplete="exerciseType"
                            autoFocus
                        />
                        <TextField
                            ref={ref}
                            margin="normal"
                            fullWidth
                            name="weight"
                            label="weight"
                            type="weight"
                            onChange={handleChange}
                            value={exerciseText.weight}
                            // autoComplete="weight"
                            autoFocus
                        />
                        <TextField
                            ref={ref}
                            margin="normal"
                            fullWidth
                            name="sets"
                            label="sets"
                            type="sets"
                            onChange={handleChange}
                            value={exerciseText.sets}
                            // autoComplete="sets"
                            autoFocus
                        />
                        <TextField
                            ref={ref}
                            margin="normal"
                            fullWidth
                            name="reps"
                            label="reps"
                            type="reps"
                            onChange={handleChange}
                            value={exerciseText.reps}
                            // autoComplete="reps"
                            autoFocus
                        />
                        <TextField
                            ref={ref}
                            margin="normal"
                            fullWidth
                            name="distance"
                            label="distance"
                            type="distance"
                            onChange={handleChange}
                            value={exerciseText.distance}
                            // autoComplete="distance"
                            autoFocus
                        />
                        <TextField
                            ref={ref}
                            margin="normal"
                            fullWidth
                            name="time"
                            label="time"
                            type="measurement"
                            onChange={handleChange}
                            value={exerciseText.time}
                            // autoComplete="time"
                            autoFocus
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Submit Workout
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    )
};

export default AddWorkout;