import { NavLink } from "react-router-dom";
import styled from '@emotion/styled';
import { FaBars, FaTimes } from "react-icons/fa";

export const Nav = styled.nav`
    /* position: absolute;
    width: 1440px;
    height: 108px;
    left: -29px;
    top: 0px; */

    display: flex;
    flex-direction: row;
    align-items: center;

    height: 108px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.8) -11.57%, rgba(250, 250, 250, 0.4) 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(30px);
    
    width: calc(100% - 58px);
    border-radius: 0 0 20px 20px;
    justify-content: space-between;
    z-index: 10;
`;

export const NavLogo = styled.div`
    margin-left: 11%;
    cursor: pointer;
`;

export const LogoImg = styled.img`
    max-width: 277px;
    width: 100%;
    height: auto;
    border-radius: 0px;


`;

export const ContainerIcons = styled.div`

`;

export const IconBars = styled(FaBars)`
    display: none;
    color: var(--clr-primary);
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        font-size: 1.8rem;
        top: 0;
        right: 0;
        transform: translate(-100%, 98%);
        
        cursor: pointer;
    }
`;

export const IconTimes = styled(FaTimes)`
    display: none;
    color: var(--clr-primary);
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 98%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    
    list-style: none;
    text-align: center;

    /* margin-left: 11%; */
    margin-right: 6%;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 80px;
        display: none;
        background: #fff;
        height: 100%;

        &.active {
            display: block;
            transition: all 0.5s ease;
            z-index: 2;
        }
    }
`;

export const NavItem = styled.li`
    /* line-height: 40px; */
    position: relative;

    margin: 1.5rem;

    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: var(--clr-primary);

        transform: scaleX(0);
        transform-origin: right;
        transition: transform 250ms ease-in;

        z-index: 2;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }
`;


export const StyledNavLink = styled(NavLink)`
    font-family: Arial;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;

    text-decoration: none;
    color: var(--clr-secondary);

    &:hover {
        color: var(--clr-primary);
    }
`;

export const NavItemButton = styled.li`
    position: relative;

    margin: 1.5rem;
`;

export const NavButton = styled(NavLink)`
    font-family: Arial;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;

    text-decoration: none;
    color: var(--clr-secondary);

    border: 2px solid var(--clr-primary);
    border-radius: 80px;
    padding: 8px 21px 8px 21px;

    &:hover {
        background: var(--clr-primary);
        color: #fff
    }
`;