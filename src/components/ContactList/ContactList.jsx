export const ContactList = ({contacts, filter}) => {
    return (
        <ul>
            {contacts.map(({ name, id, number }) => {
                const smName = name.toLowerCase();
                const smFilter = filter.toLowerCase();

                if (smName.includes(smFilter)) {
                    return (
                        <li key={id}>
                            <span>{name}: </span>
                            <span>{number}</span>
                        </li>
                    )
                }
                })}
        </ul>
    )
}