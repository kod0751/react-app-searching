import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { AuthStatus } from "../constant";

export default function useNeedLogin() {
  const navigate = useNavigate();
  const status = useSelector((state) => state.auth.status);
  useEffect(() => {
    if (status === AuthStatus.NotLogin) {
      navigate("/login", { replace: true });
    }
  }, [status, navigate]);
}
