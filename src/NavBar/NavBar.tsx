import React, { useEffect, useState } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { getMenuRequest } from "../store/actions";
import { IApp, IMenu } from "../store/reducer";
import Menu from "../images/menu.svg"
import Logo from "../images/bellotero.svg";
import "./style.scss";

interface INavBar {
  menu: Array<IMenu>;
  onLoadMenu: () => void;
}

const NavBar = (props: INavBar) => {
  const { menu, onLoadMenu } = props;
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    onLoadMenu();
  }, [onLoadMenu]);

  return (
    <div className="container">
      <div className="menu" onClick={() => setShowOptions(!showOptions)}>
        <img src={Menu} alt="Logo" />
      </div>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className={`${showOptions ? 'links-container-div-dropdown' : 'links-container-div'}`}>
        {
          menu.map((item: IMenu, index: number) => {
            return (
              <div className="link-container" key={index}>
                <div className="link-div">
                  <Link to={item.route} className="link">{item.text}</Link>
                </div>
              </div>);
          })
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state: IApp) => {
  return {
    menu: state.menu,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onLoadMenu: () => {
      dispatch(getMenuRequest())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
