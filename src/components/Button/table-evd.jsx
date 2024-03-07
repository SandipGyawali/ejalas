/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";

const iconLabel = {
  editIcon: "fa-regular:edit",
  viewIcon: "ph:eye",
  deleteIcon: "fa6-regular:trash-can",
};

const iconColor = {
  delete: "text-darkRed",
  edit: "text-blue",
  view: "text-black",
};

// button of the table edit, view and delete
function EVD({ href, btnType }) {
  return (
    <a
      href={href}
      className={`${
        btnType === "edit"
          ? iconColor.edit
          : btnType == "delete"
            ? iconColor.delete
            : iconLabel.view
      }`}
    >
      <Icon
        icon={
          btnType === "edit"
            ? iconLabel.editIcon
            : btnType == "delete"
              ? iconLabel.deleteIcon
              : iconLabel.viewIcon
        }
        className="m-auto sm:text-lg text-lg"
      />
    </a>
  );
}

export default EVD;
