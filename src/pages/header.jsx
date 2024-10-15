import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { LangContext } from "../utils/lang_context";
import { useContext } from "react";
import { StringManager } from "../utils/stringmanager";

function Header() {

  const { lang, setLang } = useContext(LangContext);

  const changeLanguage = () => {
    setLang(lang == 'en' ? 'ar' : 'en')
  }


  return (
    <Navbar dir={lang == "en" ? "ltr" : "rtl"} expand="lg" className="bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to={"/login"}>
          {lang == 'en' ? StringManager.login.en : StringManager.login.ar}
        </NavLink>
        <NavLink to={"/"}>
          {lang == 'en' ? StringManager.todos.en : StringManager.todos.ar}
        </NavLink>
        <NavLink to={"/movies"}>
          {lang == 'en' ? StringManager.movies.en : StringManager.movies.ar}
        </NavLink>
        <NavLink to={"/signup"}>
          {lang == 'en' ? StringManager.singup.en : StringManager.singup.ar}
        </NavLink>
      </div>
      <button className="btn btn-info" onClick={changeLanguage}>
        {lang == 'en' ? StringManager.changelang.en : StringManager.changelang.ar}
      </button>
    </Navbar>
  );
}

export default Header;
