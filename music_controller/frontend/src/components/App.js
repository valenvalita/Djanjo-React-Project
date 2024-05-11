import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import CreateRoomPage from "./CreateRoomPage";
import RoomJoinPage from "./RoomJoinPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/create" element={<CreateRoomPage />} />
                    <Route path="/join" element={<RoomJoinPage />} />
                </Routes>
            </Router>
        </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);