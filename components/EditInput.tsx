import { Input } from './ui/input';
import { Label } from './ui/label';

type EditInputProps = {
  id: string;
  label: string;
  value: string;
  setValue: (value: string) => void;
};

export default function EditInput({
  id,
  label,
  value,
  setValue,
}: EditInputProps) {
  return (
    <div>
      <Label htmlFor={id}>{label}: </Label>
      <Input
        type="text"
        id={id}
        name={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
    </div>
  );
}
