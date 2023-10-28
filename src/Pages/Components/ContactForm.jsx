export default function ContactForm(){
    return(
        <dialog id="modal" className="form">
            <div className="form__subheading">
                <p>Send <br/> me a <br/> Mess   <br/>age</p>
                <img 
                    src="public/message.gif" 
                    alt="send message gif" 
                    draggable="false"
                    width={415}
                    height={415}
                />
            </div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="Name">Name</label>
                    <input type="text" id="Name" name="Name" placeholder="Name" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="Email" name="Email" placeholder="Email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" id="message" name="message" placeholder="Message" required/>
                </div>
                <button type="submit">
                    Send 
                    <img src="public/Right.svg" alt="right arrow" draggable="false" width={30} height={30}/>
                </button>
            </form>
        </dialog>
    )
}