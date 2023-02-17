import React from "react";
//import axios from "axios";

function App() {
  const [data, setData] = React.useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  const handleChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
      </div>

      <div>
        <input type="text" name="username" onChange={handleChange} required />
      </div>

      <div>
        <label>Password</label>
      </div>

      <div>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
  );
}

export default App;
