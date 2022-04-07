import { Reddit, Telegram, YouTube } from '@mui/icons-material';
import { Button, ButtonGroup, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styled from 'styled-components';
import { EqualSpacePaperContainer, FitContentPaperContainer, SmallButtonContainer } from './styles/containers.styled';
import { MiniTitleText } from './styles/texts.styled';

const StyledPaper = styled(Paper)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem 1rem 2rem;

    @media (max-width: 500px) {
        gap: 5px;
        flex-wrap: wrap;
    }
`;

const StyledTypography = styled(Typography)`
    @media (max-width: 500px) {
        order: 2;
    }
`;

const Logo = ({ children }) => {
    return (
        <StyledTypography variant='h2' component='h2' fontSize={24} fontWeight={400} color='white' letterSpacing={1}>
            {children}
        </StyledTypography>
    );
};

const StyledButton = styled(Button)`
    @media (max-width: 500px) {
        order: 3;
    }
`;

const CronosButton = ({ children }) => {
    return <StyledButton variant='outlined'>{children}</StyledButton>;
};

const Header = () => {
    return (
        <StyledPaper>
            <Logo>croocoin</Logo>
            <FitContentPaperContainer>
                <MiniTitleText>JOIN CROOCOIN COMMUNITY</MiniTitleText>
                <SmallButtonContainer>
                    <Telegram htmlColor='#31A8DD' />
                    <Reddit htmlColor='#FF4500' />
                    <YouTube htmlColor='#FF0000' />
                </SmallButtonContainer>
            </FitContentPaperContainer>
            <CronosButton>Connect</CronosButton>
        </StyledPaper>
    );
};

export default Header;
