

export const TextInput = ({handleChange, searchValue}) => {
return (
    <input 
    onChange={handleChange}
    value={searchValue}
    type='search' 
    placeholder="Type your Digimon"
    className="w-full text-3xl px-2"
    />
);
}