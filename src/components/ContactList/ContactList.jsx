import propTypes from 'prop-types';
import css from './ContactList.module.css';
import { Button } from '@mui/material';

export const ContactList = ({ phonebookContacts, handleDelete }) => {
  return (
    <div>
      <ul>
        {phonebookContacts.map(contact => (
          <li key={contact.id} className={css.contactListItem}>
            {contact.name}: {contact.number}
            <div className={css.BtnBox}>
              <Button
                size="small"
                variant="contained"
                type="button"
                onClick={() => handleDelete(contact.id)}
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};
