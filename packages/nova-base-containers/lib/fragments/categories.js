import { createFragment } from 'apollo-client';
import gql from 'graphql-tag';
import Categories from 'meteor/nova:categories';

Categories.fragments = {
  full: createFragment(gql`
    fragment fullCategoryInfo on Category {
      _id
      name
      description
      order
      slug
      image
      parent { 
        # feels weird to repeat the same fields... but we cannot call the fragment on itself?!
        _id
        name
        description
        order
        slug
        image
      }
    }
  `),
  essential: createFragment(gql`
    fragment essentialCategoryInfo on Category {
      _id
      name
      slug
    }
  `),
};