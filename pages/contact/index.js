import "./index.module.css";
function ContactPage() {


    
    return (
        // insert your code between the <div></div> below
        <div>
            <div class="alert-success">
            <span>Message Sent! Thank you for contacting us.</span>
            </div>

            <div class="alert-error">
            <span>Something went wrong! Please try again.</span>
            </div>

            <div class="contact-section">
                <div class="contact-info">
                    <div><i class="fa-solid fa-location-dot"></i>Address, City, Country</div>
                    <div><i class="fa-solid fa-location-dot"></i>contact@gmail.com</div>
                    <div><i class="fa-solid fa-location-dot"></i>+84 905988777</div>
                    <div><i class="fa-solid fa-location-dot"></i>Mon-Fri 08:00 AM to 05:00 PM</div>
            </div>
            <div class="contact-form">
            <h2>Contact Us</h2>
                <form class="contact" action="" method="post">
                    <input type="text" name="name" class="text-box" placeholder="Your Name" required/>
                    <input type="email" name="email" class="text-box" placeholder="Your Email" required/>
                    <textarea name="message" rows="5" placeholder="Your Message"required></textarea>
                </form>
                <button class="send-btn">Send</button>
            </div>
    </div>

        </div>
    )
};

export default ContactPage;