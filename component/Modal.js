import React from 'react'
import ReactModal from 'react-modal'


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

    },
  };

export default function Modal(props) {

    const [modalIsOpen, setIsOpen] = React.useState(true);

    function openModal() {
    setIsOpen(true);
    }

    function closeModal() {
    setIsOpen(false);
    }

    return (
    <ReactModal style={customStyles} isOpen={modalIsOpen} ariaHideApp={false}>
        <button onClick={closeModal}>X</button>
        <div className="blackboard">
            <ul className="paper">
            {props.datas.map(data => (
                <li key={data.id}>{data.properties.Name.title[0].plain_text}</li>
            ))}
            </ul>
        </div>
    </ReactModal>
    )
}
