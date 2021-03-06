import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import StartMenu from "../StartMenu/StartMenu";
import Board from "../Board/Board";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.seconds = {
      "Newbie": 10,
      "Intermediate": 5,
      "Nightmare": 3 
    }
    this.state = {
      difficulty: "Newbie",
    };
  }
  
  handleDifficultyChange = (difficulty) => {
    this.setState({ difficulty: difficulty });
  };

  render() {
    const { difficulty, leaderboard } = this.state;
    
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            
            <Route exact path="/" render={() => 
              <StartMenu 
                handleDifficultyChange={this.handleDifficultyChange} 
                seconds={this.seconds[difficulty]}
                difficulty={difficulty} 
                leaderboard={leaderboard}/>
            }/>

            <Route exact path="/board" render={() => 
              <Board />
            }/>
      
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
