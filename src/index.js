import React from "react";
import ReactDOM from "react-dom";
import profile1 from "./img/im1.jpg";
import profile2 from "./img/im2.jpg";
import profile3 from "./img/im3.jpg";
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";

const App = () => {
  return (
    <div className="ui comments">
      <UserCard>
        <SingleComment
          name="Israel"
          date="Today at 5:00PM"
          text="Its amazing"
          picture={profile1}
        />
      </UserCard>
      <UserCard>
        <SingleComment
          name="Ramsés"
          date="Today at 6:00PM"
          text="Cool"
          picture={profile2}
        />
      </UserCard>

      <UserCard>
        <SingleComment
          name="Baby"
          date="Today at 7:00PM"
          text="Great"
          picture={profile3}
        />
      </UserCard>
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector("#root"));
