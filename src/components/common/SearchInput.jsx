const SearchInput = ({
  value,
  onChange,
  placeholder
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full rounded-lg border px-4 py-3 outline-0"
    />
  )
}

export default SearchInput;