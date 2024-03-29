import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import Service from "../Service/Service";
import fluoride from "../../../images/fluoride.png";
import cavity from "../../../images/cavity.png";
import whitening from "../../../images/whitening.png";
import Typography from "@mui/material/Typography";

const services = [
    {
        name: "fluoride",
        description:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
        img: fluoride,
    },
    {
        name: "cavity",
        description:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
        img: cavity,
    },
    {
        name: "whitening",
        description:
            "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
        img: whitening,
    },
];
const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography
                    sx={{ fontWeight: 500, m: 2, color: "success.main" }}
                    variant="h6"
                    component="div"
                >
                    OUR SERVICES
                </Typography>
                <Typography
                    variant="h4"
                    sx={{ fontWeight: 600, m: 5 }}
                    component="div"
                >
                    Services we Povided
                </Typography>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {services.map((service) => (
                        <Service key={service.name} service={service}></Service>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
