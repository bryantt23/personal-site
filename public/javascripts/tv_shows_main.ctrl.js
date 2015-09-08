
angular.module('app').controller("MainController", function(){
  var vm = this;
  vm.title = 'AngularJS Tutorial Example';
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
});
