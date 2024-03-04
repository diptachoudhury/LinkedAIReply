import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useState, useEffect, useRef } from "react"

import { CountButton } from "~features/count-button"
import { ChatSection } from "~features/chat-section"




export const config: PlasmoCSConfig = {
  matches: ["https://www.linkedin.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const switchImageUrl = "https://www.svgrepo.com/show/11660/magic-wand.svg"; 





  // useEffect(() => {
  //   document.body.addEventListener('click', handleOutsideClick);

  //   return () => {
  //     document.body.removeEventListener('click', handleOutsideClick);
  //   };
  // }, []);


  useEffect(() => {
    // const addSwitchImage = () => {
    //   const contentEditableDiv = document.querySelector('.msg-form__contenteditable');
    //   if (contentEditableDiv && document.activeElement === contentEditableDiv) {
    //     const switchImage = document.createElement('img');
    //     switchImage.src = switchImageUrl;
    //     switchImage.style.height= '25px';
    //     switchImage.style.width= '25px';
    //     switchImage.style.position = 'absolute';
    //     switchImage.style.bottom = '0.5rem';
    //     switchImage.style.right = '6rem';
    //     switchImage.style.cursor = 'pointer'; 
    //     switchImage.addEventListener('click', () => {
    //       setChatOpen(true);
    //     });
    //     contentEditableDiv.appendChild(switchImage);
    //     clearInterval(intervalId);
    //   }
    // };

    const addSwitchImage = () => {
      const contentEditableDiv = document.querySelector('.msg-form__contenteditable');
    
      if (contentEditableDiv) {
        const switchImage = document.createElement('img');
        switchImage.src = switchImageUrl;
        switchImage.style.height = '25px';
        switchImage.style.width = '25px';
        switchImage.style.position = 'absolute';
        switchImage.style.bottom = '0.5rem';
        switchImage.style.right = '6rem';
        switchImage.style.cursor = 'pointer';
    
        const handleSwitchClick = () => {
          setChatOpen(true);
        };
    
        switchImage.addEventListener('click', handleSwitchClick);
    
        const handleInputFocus = () => {
          contentEditableDiv.appendChild(switchImage);
        };
    
        const handleInputBlur = () => {
          switchImage.remove();
        };
    
        contentEditableDiv.addEventListener('focus', handleInputFocus);
        contentEditableDiv.addEventListener('blur', handleInputBlur);
    
        clearInterval(intervalId);
      }
    };
    

    const intervalId = setInterval(addSwitchImage, 500);

    return () => clearInterval(intervalId);
  }, [chatOpen]);




  return (
    <div  style={{ position:'fixed', top:'25%',left:'35%'  }}>

      {chatOpen && <div>
        <div style={{textAlign:'end', cursor: 'pointer'}}  onClick={() => setChatOpen(false)}>Close</div>
        <ChatSection />
        </div>}
    </div>
  )
}

export default PlasmoOverlay





