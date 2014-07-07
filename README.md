meteor-collection-test
======================

Sample code showcasing Meteor 0.8.2 collections behavior

Same code behaves differently in Meteor 0.8.1.3 and 0.8.2.
In Meteor 0.8.2, Collection count shows zero at certain points even when the collection has previously added data. 
Logs are added demonstrate this - watch the console when adding a new item to the collection (simply click the button to add).

Helpers are wrapped with data checks to supress errors and to demo the logs - but need to know the reason and proper way to resolve this.
