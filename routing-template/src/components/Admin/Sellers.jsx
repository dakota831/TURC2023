import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../common/loader";

const sellers = () => {
  const [name, setName] = React.useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [sellers, setSellers] = React.useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setSellers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setErrors(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h3>Admin Sellers Page</h3>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      {isLoading && (
        <div>
          <Loader />
          {errors && <em>{errors}</em>}
        </div>
      )}
      {sellers.map((seller) => (
        <p key={seller.id}>{seller.name}</p>
      ))}
    </>
  );
};

export default sellers;
