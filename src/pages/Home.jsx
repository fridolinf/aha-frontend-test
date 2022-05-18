import { Circle } from "@mui/icons-material";
import IconHome from "../assets/images/Union.png";
import { Grid, Stack, Typography, Drawer, Divider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContainedButton } from "../components/AllButtons";
import InputText from "../components/InputText";
import SliderSize from "../components/SliderSize";
import TabsSection from "../components/TabsSection";
import { searchData } from "../lib/api/allApi";

function Home() {
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [totalData, setTotalData] = useState(0);
  const [countData, setCountData] = useState(3);

  const changeKeyword = (e) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    searchData(keyword).then((data) => {
      setTotalData(data.total);
      if (keyword !== "") {
        setSearchResult(data.data);
      } else {
        setSearchResult(searchResult);
      }
    });
  }, [keyword]);

  const getValueSlider = (_, value) => {
    setCountData(value);
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Drawer
          sx={{
            flexShrink: 0,
            display: {
              xs: "block",
              sm: "none",
              md: "none",
              xl: "none",
            },
            "& .MuiDrawer-paper": {
              height: "66px",
              background: "#1b1b1b",
              color: "#fff",
            },
          }}
          variant="permanent"
          anchor="bottom"
        >
          <Stack
            direction="row"
            justifyContent="center"
            spacing={5}
            marginTop={3}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                src={IconHome}
                alt="Icon home"
                style={{ margin: "0 auto", display: "flex" }}
              />
            </Link>
            <Link to="/tags" style={{ textDecoration: "none" }}>
              <img
                src={IconHome}
                alt="Icon home"
                style={{ margin: "0 auto", display: "flex", opacity: "0.5" }}
              />
            </Link>
          </Stack>
        </Drawer>
        <Drawer
          sx={{
            width: 40,
            flexShrink: 0,
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              xl: "block",
            },
            "& .MuiDrawer-paper": {
              width: 80,
              boxSizing: "border-box",
              background: "#1b1b1b",
              color: "#fff",
              marginRight: "131px",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <header>LOGO</header>
          <Stack spacing={3.5}>
            <Link to="/" style={{ textDecoration: "none", marginTop: "45px" }}>
              <img
                src={IconHome}
                alt="Icon home"
                style={{ margin: "0 auto", display: "flex" }}
              />
              <Typography
                fontWeight={400}
                fontSize="12px"
                letterSpacing={0.4}
                color="#fff"
                textAlign="center"
              >
                Home
              </Typography>
            </Link>
            <div className="blueCircle">
              <Circle
                sx={{
                  color: "#00d1ff",
                  fontSize: "6px",
                  marginLeft: "50px",
                  marginTop: "78px",
                }}
              />
            </div>
            <Link
              to="/tags"
              style={{ textDecoration: "none", marginBottom: 30 }}
            >
              <img
                src={IconHome}
                alt="Icon home"
                style={{ margin: "0 auto", display: "flex", opacity: "0.5" }}
              />
            </Link>
          </Stack>
        </Drawer>
        <Grid item md={9} xs={11.3}>
          <header className="headerMobile">LOGO</header>
          <Typography
            className="search1440"
            sx={{
              color: "#ffffff",
              fontSize: "26px",
              lineHeight: "36px",
              textTransform: "capitalize",
            }}
          >
            Search
          </Typography>
          <Grid item marginTop="16px">
            <InputText changeKeyword={changeKeyword} keywords={keyword} />
          </Grid>
          <SliderSize
            totalResult={totalData}
            changeSliderValue={getValueSlider}
          />
          <Divider
            sx={{
              display: {
                xs: "block",
                sm: "none",
                md: "none",
                xl: "none",
              },
              background: "#fff",
              marginTop: "190px",
              opacity: 0.1,
            }}
          />
          <Link
            state={[totalData, countData, searchResult]}
            to="/search"
            style={{ textDecoration: "none", bottom: 90, position: "fixed" }}
          >
            <ContainedButton
              textFamily="Ubuntu"
              text="Search"
              textSize="14px"
              textColor="#000"
              width="343px"
              hoverColor="#fff"
              borderRadius="4px"
              textWeight={700}
              height="40px"
            />
          </Link>
          <Drawer
            sx={{
              width: "375px",
              height: "50%",
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                xl: "block",
              },
              "& .MuiDrawer-paper": {
                width: "375px",
                boxSizing: "border-box",
                marginTop: "20px",
                background: "#1b1b1b",
                color: "#fff",
              },
            }}
            variant="permanent"
            anchor="right"
          >
            <Grid className="tabSection">
              <TabsSection />
            </Grid>
          </Drawer>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
