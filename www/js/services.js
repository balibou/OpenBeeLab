angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ruche #1',
    lastText: 'Faucon Millenium',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png',
    type: 'dadant',
    poid: 37,
    poid2: 5,
    nbr:1
  }, {
    id: 1,
    name: 'Ruche #2',
    lastText: 'Enterprise',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },{
    id: 2,
    name: 'Ruche #3',
    lastText: 'X-Wing',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Ruche #4',
    lastText: 'Concorde',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Ruche #5',
    lastText: 'Rafale',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    },
    add: function(chat){
      chats.push(chat);
    }
  };
});
