import React, { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EXERCISE } from "../utils/mutations";
import { QUERY_ME } from "../utils/queries"
import Avatar from "@mui/material/Avatar";
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

const AddWorkout = () => {
    const [exerciseText, setText] = useState('');
    const [addExercise, { error }] = useMutation(ADD_EXERCISE, {
        update(cache, { data: { addExercise } })
    });
    const ref = useRef(null);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setText({
            ...exerciseText,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addExercise({
                variables: { ...exerciseText },
            });
            return data;
        } catch (e) {
            console.error(e);
        }
    }
}