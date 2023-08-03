import "./App.css";
import { useEffect, useState } from "react";
import Channel from "./components/Channel";

export default function App() {
  const [data, setData] = useState([]);
  const url = "http://127.0.0.1:5000/api";

  const fetchData = async () => {
    const response = await fetch(url, { method: "GET" });
    const responseData = await response.json();
    console.log(responseData);
    setData(responseData);
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="App">
      <Channel data={data} />
    </div>
  );
}
