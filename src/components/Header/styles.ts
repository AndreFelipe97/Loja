import styled from 'styled-components';
import BkgHeader from '../../assets/images/download.jpg';
import { moveInRight, moveInLeft, moveInBottom } from './animations';

export const Header = styled.header`
    height: 95vh;
    background-image:
        linear-gradient(
            to right bottom,
            rgba(0, 0, 0, .8),
            rgba(54, 54, 54, .8)),
        url(${BkgHeader});
    background-size: cover;
    background-position: top;
    position: relative;

    clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`;

export const LogoBox = styled.div`
    position: absolute;
    top: 40px;
    left: 40px;

    .logo {
        height: 35px;
        animation: ${moveInRight} 1s ease-out;
    }
`;

export const TextBox = styled.div`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

export const HeadingPrimary = styled.h1`
    color: #fff;
    text-transform: uppercase;
    backface-visibility: hidden;
    margin-bottom: 60px;

    .heading-primary-main {
        display: block;
        font-size: 50px;
        font-weight: 400;
        letter-spacing: 35px;
        animation: ${moveInLeft} 1s ease-out;
    }

    .heading-primary-sub {
        display: block;
        font-size: 20px;
        font-weight: 700;
        letter-spacing: 17.4px;
        animation: ${moveInRight} 1s ease-out;
    }
`;