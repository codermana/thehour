import DropdownOption from "./DropdownOption";

interface DropdownProps {
  options: string[],
  selectedOption: string | null,
  onOptionSelect: (value: string | null) => void,
  defaultLabel: string,
}

export default function Dropdown({ options, selectedOption, onOptionSelect, defaultLabel }: DropdownProps) {
  return (
    <select
      value={selectedOption ?? ""}
      onChange={(e) => {
        const value = e.target.value
        onOptionSelect(value === "" ? null : value)
      }}
      className="px-4 py-3 bg-gray-50 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-codermana-orange text-gray-900 dark:text-white">
        <option value="">{defaultLabel}</option>

        {options.map((option) => <DropdownOption option={option} key={option}/>)}
    </select>
  );
}
