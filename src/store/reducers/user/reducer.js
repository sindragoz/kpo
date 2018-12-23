export default function SearchInfo(state = { user: {} }, action) {
	switch (action.type) {

		case "AUTH":
			if (action.status == 'processing')
				return { ...state, fetching: true, gettingTokenError: false };
			if (action.status == 'success') {
				localStorage.setItem("token", JSON.stringify(action.payload));
				return { ...state, fetching: false, isAuthorized: true };
			}
			return { ...state, fetching: false, gettingTokenError: true };

		case "GET_USER":
			if (action.status == 'processing')
				return { ...state };
			if (action.status == 'success') {
				return { ...state, user: action.payload };
			}
			return { ...state };

		case "UNAUTHORIZE":
			localStorage.removeItem("token");
			return { ...state, user: {} , isAuthorized: false};
		default:
			return state;
	}
}
