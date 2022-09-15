import { createGlobalStyle } from "styled-components";

export const FONT_SIZE = {
    heading: "70px",
    headingS: "55px",
    headingXS: "45px",
    dayOfWeekS: "18px",
    dayOfWeekXS: "16px",
    dayOfWeekBig: "22px",
    temperatureBig: "50px",
    temperatureL: "30px",
    temperatureS: "24px",
    temperatureXS: "22px",
    event: "18px",
    eventTime: "20px",
    date: "26px",
    dateS: "20px",
    city: "40px",
    cityS: "30px",
    cityXS: "20px",
    country: "20px",
    input: "20px",
    info: "20px",
    infoM: "17px",
    infoS: "14px",
    button: "18px",
    buttonXS: "15px",
};

export const FONT_COLOR = {
    primary: "rgba(255, 255, 255, 1)",
    secondary: "rgba(0, 0, 0, 1)",
    placeholder: "rgba(231, 227, 227, 0.7)",
};

export const COLOR = {
    mainBg: "rgba(50, 50, 50, 1)",
    mainBgTransp: "rgba(56, 56, 66, 0.8)",
    todayBackground: "rgba(56, 56, 66, 0.85)",
    mainBgTranspModal: "rgba(56, 56, 66, 0.95)",
    loaderBg: "rgba(56, 56, 66, 0.5)",
    mainBoxShadow: "0px 0px 120px 30px rgba(20, 20, 20, 1)",
    borderColor: "rgba(220, 220, 220, 1)",
    inputBg: "rgba(50, 50, 50, 0.3)",
    dayBg: "rgba(40, 40, 40, 0.6)",
    loaderColor: "rgba(111, 0, 255, 1)",
};

export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "Montserrat";

}
`;
