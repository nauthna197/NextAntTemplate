import React from "react";
import { FormLabel } from "../label/FormLabel";
import { Select } from "antd";
const { Option } = Select;

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
  firstOptionLabel?: string;
  options: any;
}

export const FormSelect: React.FC<Props> = props => {
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
      <Select
        disabled={props.disable}
        placeholder={props.placeHolder}
        onChange={props.onChange}
        className="w-100"
      >
        {props.firstOptionLabel ? (
          <Option value="">{props.firstOptionLabel}</Option>
        ) : (
          ""
        )}
        {Object.keys(props.options).map((key, index) => (
          <Option key={index} value={key}>
            {props.options[key]}
          </Option>
        ))}
      </Select>
    </React.Fragment>
  );
};
