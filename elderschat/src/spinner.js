import React from "react";
import { Loader, Dimmer } from "semantic-ui-react";

const Spinner = () => (
  <Dimmer active>
    <Loader
      size="huge"
      content={"preparing the lit chat... please hold the fuck up"}
    />
  </Dimmer>
);

export default Spinner;
