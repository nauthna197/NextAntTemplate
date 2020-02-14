import React from "react";

interface Props {
  onClick?: any;
  className?: string;
}

export const FormButtonSearch: React.FC<Props> = props => {
  return (
    <button
      onClick={props.onClick}
      className={
        props.className
          ? props.className
          : `ml-1 mr-1 ant-btn bg-primary text-white`
      }
    >
      {" "}
      <i className="fas fa-search mr-1"></i>Tìm kiếm
    </button>
  );
};
