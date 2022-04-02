import { useContext } from 'react';
import AlertContext from '../context/alertContext/AlertContext';
import {AiOutlineCloseCircle} from 'react-icons/ai'


function Alert() {
    const {alert}=useContext(AlertContext)
    return alert !== null && (
        
            <p className="flex mb-1 space-x-2">
                {alert.type === "error" && (
                    <AiOutlineCloseCircle color='red' className='font-bold w-5 h-5 m-0.5 flex-none'/>
                    )}
                <strong className="flex-1 text-base font-semibold leading-7 ">{ alert.msg }</strong>
            </p>
    )
}

export default Alert;