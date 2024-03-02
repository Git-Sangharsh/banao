import React, { useState } from "react";
import "./Content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faCaretDown,
  faEye,
  faCalendar,
  faLocationDot,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import mustang from "../assets/mustang.jpg";
import share from "../assets/share.png";
import profile4 from "../assets/profile4.jpg";
import Box2 from "../assets/herobg2.jpg";
import Box3 from "../assets/mountain3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

const Content = () => {
  const [dropDown, setDropDown] = useState(true);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="content">
      <div className="tags">
        <div className="left-tag d-flex my-2">
          <li className="fw-bolder">All Posts(32)</li>
          <li className="left-tag-li">Article</li>
          <li className="left-tag-li">Event</li>
          <li className="left-tag-li">Education</li>
          <li className="left-tag-li">Job</li>
        </div>
        <div className="right-tag d-flex my-2">
          <div className="inner-right-left-tag d-flex align-items-center justify-content-center gap-1 mx-2 p-2">
            <li className="fw-bolder">Write A Post</li>
            <FontAwesomeIcon icon={faCaretDown} fontSize={25} />
          </div>
          <div className="inner-right-right-tag d-flex align-items-center justify-content-center gap-1 mx-2 p-2">
            <FontAwesomeIcon icon={faUserGroup} fontSize={15} />
            <li className="fw-bolder">Join Group</li>
          </div>
        </div>
      </div>

      <div className="box mb-4">
        <img src={mustang} alt="" className="box-img" />
        <div class="align-emoji">
          ✍️
          <h1 class="align-emoji-header">Article</h1>
        </div>
        <div class="content3-left-box1-row">
          <h1 class="content3-left-box1-row-header">
            What if famous brands had regular fonts? Meet <br />
            RegulaBrands!
          </h1>
          {/* ?//! */}
          <FontAwesomeIcon
            icon={faEllipsis}
            className="content3-left-box1-row-icon"
            onClick={handleDropDown}
          />
        </div>
        {dropDown && (
        <ul className="dropdown-div">
          <li>Edit</li>
          <li>Report</li>
          <li>Option 3</li>
        </ul>
      )}

        <h1 class="content3-left-box1-i">
          I've worked in UX for the better part of a decade. From now on, I plan
          to reimagine user...
        </h1>
        <div className="profile d-flex align-items-center justify-content-space-between w-100 pb-4">
          <div className="inner-profile-1 d-flex align-items-center justify-content-center">
            <img src={profile4} alt="" className="profile-img w-10" />
            <h6 className="m-0 px-1">Virat Kohli</h6>
          </div>
          <div className="inner-profile-2 d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faEye} />
            <h6 className="m-0 px-1">1.4k Views</h6>
            <img src={share} alt="" className="share p" />
          </div>
        </div>
      </div>

      <div className="box mb-4">
        <img src={Box2} alt="" className="box-img" />
        <div class="align-emoji">
          ✍️
          <h1 class="align-emoji-header">Article</h1>
        </div>
        <div class="content3-left-box1-row">
          <h1 class="content3-left-box1-row-header">
            Tax Benefits for Investment under National Pension <br />
            Scheme launched by Goverment
          </h1>
          <i class="fa-solid fa-ellipsis content3-left-box1-row-icon"></i>
        </div>
        <h1 class="content3-left-box1-i">
          I've worked in UX for the better part of a decade. From now on, I plan
          to reimagine user...
        </h1>
        <div className="profile d-flex align-items-center justify-content-space-between w-100 pb-4">
          <div className="inner-profile-1 d-flex align-items-center justify-content-center">
            <img src={profile4} alt="" className="profile-img w-10" />
            <h6 className="m-0 px-1">Virat Kohli</h6>
          </div>
          <div className="inner-profile-2 d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faEye} />
            <h6 className="m-0 px-1">1.4k Views</h6>
            <img src={share} alt="" className="share p" />
          </div>
        </div>
      </div>

      <div className="box mb-4">
        <img src={Box3} alt="" className="box-img" />
        <div class="align-emoji">
          ✍️
          <h1 class="align-emoji-header">Article</h1>
        </div>
        <div class="content3-left-box1-row">
          <h1 class="content3-left-box1-row-header">
            Finance & Investment Elite Social Mixer @Lujiazui
          </h1>
          <i class="fa-solid fa-ellipsis content3-left-box1-row-icon"></i>
        </div>
        <div className="schedule d-flex align-items-center justify-content-between w-100 px-4">
          <div className="schedule-left d-flex gap-1 align-items-center">
            <FontAwesomeIcon icon={faCalendar} fontSize={12} />
            <h6>Fri, 12 Oct, 2018</h6>
          </div>
          <div className="schedule-right d-flex gap-1 align-items-center">
            <FontAwesomeIcon icon={faLocationDot} fontSize={12} />
            <h6>Ahemdabad, India</h6>
          </div>
        </div>
        <button className="visit-button">Visit Button</button>
        <div className="profile d-flex align-items-center justify-content-space-between w-100 pb-4">
          <div className="inner-profile-1 d-flex align-items-center justify-content-center">
            <img src={profile4} alt="" className="profile-img w-10" />
            <h6 className="m-0 px-1">Virat Kohli</h6>
          </div>
          <div className="inner-profile-2 d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faEye} />
            <h6 className="m-0 px-1">1.4k Views</h6>
            <img src={share} alt="" className="share " />
          </div>
        </div>
      </div>

      <div className="box mb-4">
        <div class="align-emoji">
          💼
          <h1 class="align-emoji-header">Job</h1>
        </div>
        <div class="content3-left-box1-row">
          <h1 class="content3-left-box1-row-header">Software Developer</h1>
          <i class="fa-solid fa-ellipsis content3-left-box1-row-icon"></i>
        </div>
        <div className="schedule d-flex align-items-center justify-content-between w-100 px-4">
          <div className="schedule-left d-flex gap-1 align-items-center">
            <FontAwesomeIcon icon={faCalendar} fontSize={12} />
            <h6>innovacer Analytics Private Ltd.</h6>
          </div>
          <div className="schedule-right d-flex gap-1 align-items-center">
            <FontAwesomeIcon icon={faLocationDot} fontSize={12} />
            <h6>Noida, India</h6>
          </div>
        </div>
        <button className="visit-button-2">Apply on Timesjobs</button>
        <div className="profile d-flex align-items-center justify-content-space-between w-100 pb-4">
          <div className="inner-profile-1 d-flex align-items-center justify-content-center">
            <img src={profile4} alt="" className="profile-img w-10" />
            <h6 className="m-0 px-1">Virat Kohli</h6>
          </div>
          <div className="inner-profile-2 d-flex align-items-center justify-content-center">
            <FontAwesomeIcon icon={faEye} />
            <h6 className="m-0 px-1">1.4k Views</h6>
            <img src={share} alt="" className="share " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
