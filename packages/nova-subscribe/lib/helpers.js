import Users from 'meteor/nova:users';
import { Utils } from 'meteor/nova:core';

Users.isSubscribedTo = (user, document) => {

  if (!user || !document) {
    // should return an error
    return false;
  }
  
  const { __typename, _id: itemId } = document;
  const documentType = Utils.capitalize(Utils.getCollectionNameFromTypename(__typename));
  
  if (user.subscribedItems && user.subscribedItems[documentType]) {
    return !!user.subscribedItems[documentType].find(subscribedItems => subscribedItems.itemId === itemId);
  } else {
    return false;
  }
};
