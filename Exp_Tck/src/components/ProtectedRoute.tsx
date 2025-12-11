
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export default function ProtectedRoute() {
  const auth = useContext(AuthContext);

  return auth ? <div>Allowed</div> : <div>Not allowed</div>;
}
