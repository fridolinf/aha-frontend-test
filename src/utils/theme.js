module.exports = {
  COLORS: {
    primaryColor: "#101010",
    secondaryColor: "#252F38",
    appBarColor: "#0A0B1E",
    neftipediaColor: "#34747E",
    whiteColor: "#FFFFFF",
    darkText: "#101D2E",
    greyColor: "#B4B4B4",
    transparentColor: "#ffffff00",
    errorBackgroundColor: "#FF7171",
    successColor: "#22bb33",
    blackColor: "#2C3643",
    verifiedColor: "#0199E4",
    linearMainCard: "#3C59BE",
    gradientBorder1: "82E7FE",
    gradientBorder2: "6DB7FF",

    getRandomColor: () => {
      let letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    },
    darkElement: "#1A2C3D",
    darkBackground: "#131F29",
    blueLight: "#0294AB",
    purpleLight: "#3C59BE",
    cardBackground: "#677078",
    gradient: (left, right, deg, leftPercent, rightPercent) =>
      `linear-gradient(${deg}deg, ${left} ${leftPercent}%, ${right} ${rightPercent}%)`,
    darkText2: "#0294AB",
    redLight: "#FF056E",
    // NEW VERSION (2)
    cardColorV2: `rgba(26, 44, 61, 0.5)`,
    containerBackgroundV2: `rgba(19, 31, 41, 1)`,
    buyButtonV2: `rgba(2, 148, 171, 1)`,
    greyDarkV2: `rgb(74,79,85)`,
  },
  ROUNDED: {
    button: 2, //sx
  },
  RGBA: {
    white: (opacity = 0.2) => `rgba(255, 255, 255, ${opacity})`,
    background: (opacity = 0.5) => `rgba(26, 44, 61, ${opacity})`,
  },
};
