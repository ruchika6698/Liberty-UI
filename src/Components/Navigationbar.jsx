import React from "react";
import "../SCSS/Navigationbar.scss";
import LibertyIcon from "./../Assets/LibertyIcon.svg";
import MiniLogo from "./../Assets/MiniLogo.svg";
import UserIcon from "./../Assets/UserIcon.jpg";
import {
  Container,
  Row,
  Col,
  NavbarBrand,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTv,faAtom,faDraftingCompass,faStarOfLife,faCompass,faFlag,faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

export default function Navigationbar() {

  return (
    <div className="Navigationbar">
    <Row>
      <Container>
        <Row className="logoBar">
          <Col md="3" sm="2" xs="1">
            <NavbarBrand>
                <img
                  className="logo"
                  src={LibertyIcon}
                  alt="logo"
                />
                <img
                  className="miniLogo"
                  src={MiniLogo}
                  alt="logo"
                />
          </NavbarBrand>

        </Col>
        <Col className="logoBar-icons">
              <div className="search">
                <FontAwesomeIcon
                  icon={faSearch}
                  opacity="0.2"
                  className="searchIcon"
                  size="xs"
                />
                <input type="text" className="searchInput"></input>
              </div>
              <div className="notification">
                <div className="notificationCount">4</div>
                <FontAwesomeIcon icon={faBell} className="bellIcon"/>
              </div>
              <div className="account">
                <img src={UserIcon} height="37px" className="avatar" alt="User" />
              </div>
              <div className="menuBar">
                <FontAwesomeIcon icon={faBars} />
              </div>
            </Col>
        </Row>
        <br/>
        <Row className="menu">
            <Col className="dashboard">
              <FontAwesomeIcon icon={faTv} className="menu-item-icon" />
              DASHBOARD
            </Col>
            <Col className="menu-item">
              <FontAwesomeIcon icon={faCompass} className="menuIcon" />
              WIDGETS</Col>
            <Col className="menu-item">
              <FontAwesomeIcon icon={faAtom} className="menuIcon" />
              UI ELEMENTS</Col>
            <Col className="menu-item">
              <FontAwesomeIcon icon={faFlag} className="menuIcon" />
              PAGES</Col>
            <Col className="menu-item">
              <FontAwesomeIcon icon={faDraftingCompass} className="menuIcon" />
              FORMS</Col>
            <Col className="menu-item">
              <FontAwesomeIcon icon={faStarOfLife} className="menuIcon" />
              APPS</Col>
        </Row>
        <br/>
      </Container>
    </Row>
    </div>
    
  )
}