import React from 'react';
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";
import { Card, CardHeader, CardContent } from "@mui/material";


function InfoBox() {
    return (
    
      <Box component="main" sx={{ flexGrow: 1, p: 3 }} className="home-container">
        <div style={{ padding: "10px 0" }} />
        <Typography className="dashcard-container">
          {/* card to display total number of covid-19 cases */}
          <Card className="dashcard">
            <CardHeader title="Total Cases" />
            <CardContent>
              <Typography variant="body2" color="text.light">
                <strong>
                  {/* {loading ? "Loading..." : getTotal("total").toLocaleString()} */}
                </strong>
              </Typography>
            </CardContent>
            {/* <CardActions className="card-actions">
              <Link to={"/countries"} onClick={() => <Countries />}>
                <Button size="small" className="learn-more-btn">
                  Learn More
                </Button>
              </Link>
            </CardActions>
             */}
          </Card>
          {/* card to display total number of covid-19 deaths */}
          <Card className="dashcard">
            <CardHeader title="Total Deaths" />
            <CardContent>
              <Typography variant="body2" color="text.light">
                <strong>
                  {/* {loading ? "Loading..." : getTotalDeaths().toLocaleString()} */}
                </strong>
              </Typography>
            </CardContent>
            {/* <CardActions className="card-actions">
              <Link to={"/countries"} onClick={() => <Countries />}>
                <Button size="small" className="learn-more-btn">
                  Learn More
                </Button>
              </Link>
            </CardActions> */}
          </Card>
          {/* card to display total number of covid-19 recovered */}
          <Card className="dashcard">
            <CardHeader title="Total Recovered" />
            <CardContent>
              <Typography variant="body2" color="text.light">
                <strong>
                  {/* {loading
                    ? "Loading..."
                    : getTotal("recovered").toLocaleString()} */}
                </strong>
              </Typography>
            </CardContent>
            {/* <CardActions className="card-actions">
              <Link to={"/countries"} onClick={() => <Countries countries={countries} />}>
                <Button size="small" className="learn-more-btn">
                  Learn More
                </Button>
              </Link>
            </CardActions> */}
          </Card>
        </Typography>
      </Box>
    

    )
}

export default InfoBox;

