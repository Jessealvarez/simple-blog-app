import React from "react";
import { useState } from "react";

const Homepage = (user) => {
  const [newPost, setNewPost] = useState("");

  const [postFeed, setPostFeed] = useState([]);
  return (
    <div>
      <div>
        <h1>Homepage</h1>
      </div>
      <div>
        <div>
          <h4>Welcome!</h4>
          <input
            className="new-post-input"
            type="text"
            placeholder="Enter your post here"
            value={newPost}
            onChange={(event) => setNewPost(event.target.value)}
          ></input>
          <button
            onClick={() => {
              setPostFeed([
                ...postFeed,
                { id: postFeed.length, content: newPost },
              ]);
              console.log("new post text: ", newPost);
            }}
          >
            Submit
          </button>
        </div>
        <div id="feed">
          <div>
            {postFeed.map((post, index) => (
              <div key={index}>
                <div> {user.userName}</div>

                <div>
                  <img src={user.profilePhotoUrl} />
                </div>

                <div>{post.content}</div>
                <button>Delete</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
