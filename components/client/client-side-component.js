// components/ClientSideComponent.js
import { useEffect, useState } from 'react';

const ClientSideComponent = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1>Current Time: {time}</h1>;
};

export default ClientSideComponent;