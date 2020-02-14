import React from "react";
import Link from "next/link";

interface Props {
  toUrl: string;
  className?: string;
}

export const FormButtonCreate: React.FC<Props> = props => {
  return (
    <Link href={props.toUrl}>
      <a>
        <button
          className={
            props.className
              ? props.className
              : `ml-1 mr-1 ant-btn bg-success text-white`
          }
        > <i className="fas fa-plus mr-1"></i>Thêm mới</button>
      </a>
    </Link>
  );
};
