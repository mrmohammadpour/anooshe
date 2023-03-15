import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Tost = (position) => {
    return(
        <div>
            <ToastContainer
                autoClose={"5000"}
                position={"top-center"}
                className="toast-container"
                toastClassName="dark-toast" 
          
            />
        </div>
    );
}
export default Tost;