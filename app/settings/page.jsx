import React from "react";
import Heading from "../components/Heading";
import { Grid } from "@mui/material";
import ProfileLeft from "../components/Chat-setting/ProfileLeft";
import Settings from "../components/Chat-setting/Settings";

const page = () => {
  return (
    <div>
      <Heading title={"Settings"} />
      <div className="mt-4">
        <Grid container spacing={2}>
          {/* left side */}
          <Grid item xs={12} md={7}>
            {/* <ProfileLeft /> */}
          </Grid>
          {/* right side */}
          <Grid item xs={12} md={12}>
            <Settings />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default page;