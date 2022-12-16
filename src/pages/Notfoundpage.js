import { Link } from "react-router-dom";

const Notfoundpage = () => {
  return (
    <div>
      <h1>
        Not found page. Go <Link to="/">Home</Link>
      </h1>
    </div>
  );
};

export default Notfoundpage;
