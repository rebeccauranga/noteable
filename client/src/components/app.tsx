import React, { useState, useEffect } from "react";
import axios from "axios";
import { User, ApiResponse } from "@shared/models";

const App: React.FC = () => {
  const [data, setData] = useState<User>();

  useEffect(() => {
    axios
      .get<ApiResponse<User>>("/api/users/1")
      .then((response) => setData(response.data.data))
      .catch((err) => alert(err));
  });
  // setData({id: 100, email:"sebbycute@gmail.com"})
  const email = data && data.email;
  return <div onClick={() => alert(email)}>Click here.</div>;
};

export default App;
