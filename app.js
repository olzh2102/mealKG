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
		getItems: function() {
			return data.items
		},

		logData: function() {
			return data;
		}
	}
})();

// -------- UI Controller --------

const UICtrl = (function(){
	const UISelectors = {
		itemList: 'item-list'
	};

	// Public methods
	return {
		populateItemList: function(items) {
			let html = '';

			items.forEach(item => {
				html += `<li class="collection-item" id="item-${item.id}">
					<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
					<a href="#" class="edit-item secondary-content"><i class="fa fa-pencil"></i></a>
					</li>`
			});

			// Insert list item
			document.getElementById(UISelectors.itemList).innerHTML = html;
		}
	}
})();

// -------- App Controller --------

const App = (function(ItemCtrl, UICtrl){
	// Public methods
	return {
		init: function() {
			// Fetch items from data structure
			const items = ItemCtrl.getItems();

			// Populate list with items
			UICtrl.populateItemList(items);
		}
	}
})(ItemCtrl, UICtrl);

// Initialise the app
App.init();
