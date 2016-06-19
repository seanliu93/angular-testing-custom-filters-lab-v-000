describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

  it('should filter on favorite food', function () {
    var mockedList = [{
      name: 'bob',
      favoriteFood: 'pizza'
    }, {
      name: 'sam',
      favoriteFood: 'bananas'
    }, {
      name: 'billy',
      favoriteFood: 'pears'
    }];

    var results = $filter('favoriteFood')(mockedList, 'pears');

    expect(results.length).toBe(1);
    expect(results[0].name).toBe('billy');
  });
});

