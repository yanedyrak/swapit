import { useContext } from "react";
import { AuthContext } from "../providers/AuthContext";

// Хук для доступа к AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);

  // Добавьте проверку, если контекст оказался null
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
