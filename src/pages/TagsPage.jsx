import {
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
  Skeleton,
  IconButton,
  Drawer,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import IconHome from "../assets/images/Union.png";
import { Link, useNavigate } from "react-router-dom";
import { getTags } from "../lib/api/allApi";
import { ArrowBackIos, Circle } from "@mui/icons-material";

function TagsPage() {
  const [tagsValue, setTagsValue] = useState(null);
  const [loading, setLoading] = useState(true);
  const [onHome, setOnHome] = useState(false);

  useEffect(() => {
    getTags().then((data) => {
      setTagsValue(data);
      setLoading(false);
    });
  }, []);
  const navigate = useNavigate();

  const goToTagsPage = () => {
    setOnHome(false);
  };
  const goToHomePage = () => {
    setOnHome(true);
  };

  return (
    <>
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
            <Link
              to="/"
              style={{ textDecoration: "none", marginTop: "50px" }}
              onClick={goToHomePage}
            >
              <img
                src={IconHome}
                alt="Icon home"
                style={{
                  margin: "0 auto",
                  display: "flex",
                  opacity: onHome ? 1 : 0.5,
                }}
              />
              <Typography
                fontWeight={400}
                fontSize="12px"
                letterSpacing={0.4}
                color="#fff"
                textAlign="center"
                display={onHome ? "block" : "none"}
              >
                Home
              </Typography>
            </Link>
            <div className="blueCircle">
              {/* Icon for Tags Page */}
              <Circle
                sx={{
                  display: onHome ? "block" : "none",
                  color: "#00d1ff",
                  fontSize: "6px",
                  marginLeft: "50px",
                  marginTop: "85px",
                }}
              />
            </div>
            <Link
              to="/tags"
              style={{ textDecoration: "none", marginBottom: 30 }}
              onClick={goToTagsPage}
            >
              <img
                src={IconHome}
                alt="Icon home"
                style={{
                  margin: "0 auto",
                  display: "flex",
                  opacity: onHome ? 0.5 : 1,
                }}
              />
              <Typography
                fontWeight={400}
                fontSize="12px"
                letterSpacing={0.4}
                color="#fff"
                textAlign="center"
                opacity={onHome ? 1 : 0.5}
              >
                Tags
              </Typography>
            </Link>
          </Stack>
        </Drawer>
        <Grid item marginLeft={{ md: "260px" }} marginTop={{ md: "71px" }}>
          <Typography
            color="#fff"
            fontSize="30px"
            fontWeight={400}
            letterSpacing="0.25px"
            textAlign="left"
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                xl: "block",
              },
            }}
          >
            Tags
          </Typography>
        </Grid>
        <Grid item md={8} xs={6}>
          <Stack direction="row" marginLeft={{ xs: 1 }}>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              onClick={() => navigate(-1)}
            >
              <ArrowBackIos
                sx={{
                  color: "#fff",
                  fontSize: "25px",
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    xl: "none",
                  },
                }}
              />
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
          </Stack>
        </Grid>
        <Grid container marginTop={{ xs: 4, md: 0 }} marginBottom={4}>
          <Typography
            color="#fff"
            fontSize="24px"
            fontWeight={400}
            lineHeight="36px"
            marginLeft="13px"
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                xl: "none",
              },
            }}
          >
            Tags
          </Typography>
        </Grid>
        <Grid
          container
          marginLeft={{ md: "270px" }}
          spacing={{ xs: 4, md: 3.7 }}
        >
          {!loading
            ? tagsValue?.map((data, i) => (
                <Grid
                  key={i}
                  marginLeft={{ xs: 2, md: 0.2 }}
                  item
                  xs={5}
                  md={2}
                >
                  <Card
                    sx={{
                      background: "#262626",
                      width: "150px",
                      height: "150px",
                    }}
                  >
                    <CardContent sx={{ marginTop: "66px" }}>
                      <Typography
                        sx={{ border: "4px solid #fff", borderRadius: 2 }}
                        paddingLeft={1}
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                        overflow="hidden"
                        color="#fff"
                        fontSize="24px"
                        fontWeight={700}
                        lineHeight="36px"
                        textAlign="center"
                      >
                        {data.name}
                      </Typography>
                    </CardContent>
                  </Card>
                  <Grid marginTop={{ md: 1.7 }}>
                    <Typography
                      color="#fff"
                      width="150px"
                      fontSize="14.9px"
                      letterSpacing="0.14px"
                      textOverflow="ellipsis"
                      overflow="hidden"
                      whiteSpace="nowrap"
                    >
                      {data.name}
                    </Typography>
                    <Typography
                      fontSize="11.75px"
                      color="rgba(255,255,255,0.5)"
                    >
                      {data.count} results
                    </Typography>
                  </Grid>
                </Grid>
              ))
            : [1, 2, 3, 4, 5, 6, 7].map((data, i) => (
                <Grid key={i} marginLeft={{ xs: 5 }}>
                  <Card
                    sx={{
                      background: "#262626",
                      width: "150px",
                      height: "150px",
                    }}
                  >
                    <Skeleton sx={{ background: "#fff", marginLeft: "20px" }}>
                      <CardContent
                        sx={{
                          marginTop: "66px",
                          width: "75px",
                          height: "35px",
                        }}
                      ></CardContent>
                    </Skeleton>
                  </Card>
                  <Typography>
                    <Skeleton sx={{ background: "#fff" }} />
                  </Typography>
                  <Typography>
                    <Skeleton sx={{ background: "#fff", width: "75px" }} />
                  </Typography>
                </Grid>
              ))}
        </Grid>
      </Grid>
    </>
  );
}

export default TagsPage;
