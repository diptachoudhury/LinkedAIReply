import React, { useState, useRef } from "react";

export const ChatSection = () => {
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState([{ content: "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask", isBotResponse: true }]);
  const textInputRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSendMessage = (event) => {
    event.preventDefault();
    const text = textInputRef.current.value.trim();

    if (text) {
      // Add user message
      setMessages([...messages, { content: text, isBotResponse: false }]);

      textInputRef.current.value = "";
    }
    setSubmitted(true);
  };

  const handleInsertText = () => {
    const contentEditableDiv = document.querySelector('.msg-form__contenteditable p');
    const placeholder = document.querySelector('.msg-form__placeholder');
    if (contentEditableDiv) {
      const textToInsert = reply[0].content; 
      contentEditableDiv.textContent = textToInsert;
    }
          
          if (placeholder) {
            placeholder.innerHTML = '';
          }
  };

  return (
    <div className="plasmo-flex plasmo-flex-col plasmo-relative plasmo-h-screen plasmo-bg-white
     plasmo-overflow-auto plasmo-p-4"  style={{height:'250px', width:'420px',overflowX:'hidden',  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }} >
      {messages.map((message, index) => (
        <div key={index} className='plasmo-flex plasmo-flex-col '>
          {/* <div className='plasmo-flex plasmo-items-center plasmo-justify-end'>
            {!message.isBotResponse && (
              <div className="plasmo-mr-2 plasmo-rounded-full plasmo-bg-gray-700 plasmo-py-2 plasmo-px-3 plasmo-text-white">
                {message.content}
              </div>
            )}
          </div>

          <div className='plasmo-flex plasmo-items-center plasmo-justify-start'>
            {reply[0].isBotResponse && (
              <div className="plasmo-ml-2 plasmo-rounded-full plasmo-bg-blue-500 plasmo-py-2 plasmo-px-3 plasmo-text-white">
                {reply[0].content}
              </div>
            )}
          </div> */}

        <div className='plasmo-flex plasmo-items-center plasmo-justify-end'>
          {!message.isBotResponse && (
            <div
              className="plasmo-mr-2 plasmo-ml-6  plasmo-py-2 plasmo-mb-2 plasmo-px-3 text-black" style={{backgroundColor:'#dbeafe', borderRadius:'12px'}}
            >
              {message.content}
            </div>
          )}
        </div>

        <div className='plasmo-flex plasmo-items-center plasmo-justify-start'>
          {reply[0].isBotResponse && (
            <div
              className="plasmo-ml-2 plasmo-mr-6  plasmo-py-2 plasmo-px-3 text-black"  style={{ backgroundColor: '#dfe1e7', borderRadius: '12px', whiteSpace: 'pre-wrap' }} 
            >
              {reply[0].content}
            </div>
          )}
        </div>



        </div>
      ))}
         <form onSubmit={handleSendMessage} className="plasmo-flex plasmo-flex-col  plasmo-w-full  plasmo-absolute plasmo-bottom-0 plasmo-p-4">
        <div>
        <input
          type="text"
          ref={textInputRef}
          placeholder="Your Prompt"
          className="plasmo-flex plasmo-flex-col plasmo-items-center plasmo-bottom-0 plasmo-p-4 plasmo-mx-2 plasmo-border plasmo-border-gray-300"
          style={{ width: "90%" }}    
       />
        </div>
        
        <div style={{display:'flex', justifyContent:'flex-end', marginRight:'35px', marginTop:'8px'}}>
          <div>
            <button type="submit"    
              className={`plasmo-ml-2 plasmo-py-2 plasmo-px-4 plasmo-bg-blue-500 plasmo-text-white ${
                  submitted ? 'disabled' : 'hover:bg-blue-600 focus:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400'
                }`}
              >
                {submitted ? 'Regenerate' : 'Generate'}
           </button>
            {messages.length!=0 && <button onClick={handleInsertText} className="plasmo-ml-2 plasmo-py-2 plasmo-px-4 plasmo-bg-blue-500 plasmo-text-white  hover:bg-blue-600 focus:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">
            Insert Text
          </button>
            }
        </div>
        </div>
     
        
      </form>

    </div>
  );
};
