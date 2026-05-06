import {
  useParams,
  useSearchParams,
} from "react-router-dom";
import { Button } from "../components/ui/button";

const UserDetails = () => { 


const{id} = useParams();
const [searchparams,setSearchParams] = useSearchParams();

const isActive = searchparams.get("active");

  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {id}</p>
      <p>Active: {isActive}</p>
      <Button onClick={() => setSearchParams({ active: "true" })}>
        Set Active
      </Button>
      <Button onClick={() => setSearchParams({ active: "false" })}>
        Set Inactive
      </Button>
    </div>
  );

}
export default UserDetails;