import React, { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardActions,
  Grid,
  Skeleton,
} from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

function CardResult({ searchData, count, total }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (searchData) {
      setLoading(false);
    }
    // eslint-disable-next-line
  }, []);

  const [totalData, setTotalData] = useState(total);
  const [countData, setCountData] = useState(count);
  const [hasMore, setHasMore] = useState(true);

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
      spacing={{ xs: 1, md: 3 }}
      width={{ md: "721px" }}
      marginLeft={{ md: "130px" }}
      justifyContent="center"
    >
      {!loading
        ? searchData?.slice(0, count)?.map((data, i) => (
            <Grid
              key={i}
              item
              xs={11}
              md={4}
              border="none"
              height={{ xs: "282px", md: "235px" }}
              marginBottom={{ xs: "40px" }}
            >
              <Card
                key={i}
                sx={{
                  background: "transparent",
                  border: "none",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={data.avater}
                    alt={data.name}
                  />
                </CardActionArea>
                <Grid marginTop={{ xs: 2.5, md: 1.6 }}>
                  <Typography
                    fontSize="14.9px"
                    letterSpacing="0.14px"
                    fontWeight={400}
                    lineHeight="22.35px"
                    color="#fff"
                    width="150px"
                    textOverflow="ellipsis"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    fontFamily="Ubuntu"
                  >
                    {data.name}
                  </Typography>
                  <Typography
                    fontSize="11.17px"
                    lineHeight="16.76px"
                    letterSpacing="0.37px"
                    color="rgba(255,255,255,0.5)"
                    textTransform="lowercase"
                    fontFamily="Ubuntu"
                  >
                    by {data.username}
                  </Typography>
                </Grid>
              </Card>
            </Grid>
          ))
        : searchData !== null
        ? [1, 2, 3].map((data, i) => (
            <Grid key={i}>
              <Card
                sx={{
                  background: "rgba(255,255,255,0.5)",
                  width: "150px",
                  height: "150px",
                }}
              >
                <Skeleton sx={{ background: "#fff", marginLeft: "20px" }}>
                  <CardActionArea>
                    <CardMedia component="img" height="140" />
                  </CardActionArea>
                </Skeleton>
              </Card>
              <Typography>
                <Skeleton sx={{ background: "#fff", width: "75px" }} />
              </Typography>
              <Typography>
                <Skeleton sx={{ background: "#fff", width: "75px" }} />
              </Typography>
            </Grid>
          ))
        : null}
      <InfiniteScroll
        className="infinityScrolMobile"
        dataLength={countData}
        next={handleCount}
        hasMore={hasMore}
        loader={<h4 style={{ color: "#fff" }}>Loading...</h4>}
        endMessage={
          <p style={{ color: "#fff", marginBottom: "50px" }}>
            <b>All data has been loaded.</b>
          </p>
        }
      >
        {!loading
          ? searchData?.slice(0, countData)?.map((data, i) => (
              <Grid key={i} item xs={12} md={3}>
                <Card
                  key={i}
                  sx={{
                    background: "transparent",
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={data.avater}
                      alt={data.name}
                    />
                  </CardActionArea>
                  <CardActions>
                    <Grid>
                      <Typography
                        fontSize="14.9px"
                        letterSpacing="0.14px"
                        fontWeight={400}
                        lineHeight="22.35px"
                        color="#fff"
                        width="150px"
                        textOverflow="ellipsis"
                        overflow="hidden"
                        whiteSpace="nowrap"
                      >
                        {data.name}
                      </Typography>
                      <Typography
                        fontSize="11.17px"
                        lineHeight="16.76px"
                        letterSpacing="0.37px"
                        color="rgba(255,255,255,0.5)"
                        textTransform="lowercase"
                      >
                        by {data.username}
                      </Typography>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            ))
          : searchData !== null
          ? [1, 2, 3].map((data, i) => (
              <Grid key={i}>
                <Card
                  sx={{
                    background: "rgba(255,255,255,0.5)",
                    width: "150px",
                    height: "150px",
                  }}
                >
                  <Skeleton sx={{ background: "#fff", marginLeft: "20px" }}>
                    <CardActionArea>
                      <CardMedia component="img" height="140" />
                    </CardActionArea>
                  </Skeleton>
                </Card>
                <Typography>
                  <Skeleton sx={{ background: "#fff", width: "75px" }} />
                </Typography>
                <Typography>
                  <Skeleton sx={{ background: "#fff", width: "75px" }} />
                </Typography>
              </Grid>
            ))
          : null}
      </InfiniteScroll>
    </Grid>
  );
}

CardResult.propTypes = {
  searchData: PropTypes.array,
  count: PropTypes.number,
  total: PropTypes.number,
};

export default CardResult;
