import { fireEvent, render, waitFor } from '@testing-library/react';
// import gql from 'graphql-tag';
import ApolloClient, { gql } from 'apollo-boost';
import App from 'App';
import apolloClient from 'graphql/apollo.client';
import { DeleteContactMutation } from 'graphql/mutations/contact.mutations';
import React from 'react';
import { ApolloProvider } from 'react-apollo-hooks';


describe('tests the createuser mutation', async () => {
    test('Add the data in persons list', async () => {
        const AddContactMutation = gql`
        mutation addContact($name: String!, $email: String!, $dateOfBirth: String!) {
          addContact(name: $name, email: $email, dateOfBirth: $dateOfBirth) {
            id,
            name,
            email,
            dateOfBirth
          }
        }
        `;
        await expect(apolloClient.mutate({
            mutation: AddContactMutation
          }))     
    });  
    test('Update the data in the person list', () => {
        const UpdateContactMutation = gql`
         mutation updateContact($id: ID!, $name: String!, $email: String!, $dateOfBirth: String!) {
            updateContact(id: $id, name: $name, email: $email, dateOfBirth: $dateOfBirth) {
                id,
                name,
                email,
                dateOfBirth
            }
        }`; 
        expect(apolloClient.mutate({
            mutation: UpdateContactMutation
          }))  
    });
    
    test(' Delete the data in the person list', () =>{
      const DeleteContactMutation  = gql`
        mutation deleteContact($id: ID!) {
          deleteContact(id: $id)
        }
      `;
      expect(apolloClient.mutate({
        mutation: DeleteContactMutation
      }))
    });

});