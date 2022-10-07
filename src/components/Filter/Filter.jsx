export const Filter = ({startFilter, handleFilter}) => {
    return (
        <label>
            Find contacts by name
            <input
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={startFilter}
                onChange={handleFilter}
            />
        </label>
    )
}