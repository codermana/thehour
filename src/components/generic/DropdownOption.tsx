export default function DropdownOption({ option }: { option: string }) {
  let optionLabel = option.split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');

  return (
    <option value={option}>
      {optionLabel}
    </option>
  )
}
