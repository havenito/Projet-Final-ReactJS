import { useAuth } from "./AuthProvider";
import { Navigate } from "react-router";

export default function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return (
      <Navigate to="/loginout-page" />
    );
  }

  return children;
}