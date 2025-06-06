import { Link, useLocation, useNavigate } from "react-router-dom";
import dashboardIcon from "../../assets/dashboard-icon-svg.svg";
import eventsIcon from "../../assets/events-icon-svg.svg";
import logoImage from "../../assets/logo-image.png";
import logoVector from "../../assets/logo-vector.png";
import logoutIcon from "../../assets/logout-icon-svg.svg";
import subscriptionsIcon from "../../assets/subscriptions-icon-svg.svg";
import teamsIconSvg from "../../assets/teams-icon-svg.svg";
import userIcon from "../../assets/user-icon-svg.svg";
import userImage from "../../assets/user-image.png";
import * as S from "./styles";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    window.dispatchEvent(new Event("authChange"));
    navigate("/");
  };

  return (
    <S.SidebarContainer>
      <div>
        <S.Logo>
          <img src={logoImage} alt="Logo" />
          <img src={logoVector} alt="Logo" />
        </S.Logo>
        <S.MenuSection>
          <S.MenuTitle>Menu</S.MenuTitle>
          <Link to="/dashboard">
            <S.MenuItem active={location.pathname === "/dashboard"}>
              <img src={dashboardIcon} alt="Dashboard Icon" />
              <span>Dashboard</span>
            </S.MenuItem>
          </Link>
          <Link to="/events">
            <S.MenuItem active={location.pathname.includes("/events")}>
              <img src={eventsIcon} alt="Events Icon" />
              <span>Eventos</span>
            </S.MenuItem>
          </Link>
          <Link to="/teams">
            <S.MenuItem active={location.pathname === "/teams"}>
              <img src={teamsIconSvg} alt="Teams Icon" />
              <span>Equipes</span>
            </S.MenuItem>
          </Link>
          <Link to="/registrations">
            <S.MenuItem active={location.pathname === "/registrations"}>
              <img src={subscriptionsIcon} alt="Subscriptions Icon" />
              <span>Inscrições</span>
            </S.MenuItem>
          </Link>
        </S.MenuSection>
      </div>

      <S.UserSection>
        <S.UserInfo>
          <img src={userImage} alt="Profile Image" />
          <div>
            <span>Kaique Steck</span>
            <small>Administrador</small>
          </div>
        </S.UserInfo>
        <S.ActionItem>
          <img src={userIcon} alt="User Icon" />
          <span>Alterar dados</span>
        </S.ActionItem>
        <S.ActionItem onClick={handleLogout}>
          <img src={logoutIcon} alt="Logout Icon" />
          <span>Sair</span>
        </S.ActionItem>
      </S.UserSection>
    </S.SidebarContainer>
  );
}
