import { Label, CheckboxField } from '@redwoodjs/forms'

interface CheckboxProps {
  label: string
  name: string
}

const Checkbox = ({ label, name, ...rest }: CheckboxProps) => {
  return (
    <div className="field">
      <CheckboxField name={name} {...rest} />
      <Label name={name}>{label}</Label>
    </div>
  )
}

export default Checkbox
