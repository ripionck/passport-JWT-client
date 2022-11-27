import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5001/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => {
        navigate("/login");
      });
  }, [navigate]);
  return (
    <div>
      <h2>This is profile</h2>
    </div>
  );
};

export default Profile;
