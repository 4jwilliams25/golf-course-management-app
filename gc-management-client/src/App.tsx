import React from "react";
import TopNav from "./components/layout/TopNav";
import NewTtimeForm from "./components/forms/NewTtimeForm";
import TtimesList from "./components/list/TtimesList";
import axios from "axios";

export interface MyState {
  ttimes: any[];
}

class App extends React.Component<{}, MyState> {
  state = {
    ttimes: []
  };

  componentDidMount() {
    axios.get("http://localhost:8000/ttimes").then(res => {
      let ttimes = res.data;
      this.setState(
        {
          ...this.state,
          ttimes: ttimes
        },
        () => console.log("STATE", this.state)
      );
    });
  }

  render() {
    return (
      <div className="App">
        <TopNav />
        <NewTtimeForm />
        <TtimesList ttimes={this.state.ttimes} />
      </div>
    );
  }
}

export default App;
