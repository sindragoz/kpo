import Shedule from '../components/Shedule';
import {getShedule, selectTimeItem, buySeat} from "../../../store/reducers/shedule/actions";
import {connect} from "react-redux";

const mapStateToProps=(state)=>{
    return{
    shedule:state.Shedule.shedule,
    selectedTimeItem:state.Shedule.selectedTimeItem,
    user:state.User.user,
    gettingBuySeat:state.Shedule.gettingBuySeat,
    buySeatError:state.Shedule.buySeatError
    }
}

const mapDispatchToProps=(dispatch)=>({
    getShedule:(day_id)=>dispatch(getShedule(day_id)),
    selectTimeItem:(timeItem)=>dispatch(selectTimeItem(timeItem)),
    buySeat:(booking, shedule_id, user_id)=>dispatch(buySeat(booking, shedule_id, user_id))
})

export default connect(mapStateToProps,mapDispatchToProps)(Shedule);
