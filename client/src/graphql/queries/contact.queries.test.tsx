import { gql } from 'apollo-boost';
import { ContactListQuery } from './contact.queries';

describe("contact queries testing", () => {
    test('ContactListQuery matches expected query', () => {
        const expected = gql`
        {
          contacts {
            id
            name, 
            email,
            dateOfBirth
          }
        }
        `;
        expect(ContactListQuery).toEqual(expected);
    });
    test('ContactDetailQuery matches expected query', () => {
        const ContactDetailQuery = gql`
        query ($id: ID!) {
            contact(id: $id) {
                id
                name, 
                email,
                dateOfBirth
            }
        }`;
        expect(ContactDetailQuery).toMatchSnapshot();
    })
})

