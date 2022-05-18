import { ArrowBackIos, Circle } from "@mui/icons-material";
import { Drawer, Grid, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ContainedButton } from "../components/AllButtons";
import IconHome from "../assets/images/Union.png";
import CardResult from "../components/CardResult";
import TabsSection from "../components/TabsSection";

function SearchPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [total, setTotal] = useState(location.state[0]);
  const [count, setCount] = useState(location.state[1]);
  const [searchData, setSearchData] = useState(location.state[2]);
  const [hasMore, setHasMore] = useState(false);

  const handleCount = () => {
    setHasMore(true);
    if (total > count) {
      setTimeout(() => {
        setCount(count + count);
        setHasMore(false);
      }, 1000);
    } else {
      setCount(total);
    }
  };
  return (
    <Grid container>
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
          <Link to="/" style={{ textDecoration: "none", marginTop: "50px" }}>
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
                marginTop: "85px",
              }}
            />
          </div>
          <Link to="/tags" style={{ textDecoration: "none", marginBottom: 30 }}>
            <img
              src={IconHome}
              alt="Icon home"
              style={{ margin: "0 auto", display: "flex", opacity: "0.5" }}
            />
          </Link>
        </Stack>
      </Drawer>
      <Grid item md={10} xs>
        <Stack
          direction="row"
          marginLeft={{ xs: 1, md: 14 }}
          marginTop={{ xs: "3px", md: 10.5 }}
          marginBottom={{ md: 3 }}
        >
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
            onClick={() => navigate(-1)}
          >
            <ArrowBackIos sx={{ color: "#fff", fontSize: "25px" }} />
            <Typography
              color="#fff"
              fontSize="24px"
              fontWeight={400}
              fontFamily="Ubuntu"
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "none",
                  xl: "none",
                },
              }}
            >
              Home Page
            </Typography>
          </IconButton>
          <Typography
            color="#fff"
            fontSize="30px"
            fontWeight={400}
            letterSpacing="0.25px"
            fontFamily="Ubuntu"
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                xl: "block",
              },
            }}
          >
            Results
          </Typography>
        </Stack>
        <Typography
          color="#fff"
          fontSize="24px"
          fontWeight={400}
          fontFamily="Ubuntu"
          marginTop="25px"
          marginBottom="24px"
          marginLeft="16px"
          sx={{
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              xl: "none",
            },
          }}
        >
          Results
        </Typography>
        <CardResult
          searchData={searchData ? searchData : null}
          total={total}
          count={count}
        />
        {hasMore && <h5 style={{ color: "#fff" }}>LOADING....</h5>}
        <Grid
          item
          marginBottom={7}
          marginTop={{ md: 4 }}
          className="mobileResult"
          marginLeft={{ md: 19 }}
        >
          {total > count && searchData !== null ? (
            <ContainedButton
              textFamily="Ubuntu"
              text="More"
              textSize="14px"
              textColor="#000"
              width="343px"
              hoverColor="#fff"
              borderRadius="4px"
              textWeight={700}
              onClick={handleCount}
            />
          ) : searchData === null ? (
            <Typography
              color="#fff"
              fontSize="25px"
              marginTop={2}
              fontStyle="italic"
            >
              Data Not Found.
            </Typography>
          ) : (
            <b style={{ color: "#fff" }}>All data has been loaded.</b>
          )}
        </Grid>
      </Grid>
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
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "375px",
            boxSizing: "border-box",
            background: "#000",
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
  );
}

export default SearchPage;
