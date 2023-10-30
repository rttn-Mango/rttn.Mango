import Close from "../svg/Close";
import PropTypes from 'prop-types'

export default function ContactForm({setSendMessage}){
    return(
        <dialog id="modal" className="form">
            <a className="form__close-btn" onClick={()=>setSendMessage(false)}><Close/></a>
            <div className="form__subheading">
                <h3>Send <br/> me a <br/> Mess   <br/>age</h3>
                <img 
                    src="public/message.gif" 
                    alt="send message gif" 
                    draggable="false"
                    width={415}
                    height={415}
                />
            </div>
            <form action="" className="form__inputs">
                <div className="form-group">
                    
                    <input className="input" type="text" id="Name" name="Name" placeholder=" " required/>
                    <label htmlFor="Name">Name</label>
                </div>
                <div className="form-group">                    
                    <input className="input" type="email" id="Email" name="Email" placeholder=" " required/>
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