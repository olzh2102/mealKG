// -------- Storage Controller --------

// -------- Item Controller --------

const ItemCtrl = (function(){
	// Item Constructor
	const Item = function(id, name, calories) {
		this.id = id;
		this.name= name;
		this.calories = calories;
	}

	// Data Structure / State
	const data = {
		items: [
			{id: 0, name: 'Steak Dinner', calories: 3000},
			{id: 1, name: 'Doner Kebab', calories: 1200},
			{id: 2, name: 'Ice Cream', calories: 600},
		],
		currentItem: null,
		totalCalories: 0
	}
	// Public methods
	return {
		logData: function() {
			return data;
		}
	}
})();

// -------- UI Controller --------

const UICtrl = (function(){
	// Public methods
	return {

	}
})();

// -------- App Controller --------

const App = (function(ItemCtrl, UICtrl){
	// Public methods
	return {
		init: function() {
			console.log('Initialising app...');
		}
	}
})(ItemCtrl, UICtrl);

// Initialise the app
App.init();
