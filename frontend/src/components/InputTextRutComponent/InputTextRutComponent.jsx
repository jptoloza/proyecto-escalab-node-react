import React, { forwardRef } from 'react'
import { IMaskInput } from 'react-imask';

const InputTextRutComponent = forwardRef(function InputTextRutComponent(props, ref) {
  const { onChange, ...other } = props
  return (
    <IMaskInput
      {...other}
      mask="00000000-#"
      definitions={{
        '#': /[0-9kK]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  )
})

export default InputTextRutComponent