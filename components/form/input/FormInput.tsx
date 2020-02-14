import React from "react";
import { Input } from "antd";
import { FormLabel } from "../label/FormLabel";

interface Props {
  name: string;
  label?: string;
  type?: string;
  require?: boolean;
  disable?: boolean;
  defaultValue?: any;
  onChange?: any;
  onBlur?: any;
  placeHolder?: string;
}

export const FormInput: React.FC<Props> = props => {
  return (
    <React.Fragment>
      {props.label ? (
        <FormLabel
          require={props.require}
          label={props.label}
          nameFor={props.name}
          additionText=""
        />
      ) : (
        ""
      )}
      <Input
        disabled={props.disable}
        type={props.type ? props.type : "text"}
        placeholder={props.placeHolder}
        onChange={props.onChange}
        name={props.name}
        onBlur={props.onBlur}
      />
    </React.Fragment>
  );
};
