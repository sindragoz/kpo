export default function SearchInfo(state = [], action) {
	switch (action.type) {

		case "GET_SHEDULE":
			if (action.status == 'processing')
				return { ...state, gettingShedule: true, gettingSheduleError: true };
			if (action.status == 'success') {
				return { ...state, gettingShedule: false, shedule: action.payload };
			}
			return { ...state, gettingShedule: false, gettingSheduleError: true };

		case "BUY_SEAT":
			if (action.status == 'processing')
				return { ...state, gettingBuySeat: true, buySeatError: false };
			if (action.status == 'success') {
				return { ...state, gettingBuySeat: false};
			}
			return { ...state, gettingBuySeat: false, buySeatError: true };

		case "SELECT_ITEM":
			return { ...state, selectedTimeItem: action.payload };

		case "GET_SEARCH_RESULT":
		default:
			return state;
	}
}
