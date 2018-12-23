export default function SearchInfo(state = [], action) {
	switch (action.type) {

		case "GET_ORDERS":
			if (action.status == 'processing')
				return { ...state, };
			if (action.status == 'success') {
				return { ...state,  orders: action.payload };
			}
			return { ...state, };

		case "BUY_SOUVENIR":
			if (action.status == 'processing')
				return { ...state, creatingShedule: true, creatingSheduleError: false };
			if (action.status == 'success') {
				return { ...state, creatingShedule: false};
			}
			return { ...state, creatingShedule: false, creatingSheduleError: true };

			default:
			return state;
	}
}
