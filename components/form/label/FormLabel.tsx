import React, { ReactNode } from 'react'

interface Props {
    nameFor:string,
    label:string,
    require?:boolean
    additionText?:ReactNode;
}

export const FormLabel: React.FC<Props> = (props) => {
    return (
        <label htmlFor={props.nameFor} className="newca-label">
        {props.label}
        {props.require ? (
          <span className="text-danger ml-1">*</span>
        ) : (
          ""
        )}
        {props.additionText}
      </label>
    )
}
