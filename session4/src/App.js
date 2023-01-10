import React, { useState } from "react";

const App = () => {
  const [cities, setCities] = useState([
    {
      city: "Goa",
      country: "India",
    },
    {
      city: "Amsterdams",
      country: "Netherlands",
    },
    {
      city: "New York",
      country: "USA",
    },
    {
      city: "Darjeeling",
      country: "India",
    },
    {
      city: "Tokyo",
      country: "Japan",
    },
    {
      city: "Lonavala",
      country: "India",
    },
  ]);

  return (
    <div>
      <ol>
        {cities?.map((city, idx) => {
          if (city.country === "India")
            return <li key={city.city + idx}>{city.city}</li>;
        })}
      </ol>
    </div>
  );
};

export default App;
