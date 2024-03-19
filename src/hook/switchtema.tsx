import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    body {
        transition: background 0.2s;
        &[data-theme='dark'] {
            // @ts-expect-error TS(2339): Property 'darkTextColor' does not exist on type 'E... Remove this comment to see the full error message
            color: ${props => props.darkTextColor};
            // @ts-expect-error TS(2339): Property 'darkColor' does not exist on type 'Execu... Remove this comment to see the full error message
            background: ${props => props.darkColor};
        }
        &[data-theme='light'] {
            // @ts-expect-error TS(2339): Property 'lightTextColor' does not exist on type '... Remove this comment to see the full error message
            color: ${props => props.lightTextColor};
            // @ts-expect-error TS(2339): Property 'lightColor' does not exist on type 'Exec... Remove this comment to see the full error message
            background: ${props => props.lightColor};
        }
    }
`;

const ThemeSwitcherWrapper = styled.div``;

const Button = styled.button`
    display: block;
    position: relative;
    width: 48px;
    height: 22px;
    padding: 0;
    border-color: black;
    background: cornsilk;
    border-radius: 30px;
    cursor: pointer;

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 12px;
        width: 16px;
        height: 16px;
        background: black;
        -webkit-transform: translateZ(0) translate(-50%, -50%);
        transform: translateZ(0) translate(-50%, -50%);
        border-radius: 30px;
        transition: transform 0.2s cubic-bezier(0.75, 0, 0.08, 1) 0s,
        -webkit-transform 0.2s cubic-bezier(0.75, 0, 0.08, 1) 0s;
    }

    &.active::after {
        transform: translateX(24px) translate(-50%, -50%);
    }
`;

class ThemeSwitcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme:
                localStorage.getItem("theme") !== null
                    ? localStorage.getItem("theme")
                    : "light"
        };
    }

    componentDidMount = () => {
        // @ts-expect-error TS(2339): Property 'theme' does not exist on type 'Readonly<... Remove this comment to see the full error message
        const { theme } = this.state;
        // @ts-expect-error TS(2339): Property 'cssSelector' does not exist on type 'Rea... Remove this comment to see the full error message
        const { cssSelector } = this.props;
        const seletor = document.querySelector(cssSelector);
        seletor.dataset.theme = theme;
    };
    switchTheme = () => {
        // @ts-expect-error TS(2339): Property 'cssSelector' does not exist on type 'Rea... Remove this comment to see the full error message
        const { cssSelector } = this.props;
        const seletor = document.querySelector(cssSelector);

        this.setState(
            currentState => ({
                // @ts-expect-error TS(2339): Property 'theme' does not exist on type 'Readonly<... Remove this comment to see the full error message
                theme: currentState.theme === "light" ? "dark" : "light"
            }),
            () => {
                // @ts-expect-error TS(2339): Property 'theme' does not exist on type 'Readonly<... Remove this comment to see the full error message
                seletor.dataset.theme = this.state.theme;
                // @ts-expect-error TS(2339): Property 'theme' does not exist on type 'Readonly<... Remove this comment to see the full error message
                localStorage.setItem("theme", this.state.theme);
            }
        );
    };
    render() {
        // @ts-expect-error TS(2339): Property 'theme' does not exist on type 'Readonly<... Remove this comment to see the full error message
        const { theme } = this.state;
        const isActive = theme === "dark" ? "active" : "";
        const {
            // @ts-expect-error TS(2339): Property 'switcherColor' does not exist on type 'R... Remove this comment to see the full error message
            switcherColor,
            // @ts-expect-error TS(2339): Property 'darkColor' does not exist on type 'Reado... Remove this comment to see the full error message
            darkColor,
            // @ts-expect-error TS(2339): Property 'lightColor' does not exist on type 'Read... Remove this comment to see the full error message
            lightColor,
            // @ts-expect-error TS(2339): Property 'darkTextColor' does not exist on type 'R... Remove this comment to see the full error message
            darkTextColor,
            // @ts-expect-error TS(2339): Property 'lightTextColor' does not exist on type '... Remove this comment to see the full error message
            lightTextColor
        } = this.props;
        return (
            <ThemeSwitcherWrapper>
                <GlobalStyle
                    // @ts-expect-error TS(2322): Type '{ darkColor: any; lightColor: any; darkTextC... Remove this comment to see the full error message
                    darkColor={darkColor}
                    lightColor={lightColor}
                    darkTextColor={darkTextColor}
                    lightTextColor={lightTextColor}
                />
                <Button
                    className={`${"button-switcher " + isActive}`}
                    aria-label="switch theme button"
                    onClick={this.switchTheme}
                />
            </ThemeSwitcherWrapper>
        );
    }
}

// @ts-expect-error TS(2339): Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
ThemeSwitcher.defaultProps = {
    cssSelector: "body",
    switcherColor: "#2775cc",
    darkColor: "#1e2227",
    lightColor: "#ffffff",
    lightTextColor: "#272b33",
    darkTextColor: "#ffffff"
};

export default ThemeSwitcher;