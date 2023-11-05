import Close from "../svg/Close";
import PropTypes from 'prop-types';
import { useShowNotifProvider } from "../hooks/UseSetMessage";

export default function ContactForm({setSendMessage}){
    const {showNotif, setShowNotif} = useShowNotifProvider();

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowNotif(!showNotif);
        setSendMessage(false)
    }

    return(
        <dialog id="modal" className="form">
            <a className="form__close-btn" onClick={()=>setSendMessage(false)}><Close/></a>
            <div className="form__subheading">
                <h3 aria-label="Send me a Message">Send <br/> me a <br/> Mess   <br/>age</h3>
                <img 
                    src="public/message.gif" 
                    alt="send message gif" 
                    draggable="false"
                    width={415}
                    height={415}
                />
            </div>
            <form onSubmit={handleSubmit} action="https://formsubmit.co/khimmanga445@gmail.com" method="POST" className="form__inputs">
                <input type="hidden" name="_captcha" value='false'/>
                <div className="form-group">
                    <input className="input" type="text" id="Name" name="name" placeholder=" " required/>
                    <label htmlFor="Name">Name</label>
                </div>
                <div className="form-group">                    
                    <input className="input" type="email" id="Email" name="email" placeholder=" " required/>
                    <label htmlFor="Email">Email</label>
                </div>
                <div className="form-group">                   
                    <textarea className="input" type="text" id="message" name="message" placeholder=" " required/>
                    <label htmlFor="message">Message</label>
                </div>
                <button type="submit">
                    Send <img src="public/Right.svg" alt="right arrow" draggable="false" width={30} height={30}/>
                </button>
            </form>
        </dialog>
    )
}

ContactForm.propTypes = {
    setSendMessage: PropTypes.func
}