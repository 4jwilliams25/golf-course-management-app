import React from "react";
import TtimeItem from "./TtimeItem";

type MyListProps = {
  ttimes: any[];
};

const TtimesList = (props: MyListProps) => {
  let tTimeList = props.ttimes.map((ttime, i) => {
    // Create the list of Ttimes and pass each ttime and it's customers down through props
    return <TtimeItem key={i} ttime={ttime} />;
  });

  return <div className="App">{tTimeList}</div>;
};

export default TtimesList;
