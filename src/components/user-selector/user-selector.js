import React from "react";
import { Select } from "antd";
import "./user-selector.scss";

function UserSelector(props) {
  const options = [
    { label: "Profile", value: "profile" },
    { label: "Notifications", value: "notifications" },
    { label: "Contracts", value: "contracts" },
    { label: "My jobs", value: "my jobs" },
    { label: "Chats", value: "chats" },
    { label: "Log out", value: "log out" }
  ];

  return (
    <div className="user-selector">
      <Select options={options} />
    </div>
  );
}

export default UserSelector;
