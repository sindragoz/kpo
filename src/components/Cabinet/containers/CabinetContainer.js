import Cabinet from '../components/Cabinet';
import {getOrders,createShedule} from "../../../store/reducers/order/actions";
import {connect} from "react-redux";

const mapStateToProps=(state)=>{
    return{
    orders:state.Order.orders,
    user:state.User.user,
    creatingShedule:state.Order.creatingShedule,
    creatingSheduleError:state.Order.creatingSheduleError
    }
}

const mapDispatchToProps=(dispatch)=>({
    getOrders:(user_id)=>dispatch(getOrders(user_id)), 
    createShedule:(day_id, seat_count, seat_price, hour)=>dispatch(createShedule(day_id, seat_count, seat_price, hour))
})

export default connect(mapStateToProps,mapDispatchToProps)(Cabinet);
