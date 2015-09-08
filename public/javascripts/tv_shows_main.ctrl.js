
angular.module('app').controller("MainController", function(){
  var vm = this;
  vm.title = 'TV Shows with AngularJS ';
  vm.searchInput = '';
  vm.shows = [
    {
      title: 'Game of Thrones',
      year: 2011,
      favorite: false
    },
    {
      title: '24',
      year: 2001,
      favorite: true
    },
    {
      title: 'Legend of Korra',
      year: 2012,
      favorite: true
    },
    {
      title: 'Teen Titans Go!',
      year: 2013,
      favorite: true
    },
    {
      title: 'Greys Anatomy',
      year: 2005,
      favorite: false
    }
  ];

  vm.orders = [
    {
      id: 1,
      title: 'Year Ascending',
      key: 'year',
      reverse: false
    },
    {
      id: 2,
      title: 'Year Descending',
      key: 'year',
      reverse: true
    },
    {
      id: 3,
      title: 'Title Ascending',
      key: 'title',
      reverse: false
    },
    {
      id: 4,
      title: 'Title Descending',
      key: 'title',
      reverse: true
    }
  ];
  vm.order = vm.orders[0];

  vm.new = {};
  vm.addShow = function() {
    vm.shows.push(vm.new);
    vm.new = {};
  };

});
