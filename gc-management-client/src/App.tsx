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

  addTtime = (ttime: string) => {
    axios
      .post("http://localhost:8000/ttimes", {
        time: ttime
      })
      .then(res =>
        this.setState({
          ttimes: [res.data, ...this.state.ttimes]
        })
      );
  };

  removeTtime = (id: any) => {
    axios.delete(`http://localhost:8000/ttimes/${id}`).then(res => {
      let updatedTtimes = this.state.ttimes.filter(
        (ttime: any) => ttime.id !== res.data.id
      );
      this.setState({
        ttimes: updatedTtimes
      });
    });
  };

  render() {
    return (
      <div className="App">
        <TopNav />
        <NewTtimeForm addTtime={this.addTtime} />
        <TtimesList ttimes={this.state.ttimes} removeTtime={this.removeTtime} />
      </div>
    );
  }
}

export default App;
