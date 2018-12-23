export default function SearchInfo(state = [], action) {
	switch (action.type) {

		case "GET_SOUVENIRS":
			if (action.status == 'processing')
				return { ...state, };
			if (action.status == 'success') {
				return { ...state,  souvenirList: action.payload };
			}
			return { ...state, };

		case "BUY_SOUVENIR":
			if (action.status == 'processing')
				return { ...state, gettingBuySouvenir: true, buySouvenirError: false };
			if (action.status == 'success') {
				return { ...state, gettingBuySouvenir: false};
			}
			return { ...state, gettingBuySouvenir: false, buySouvenirError: true };

		case "SELECT_ITEM":
			return { ...state, selectedTimeItem: action.payload };

		case "GET_SEARCH_RESULT":
		default:
			return state;
	}
}
