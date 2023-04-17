// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { useRef } from 'react';


// export default function ModalNews(props){

//     const commentData = useRef();

//     function commentHandler(){
//         let commentValue = (commentData.current.value);
//         props.addCommentProp(commentValue, props.data.id);
//     }

//     async function addReadLater(){
//         const url = `${process.env.REACT_APP_URL}/addNews`;
//         const data = {
//             source : props.data.source, 
//             author : props.data.author, 
//             title : props.data.title,
//             description : props.data.description,
//             url : props.data.url,
//             image : props.data.image,
//             publishedat : props.data.publishedat,
//             comment : props.data.comment,
//         }

//         const requestConfigs = { method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)};

//         const response = await fetch(url, requestConfigs);
//         const resData = await response.json();
//         console.log(resData);
//     }

//     function addReadLaterHandler(){
//         props.handleClose();
//         commentHandler();
//         addReadLater();
//         console.log(commentData);
//     }

//     return (
//         <>
//         <Modal id= "modal" show={props.show} onHide={props.handleClose}>
//         <Modal.Header closeButton>
//             <Modal.Title>{props.data.title}</Modal.Title>
//         </Modal.Header>
//         <img id='modal-img' src = {props.data.image} alt = {props.data.title}/>
//         <Modal.Body>{props.data.description}</Modal.Body>
//         <p id = "comment">{`Your Note : ${props.data.comment || "No Notes added"}`}</p>
//         <input ref ={commentData} type="text" placeholder="Add your Note here"/>        
//         <Modal.Footer>
//             <Button variant="secondary" onClick={props.handleClose}>
//             Close
//             </Button>
//             <Button variant="primary" onClick={addReadLaterHandler}>
//             Save Changes
//             </Button>
//         </Modal.Footer>
//         </Modal>
//         </>
//     );
// }