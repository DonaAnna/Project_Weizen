import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";

export default function WidgetSm() {

  const [users,setUsers] = useState([])

  useEffect(()=>{
    const getUsers = async()=>{
      try{
      const res = await userRequest.get("users/?new=true")
      setUsers(res.data)
    }catch{}
  };
  getUsers();
},[]);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src={users.img || "https://th.bing.com/th/id/OIP.-rGsHjMED4Na4nhsqGwCAAAAAA?pid=ImgDet&w=300&h=300&rs=1"}
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}