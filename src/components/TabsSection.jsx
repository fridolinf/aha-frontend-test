import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Grid,
  Skeleton,
  Button,
  Stack,
} from "@mui/material";
import styled from "@emotion/styled";
import { getFollower, getFollowing } from "../lib/api/allApi";
import { ContainedButton, OutlinedButton } from "./AllButtons";
import InfiniteScroll from "react-infinite-scroll-component";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function RenderFollower() {
  const [dataFollower, setDataFollower] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [totalData, setTotalData] = useState(0);
  const [countData, setCountData] = useState(14);

  useEffect(() => {
    getFollower().then((data) => {
      setTotalData(data.total);
      setDataFollower(data.data);
      setLoading(false);
    });
  }, []);

  const handleCount = () => {
    if (totalData > countData) {
      setTimeout(() => {
        setCountData(countData + countData);
      }, 1000);
    } else {
      setCountData(totalData);
      setHasMore(false);
    }
  };

  return (
    <Grid
      container
      width="375px"
      columnSpacing={2.3}
      marginTop={{ xs: 1.5, md: 3.5 }}
    >
      <InfiniteScroll
        dataLength={countData}
        next={handleCount}
        hasMore={hasMore}
        loader={<h4 style={{ color: "#fff" }}>Loading...</h4>}
        height="898px"
        endMessage={
          <p style={{ color: "#fff", marginBottom: "50px" }}>
            <b>All data has been loaded.</b>
          </p>
        }
      >
        <Grid container>
          {!loading
            ? dataFollower?.slice(0, countData)?.map((data, i) => (
                <Grid key={i} item md={12} marginBottom="21px">
                  <Stack direction="row">
                    <Grid item md={1.8}>
                      <img
                        width="40px"
                        height="40px"
                        style={{ border: "1px solid #F8F8F8" }}
                        src={data.avater}
                        alt="img"
                      />
                    </Grid>
                    <Grid item md={7}>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontWeight: 400,
                          fontSize: "16px",
                          letterSpacing: "0.15px",
                          lineHeight: "24px",
                        }}
                      >
                        {data.name}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.5)",
                          fontWeight: 400,
                          fontSize: "14px",
                          letterSpacing: "0.25px",
                          lineHeight: "21px",
                        }}
                      >
                        @{data.username}
                      </Typography>
                    </Grid>
                    <Grid item md={1}>
                      {data.isFollowing === true ? (
                        <ContainedButton
                          borderRadius="20px"
                          width="76px"
                          height="28px"
                          text="Following"
                          textColor="#000"
                          textWeight={400}
                          textAlign="center"
                          textFamily="Open Sans"
                          textSize="12px"
                          textTransform="capitalize"
                          hoverColor="#fff"
                        />
                      ) : (
                        <OutlinedButton
                          borderRadius="20px"
                          width="60px"
                          height="29px"
                          text="Follow"
                          textColor="#fff"
                          textWeight={400}
                          textAlign="center"
                          textFamily="Open Sans"
                          textSize="12px"
                          textTransform="capitalize"
                          hoverColor="#000"
                        />
                      )}
                    </Grid>
                  </Stack>
                </Grid>
              ))
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, i) => (
                <Box key={i} sx={{ flexGrow: 1 }}>
                  <Grid
                    key={i}
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                    marginBottom="21px"
                  >
                    <Grid item xs={2} sm={4} md={0.5} sx={{ color: "red" }}>
                      <Skeleton
                        sx={{ background: "#fff" }}
                        width="40px"
                        height="50px"
                      />
                    </Grid>
                    <Grid item xs={2} sm={4} md={2}>
                      <Typography>
                        <Skeleton sx={{ background: "#fff" }} />
                      </Typography>
                      <Typography>
                        <Skeleton sx={{ background: "#fff" }} />
                      </Typography>
                    </Grid>
                    <Grid item md={1}>
                      <Button>
                        <Skeleton
                          sx={{ background: "#fff" }}
                          width="70px"
                          height="40px"
                        />
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              ))}
        </Grid>
      </InfiniteScroll>
    </Grid>
  );
}

function RenderFollowing() {
  const [dataFollowing, setDataFollowing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalData, setTotalData] = useState(0);
  const [countData, setCountData] = useState(10);
  useEffect(() => {
    getFollowing().then((data) => {
      setTotalData(data.total);
      setDataFollowing(data.data);
      setLoading(false);
    });
  }, []);
  return (
    <Grid container width="375px" columnSpacing={2.3}>
      {!loading
        ? dataFollowing?.slice(0, countData)?.map((data, i) => (
            <Grid key={i} item md={12} marginBottom="21px">
              <Stack direction="row">
                <Grid item md={1.8}>
                  <img
                    width="40px"
                    height="40px"
                    style={{ border: "1px solid #F8F8F8" }}
                    src={data.avater}
                    alt="img"
                  />
                </Grid>
                <Grid item md={7}>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 400,
                      fontSize: "16px",
                      letterSpacing: "0.15px",
                      lineHeight: "24px",
                    }}
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.5)",
                      fontWeight: 400,
                      fontSize: "14px",
                      letterSpacing: "0.25px",
                      lineHeight: "21px",
                    }}
                  >
                    @{data.username}
                  </Typography>
                </Grid>
                <Grid item marginTop={1} md={1}>
                  <ContainedButton
                    borderRadius="20px"
                    width="76px"
                    height="28px"
                    text="Following"
                    textColor="#000"
                    textWeight={400}
                    textAlign="center"
                    textFamily="Open Sans"
                    textSize="12px"
                    textTransform="capitalize"
                    hoverColor="#fff"
                  />
                </Grid>
              </Stack>
            </Grid>
          ))
        : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, i) => (
            <Box key={i} sx={{ flexGrow: 1 }}>
              <Grid
                key={i}
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                marginBottom="21px"
              >
                <Grid item xs={2} sm={4} md={0.5} sx={{ color: "red" }}>
                  <Skeleton
                    sx={{ background: "#fff" }}
                    width="40px"
                    height="50px"
                  />
                </Grid>
                <Grid item xs={2} sm={4} md={2}>
                  <Typography>
                    <Skeleton sx={{ background: "#fff" }} />
                  </Typography>
                  <Typography>
                    <Skeleton sx={{ background: "#fff" }} />
                  </Typography>
                </Grid>
                <Grid item md={1}>
                  <Button>
                    <Skeleton
                      sx={{ background: "#fff" }}
                      width="70px"
                      height="40px"
                    />
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ))}
    </Grid>
  );
}

function TabsSection() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabsStyled = styled(Tabs)({
    "& .MuiTab-root": {
      fontFamily: "Ubuntu",
      fontSize: "16px",
      fontWeight: 700,
      letterSpacing: "0.15px",
      textTransform: "capitalize",
      color: "rgba(255,255,255,0.5)",
    },
    "& .Mui-selected": {
      color: "#fff",
    },
  });

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            textAlign: "center",
          }}
        >
          <TabsStyled
            centered={true}
            sx={{ textAlign: "center", justifyContent: "space-between" }}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#fff",
              },
            }}
            textColor="#fff"
            value={value}
            variant="fullWidth"
            onChange={handleChange}
          >
            <Tab sx={{ marginRight: 3 }} label="Followers" {...a11yProps(0)} />
            <Tab label="Following" {...a11yProps(1)} />
          </TabsStyled>
        </Box>
        <TabPanel value={value} index={0}>
          <RenderFollower />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RenderFollowing />
        </TabPanel>
      </Box>
    </div>
  );
}

export default TabsSection;
