if (Meteor.isClient) {

	Template.postsList.events({
		'click input': function () {

			var postsCount =  Posts.find().fetch().length;

			console.log('Click Handler - Collection Count Before Insert ' + postsCount );
			console.log('Click Handler - Inserting.');
			Posts.insert({ name: 'post' + new Date().getTime() });
			console.log('Click Handler - Insert complete.');
			console.log('Click Handler - Collection Count After Insert ' + Posts.find().fetch().length );
		}
	});

	Template.postsList.helpers({
		posts: function () {

			var postsCount =  Posts.find().fetch().length
			console.log('posts Helper - Collection Count : ' + postsCount );
			return Posts.find();
		}
	});

	Template.postItem.helpers({
		postName: function () {
			var postsCount =  Posts.find().fetch().length
			console.log('postName Helper - Collection Count : ' + postsCount );
			if ( postsCount > 0 ) {
				return Posts.findOne(this._id)._id;
			}
		}
	});
}
