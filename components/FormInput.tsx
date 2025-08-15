import { Input } from './ui/input';
import { Label } from './ui/label';

type FormInputProps = {
  id: string;
  label: string;
  value: string;
  setValue: (value: string) => void;
};

export default function FormInput({
  id,
  label,
  value,
  setValue,
}: FormInputProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}: </Label>
      <Input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={id === 'title'}
      />
    </div>
  );
}
