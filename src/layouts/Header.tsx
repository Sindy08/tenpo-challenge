import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useAuth } from "../contexts/AuthContext";

const Header: FC = () => {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-black p-4 flex justify-between items-center max-w-7xl mx-auto my-0">
      <div className="container header__container">
        <Link to="/" title="Tenpo">
          <img 
            src={logo} 
            alt="Tenpo" 
            title="Tenpo" 
            className="h-15" 
            loading="lazy" 
          />
        </Link>
      </div>

      {isAuthenticated && (
        <button
          className="px-4 py-2 bg-[#03ff94] text-black font-bold rounded min-w-40 cursor-pointer hover:bg-[#6affc1]"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Cerrar Sesión
        </button>
      )}
    </header>
  );
};

export default Header;
