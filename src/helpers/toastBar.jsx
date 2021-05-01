import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({ autoClose: 5000, draggable: false });

export default function toastBar(message, type){

    let toastConfig = {
      position: toast.POSITION.TOP_CENTER,
    };

    if (type === 'success') return toast.success(message, toastConfig);
    if (type === 'info') return toast.info(message, toastConfig);
    if (type === 'error') return toast.error(message, toastConfig);
    if (type === 'warning') return toast.warning(message, toastConfig);
    
}
