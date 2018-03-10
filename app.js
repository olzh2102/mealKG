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

		addItem: function(name, calories) {
			let ID;
			 // Create ID
			if(data.items.length > 0) {
				ID = data.items[data.items.length - 1].id + 1;
			} else {
			 	ID = 0;
			}

			// Calories to number
			calories = parseInt(calories);

			// Create new item
			newItem = new Item(ID, name, calories);

			 // Add to items array
			data.items.push(newItem);
		},

		logData: function() {
			return data;
		}
	}
})();

// -------- UI Controller --------

const UICtrl = (function(){
	const UISelectors = {
		itemList: 'item-list',
		addBtn: '.add-btn',
		itemNameInput: '#item-name',
		itemCaloriesInput: '#item-calories'
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
		},

		getItemInput: function() {
			return {
				name: document.querySelector(UISelectors.itemNameInput).value,
				calories: document.querySelector(UISelectors.itemCaloriesInput).value
			}
		},

		getSelectors: function() {
			return UISelectors;
		}
	}
})();

// -------- App Controller --------

const App = (function(ItemCtrl, UICtrl){
	// Load event listeners
	const loadEventListeners = () => {
		// Get UI Selectors
		const UISelectors = UICtrl.getSelectors();

		// Add item event
		document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
	}

	// Add item submit
	const itemAddSubmit = e => {
		e.preventDefault();

		// Get form input from UI Controller
		const input = UICtrl.getItemInput();

		// Check if the input fields are not empty
		if(input.name !== '' && input.calories !== '') {
			// Add item
			const newItem = ItemCtrl.addItem(input.name, input.calories);
		}
	}

	// Public methods
	return {
		init: function() {
			// Fetch items from data structure
			const items = ItemCtrl.getItems();

			// Populate list with items
			UICtrl.populateItemList(items);

			// Load event listeners
			loadEventListeners();
		}
	}
})(ItemCtrl, UICtrl);

// Initialise the app
App.init();
