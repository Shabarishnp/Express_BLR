import { useEffect } from "react";
import axios from "axios";

const Data = () => {
  useEffect(() => {
    axios
      .get("https://mobile-api-pgi0.onrender.com/mobile/samsung")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });
  return (
    <div>
      {/* <ul>
        {Data.map((Element, index) => (
          <li key={index}>
            {Element.brand}-{Element.price}
          </li>
        ))}
      </ul> */}
      Data
    </div>
  );
};

export default Data;
