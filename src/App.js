import React, { Component, useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planner from "./pages/PlanTimetable";
import Discuss from "./pages/DiscussionForum";
import DiscussionDetail from "./pages/DiscussionDetail";
import Login from "./pages/Login";
import Common from "./pages/FindCommon";
import Share from "./pages/ShareTimetable";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";
// import useToken from "./custom hooks/useToken";
import { AppContextProvider, useApp } from "./context/AppContextProvider";

import { COURSES } from "./pages/discussionData";
import { COMMENTS } from "./shares/comments";

function AppContextConsumer() {
  const [courses, setCourses] = useState(COURSES);
  const [comments, setComments] = useState(COMMENTS);
  const appContext = useApp();
  const setToken = appContext.setToken;

  const CourseWithId = ({ match }) => {
    return (
      <DiscussionDetail
        course={
          courses.filter(
            //(course) => course.id === parseInt(match.params.id, 10)
            (course) => course.courseCode === match.params.courseCode
          )[0]
        }
        comments={comments.filter(
          (comment) => comment.courseCode === match.params.courseCode
        )}
      />
    );
  };

  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/login"
            component={() => <Login setToken={setToken} />}
          />
          <Route
            exact
            path="/discuss"
            component={() => <Discuss courses={courses} />}
          />
          <Route path="/discuss/:courseCode" component={CourseWithId} />
          <Route path="/findcommon" component={Common} />
          <Route path="/planner" component={Planner} />
          <Route path="/share" component={Share} />
          <Route path="/forgotpwd" component={ForgotPassword} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default function App() {
  return (
    <AppContextProvider>
      <AppContextConsumer />
    </AppContextProvider>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       courses: COURSES,
//       comments: COMMENTS,
//     };
//   }

//   render() {
//     const CourseWithId = ({ match }) => {
//       return (
//         <DiscussionDetail
//           course={
//             this.state.courses.filter(

//               //(course) => course.id === parseInt(match.params.id, 10)
//               (course) => course.courseCode === match.params.courseCode
//             )[0]
//           }
//           comments={this.state.comments.filter(
//             (comment) => comment.courseCode === match.params.courseCode
//           )}
//         />
//       );
//     };
//     return (
//       <>
//         <Router>
//           <Navbar />
//           <Switch>
//             <Route path="/" exact component={Home} />
//             <Route path="/login" component={()=><Login setToken={setToken}/>} />
//             <Route
//               exact
//               path="/discuss"
//               component={() => <Discuss courses={this.state.courses} />}
//             />
//             <Route path="/discuss/:courseCode" component={CourseWithId} />
//             <Route path="/findcommon" component={Common} />
//             <Route path="/planner" component={Planner} />
//             <Route path="/share" component={Share} />
//             <Route path="/forgotpwd" component={ForgotPassword} />
//             <Route path="/register" component={Register} />
//           </Switch>
//         </Router>
//       </>
//     );
//   }
// }

// export default App;
