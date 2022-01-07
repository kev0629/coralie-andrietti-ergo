import React from 'react'
import ReactModal from 'react-modal'
import { useContext } from 'react';
import AppContext from "./AppContext";


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

export default function Modal(props) {

    const value = useContext(AppContext)
    // const [modalIsOpen, setIsOpen] = React.useState(true);

    function openModal() {
        value.setMainModalIsOpen(true);
    }

    function closeModal() {
        value.setMainModalIsOpen(false);
    }

    return (
    <ReactModal style={customStyles} isOpen={value.mainModalIsOpen} ariaHideApp={false}>
        <button className='modal-button' onClick={closeModal}>X</button>
        <div className="blackboard">
            <ul className="paper">
            {props.datas.map(data => (
                console.log(data.properties.Name.title[0]),
                <li key={data.id}>{data.properties.Name.title[0].plain_text}</li>
            ))}
            </ul>
        </div>
    </ReactModal>
    )
}
