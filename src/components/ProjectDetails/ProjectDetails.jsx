// import React from 'react';

// import './ProjectDetails.scss';

// export default function ProjectDetails(props) {
//   const { showProjectDetails, onClickHandle } = props;

//   return (
//     <>
//     {console.log(props)}
//       {showProjectDetails && (
//         <div className="ProjectDetails" onClick={onClickHandle}>
//           <div className="project-modal">
//             <h1 className="project-modal-title">{props.title}</h1>
//             <h2 className="project-modal-subtitle">{props.subtitle}</h2>
//             <ul>
//               {props.stack.map((details) => (
//                 <li key={details.stack}>{details}</li>
//               ))}
//             </ul>
//             <h2 className="project-modal-title">Description</h2>
//             <p>{props.description}</p>
//             <div className="project-modal-img-container">
//               {props.projectImages.map((details) => (
//                 <img
//                   key={details.projectImages}
//                   src={`../../../img/${details}.png`}
//                   alt={details.title}
//                   className="project-img"
//                 />
//               ))}
//             </div>
//             <button
//               className="btn"
//               onClick={onClickHandle}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }
