// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }
export default function TabButton({ children, onClick, isSelected }) {
  
    return (
      <li>
        <button onClick={onClick} className={isSelected ? 'active' : undefined }>{children}</button>
      </li>
    );
  }
