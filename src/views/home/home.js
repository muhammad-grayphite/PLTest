import { Link } from "react-router-dom";
import { Button } from "../../components/button/button";

const Home = () => {
  return (
    <div className="d-flex min-vh-100 justify-content-center align-items-center">
      <Link to="/modalA">
        <Button
          text={"All Contacts"}
          style={{ margin: "20px", backgroundColor: "#46139f", border: "none" }}
        />
      </Link>
      <Link to="/modalB">
        <Button
          text={"US Contacts"}
          style={{ backgroundColor: "#ff7f50", border: "none" }}
        />
      </Link>
    </div>
  );
};
export default Home;
