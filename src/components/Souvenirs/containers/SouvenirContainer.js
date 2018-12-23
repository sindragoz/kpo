import Souvenirs from '../components/Souvenirs';
import {getSouvenirList, buySouvenir} from "../../../store/reducers/souvenir/actions";
import {connect} from "react-redux";

const mapStateToProps=(state)=>{
    return{
    souvenirList:state.Souvenir.souvenirList,
    user:state.User.user,
    gettingBuySouvenir:state.Souvenir.gettingBuySouvenir,
    buySouvenirError:state.Souvenir.buySouvenirError
    }
}

const mapDispatchToProps=(dispatch)=>({
    getSouvenirList:(day_id)=>dispatch(getSouvenirList()),   
    buySouvenir:(souvenir_id, dateStr, user_id)=>dispatch(buySouvenir(souvenir_id, dateStr, user_id))
})

export default connect(mapStateToProps,mapDispatchToProps)(Souvenirs);
