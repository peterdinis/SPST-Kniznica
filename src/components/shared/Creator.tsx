import { Container, Typography } from "@mui/material";

const Creator: React.FC = () => {
    return (
        <Container>
            <Typography mt={3} fontSize={20}>Author applikácie <a className="text-red-400" href="https://www.facebook.com/peto.dinis/">Peter Dinis</a></Typography>
        </Container>
    )
}

export default Creator;