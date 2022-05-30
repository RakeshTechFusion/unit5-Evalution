import { Input } from "./Components/Input";
import { Image } from "./Components/Image";
import { Pagination } from "./Components/Pagination";
import rama from "./Components/Rakesh.jpg";
import React, { useState } from "react";
function App() {
  const [count, setcount] = useState(1);

  const handleChange = (e) => {
    console.log(e);
  };
  return (
    <div className="container">
      <Input rightLogo={rama} variant="outline" />

      <Image
        src={rama}
       borderRadius="50%"
        width="70px"
        height="70px"
        fit="cover"
        alt="rama"
      />

      <Pagination
        total={8}
        selected={1}
        key={1}
        onPageChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
}

export default App;