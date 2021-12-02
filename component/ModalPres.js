
import ReactModal from 'react-modal';
import Image from 'next/image';
import { motion } from "framer-motion";
import parcours from '../public/pictures/parcours.png'


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex:3,
      backgroundColor:'transparent',
      border:'transparent'
    },
    overlay: {zIndex: 1000}
  };

export default function ModalPres(props) {

    

    return (
    <ReactModal style={customStyles} isOpen={props.isOpen} ariaHideApp={false}>
      <div >
        <button className='modal-button' onClick={props.closeModalPres}>X</button>
        <div style={{backgroundColor:'white',padding:10}}>
            <Image src={parcours} alt='parcours' width={1390/2} height={901/2}/>
        </div>
      </div>
    </ReactModal>
    )
}
