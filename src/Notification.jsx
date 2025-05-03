import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const modalStyles = {
  position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
};
const modalContentStyles = {
  backgroundColor: 'white', padding: '20px', borderRadius: '5px', textAlign: 'center'
};

const Notification = ({ open, close }) => {
  useEffect(() => {
    if (open) {
      console.log("Modal opened!");
      const timer = setTimeout(() => {
        close();
        console.log("Modal auto-closed after 5 seconds.");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [open, close]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div style={modalStyles}>
      <div style={modalContentStyles}>
        <p>Notification: This is a portal-based modal!</p>
        <button onClick={close}>Close</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Notification;
