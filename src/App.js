import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Edit from "./pages/edit/Edit"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Signup from "./pages/signup/Signup";
import SendReq from "./pages/sendreq/SendReq";
import Notifications from "./pages/notifications/notifications";
import ClubToPlayerCom from "./pages/clubtoplayercom/ClubToPlayerCom";
import AddPlayers from "./pages/addplayers/AddPlayers";
import NewProposal from "./pages/newproposal/NewProposal";
import PlayerToClub from "./pages/playertoclubcom/PlayerToClubCom";
import Renewing from "./pages/renewing/Renewing";
import RequestLeaving from "./pages/requestLeaving/RequestLeaving";

function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/" />;
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="edit" element={<RequireAuth><Edit /></RequireAuth>} />
            <Route path="sendreq" element={<SendReq/>} />
            <Route path="notifications" element={<Notifications/>}/>
            <Route path="clubtoplayercom" element={<ClubToPlayerCom/>} />
            <Route path="addplayers" element={<AddPlayers/>} />
            <Route path="newproposal" element={<NewProposal/>} />
            <Route path="playertoclub" element={<PlayerToClub/>} />
            <Route path="Renewing" element={<Renewing/>} />
            <Route path="RequestLeaving" element={<RequestLeaving/>} />
            <Route path="users">

              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
