import "../stylesheets/footer.css"

export default function footer(){
    return(
        <div className="footer-container">
            <div className="Company">
                <div className="footer-head">
                    Company
                </div>
                <ul>
                    <li>About us</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy policy</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className="For Customers">
                <div className="footer-head">
                    For Customers
                </div>
                <ul>
                    <li>Reviews</li>
                    <li>Categories near you</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="For partners">
                <div className="footer-head">
                    For Partners
                </div>
                <ul>
                    <li>Register as a professional</li>
                </ul>
            </div>
        </div>
    )
}