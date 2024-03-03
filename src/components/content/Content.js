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
  faPencil,
  faExclamation,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import mustang from "../assets/mustang.jpg";
import share from "../assets/share.png";
import profile4 from "../assets/profile4.jpg";
import Box2 from "../assets/herobg2.jpg";
import Box3 from "../assets/mountain3.jpg";

import "bootstrap/dist/css/bootstrap.min.css";

const Content = () => {
  const [dropDown, setDropDown] = useState(false);
  const [dropDown2, setDropDown2] = useState(false);
  const [dropDown3, setDropDown3] = useState(false);
  const [dropDown4, setDropDown4] = useState(false);
  const [suggestion, setSuggestion] = useState(false);

  return (
    <div className="content">
      <div className="tags">
        <div className="left-tag d-flex my-2 gap-2">
          <li className="active-left-tag-li fw-bolder text-md">
            All Posts(32)
          </li>
          <li className="left-tag-li">Article</li>
          <li className="left-tag-li">Event</li>
          <li className="left-tag-li">Education</li>
          <li className="left-tag-li">Job</li>
        </div>
        <div className="right-tag d-flex my-2">
          <div className="inner-right-left-tag d-flex align-items-center justify-content-center gap-1 mx-2 p-2">
            <li className="fw-bolder inner-right-left-tag-header">
              Write A Post
            </li>
            <FontAwesomeIcon
              icon={faCaretDown}
              fontSize={25}
              className="drop-icon"
            />
          </div>
          <div className="inner-right-right-tag d-flex align-items-center justify-content-center gap-1 mx-2 p-2 join-group">
            <FontAwesomeIcon
              icon={faUserGroup}
              fontSize={15}
              className="friend-icon"
            />
            <li
              className="fw-bolder inner-right-left-tag-header"
              onClick={() => setSuggestion(!suggestion)}
            >
              Join Group
            </li>
          </div>
        </div>
      </div>

      <div className="second-tags">
        <h6>Posts(368)</h6>
        <div className="second-tags-filter">
          <h6>Filter: All</h6>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>

      <div className="content-wrapper ">
        <div className="content-left">
          <div className="box ">
            <img src={mustang} alt="" className="box-img" />
            <div className="align-emoji">
              ✍️
              <h1 className="align-emoji-header">Article</h1>
            </div>
            <div className="content3-left-box1-row">
              <h1 className="content3-left-box1-row-header">
                What if famous brands had regular fonts? Meet <br />
                RegulaBrands!
              </h1>
              <FontAwesomeIcon
                icon={faEllipsis}
                className={dropDown ? "drop-icon-click" : "drop-icon"}
                onClick={() => setDropDown(!dropDown)}
              />
            </div>
            {dropDown && (
              <ul className="dropdown-div">
                <li>Edit</li>
                <li>gekk</li>
                <li>Option 3</li>
              </ul>
            )}

            <h1 className="content3-left-box1-i">
              I've worked in UX for the better part of a decade. From now on, I
              plan to reimagine user...
            </h1>
            <div className="profile d-flex align-items-center justify-content-space-between w-100 pb-4">
              <div className="inner-profile-1 d-flex align-items-center justify-content-center">
                <img src={profile4} alt="" className="profile-img w-10" />
                <h6 className="m-0 px-1 profile-name">Virat Kohli</h6>
              </div>
              <div className="inner-profile-2 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faEye} className="eye-icon"/>
                <h6 className="m-0 px-1 eye-header">1.4k Views</h6>
                <img src={share} alt="" className="share p" />
              </div>
            </div>
          </div>

          <div className="box ">
            <img src={Box2} alt="" className="box-img" />
            <div className="align-emoji">
              ✍️
              <h1 className="align-emoji-header">Article</h1>
            </div>
            <div className="content3-left-box1-row">
              <h1 className="content3-left-box1-row-header">
                Tax Benefits for Investment under National Pension <br />
                Scheme launched by Goverment
              </h1>
              <FontAwesomeIcon
                icon={faEllipsis}
                className={dropDown2 ? "drop-icon-click" : "drop-icon"}
                onClick={() => {
                  setDropDown2(!dropDown2);
                }}
              />
            </div>
            {dropDown2 && (
              <ul className="dropdown-div">
                <li>Edit</li>
                <li>Report</li>
                <li>Option 3</li>
              </ul>
            )}
            <h1 className="content3-left-box1-i">
              I've worked in UX for the better part of a decade. From now on, I
              plan to reimagine user...
            </h1>
            <div className="profile d-flex align-items-center justify-content-space-between w-100 pb-4">
              <div className="inner-profile-1 d-flex align-items-center justify-content-center">
                <img src={profile4} alt="" className="profile-img w-10" />
                <h6 className="m-0 px-1 profile-name">Virat Kohli</h6>
              </div>
              <div className="inner-profile-2 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faEye} className="eye-icon"/>
                <h6 className="m-0 px-1">1.4k Views</h6>
                <img src={share} alt="" className="share p" />
              </div>
            </div>
          </div>

          <div className="box ">
            <img src={Box3} alt="" className="box-img" />
            <div className="align-emoji">
              ✍️
              <h1 className="align-emoji-header">Article</h1>
            </div>
            <div className="content3-left-box1-row">
              <h1 className="content3-left-box1-row-header">
                Finance & Investment Elite Social Mixer @Lujiazui
              </h1>
              <FontAwesomeIcon
                icon={faEllipsis}
                className={dropDown3 ? "drop-icon-click" : "drop-icon"}
                onClick={() => setDropDown3(!dropDown3)}
              />
            </div>
            {dropDown3 && (
              <ul className="dropdown-div">
                <li>Edit</li>
                <li>Report</li>
                <li>Option 3</li>
              </ul>
            )}
            <div className="schedule">
              <div className="schedule-left d-flex gap-1 align-items-center">
                <FontAwesomeIcon icon={faCalendar} fontSize={12} className="schedule-header" />
                <h6 className="schedule-header">Fri, 12 Oct, 2018</h6>
              </div>
              <div className="schedule-right d-flex gap-1 align-items-center">
                <FontAwesomeIcon icon={faLocationDot} fontSize={12} className="schedule-header" />
                <h6 className="schedule-header">Ahemdabad, India</h6>
              </div>
            </div>
            <button className="visit-button">Visit Button</button>
            <div className="profile d-flex align-items-center justify-content-space-between w-100 pb-4">
              <div className="inner-profile-1 d-flex align-items-center justify-content-center">
                <img src={profile4} alt="" className="profile-img w-10" />
                <h6 className="m-0 px-1 profile-name">Virat Kohli</h6>
              </div>
              <div className="inner-profile-2 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faEye} className="eye-icon"/>
                <h6 className="m-0 px-1">1.4k Views</h6>
                <img src={share} alt="" className="share " />
              </div>
            </div>
          </div>

          <div className="box ">
            <div className="align-emoji">
              💼
              <h1 className="align-emoji-header">Job</h1>
            </div>
            <div className="content3-left-box1-row">
              <h1 className="content3-left-box1-row-header">
                Software Developer
              </h1>
              <FontAwesomeIcon
                icon={faEllipsis}
                className={dropDown4 ? "drop-icon-click" : "drop-icon"}
                onClick={() => setDropDown4(!dropDown4)}
              />
            </div>
            {dropDown4 && (
              <ul className="dropdown-div">
                <li>Edit</li>
                <li>Report</li>
                <li>Option 3</li>
              </ul>
            )}
            <div className="schedule">
              <div className="schedule-left d-flex gap-1 align-items-center">
                <FontAwesomeIcon icon={faCalendar} fontSize={12} className="schedule-header"/>
                <h6 className="schedule-header">innovacer Analytics Private Ltd.</h6>
              </div>
              <div className="schedule-right d-flex gap-1 align-items-center">
                <FontAwesomeIcon icon={faLocationDot} fontSize={12} className="schedule-header"/>
                <h6 className="schedule-header">Noida, India</h6>
              </div>
            </div>
            <button className="visit-button-2">Apply on Timesjobs</button>
            <div className="profile d-flex align-items-center justify-content-space-between w-100 pb-4">
              <div className="inner-profile-1 d-flex align-items-center justify-content-center">
                <img src={profile4} alt="" className="profile-img w-10" />
                <h6 className="m-0 px-1 profile-name">Virat Kohli</h6>
              </div>
              <div className="inner-profile-2 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faEye} className="eye-icon"/>
                <h6 className="m-0 px-1">1.4k Views</h6>

                <img src={share} alt="" className="share " />
              </div>
            </div>
          </div>
        </div>

        {/* //!!!! content right */}
        <div className="content-right ">
          <div className="inner-content-right d-flex justify-content-between">
            <div className="hold-location d-flex justify-content-center align-items-center gap-1">
              <FontAwesomeIcon
                icon={faLocationDot}
                fontSize={20}
                className="location-icon"
              />
              <h6 className="location-header">Noida, India</h6>
            </div>
            <FontAwesomeIcon
              icon={faPencil}
              fontSize={20}
              className="pencil-icon"
            />
          </div>
          <div className="hold-para d-flex align-items-center justify-content-center gap-2 p-2">
            <FontAwesomeIcon icon={faExclamation} className="exlamation-icon" />
            <p className="hold-para-p">
              Your location will help us serve better and extend a personalised
              experience.
            </p>
          </div>
          <div className="group">
            <div className="inner-group-1 d-flex align-items-center justify-content-center gap-3">
              <FontAwesomeIcon icon={faThumbsUp} className="thumb-icon" />
              <h6 className="group-header">RECOMMENDED GROUPS</h6>
            </div>

            {suggestion && (
              <div>
                <div className="inner-group-profile d-flex align-items-center justify-content-between my-2">
                  <div className="left-inner-group-profile d-flex align-items-center justify-content-center gap-2">
                    <img src={profile4} alt="" className="profile-img" />
                    <h6 className="left-inner-group-profile-header">
                      Virat Kohli
                    </h6>
                  </div>
                  <h6 className="follow">Follow</h6>
                </div>
                <div className="inner-group-profile d-flex align-items-center justify-content-between my-2">
                  <div className="left-inner-group-profile d-flex align-items-center justify-content-center gap-2">
                    <img src={profile4} alt="" className="profile-img" />
                    <h6 className="left-inner-group-profile-header">
                      Virat Kohli
                    </h6>
                  </div>
                  <h6 className="follow">Follow</h6>
                </div>
                <div className="inner-group-profile d-flex align-items-center justify-content-between my-2">
                  <div className="left-inner-group-profile d-flex align-items-center justify-content-center gap-2">
                    <img src={profile4} alt="" className="profile-img" />
                    <h6 className="left-inner-group-profile-header">
                      Virat Kohli
                    </h6>
                  </div>
                  <h6 className="follow">Follow</h6>
                </div>
                <div className="inner-group-profile d-flex align-items-center justify-content-between my-2">
                  <div className="left-inner-group-profile d-flex align-items-center justify-content-center gap-2">
                    <img src={profile4} alt="" className="profile-img" />
                    <h6 className="left-inner-group-profile-header">
                      Virat Kohli
                    </h6>
                  </div>
                  <h6 className="follow">Follow</h6>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
