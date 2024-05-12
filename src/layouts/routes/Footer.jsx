

const Footer = () => {
    return (
        <footer className="footer w-full mt-9 p-10 bg-base-300 text-base-content rounded-2xl">
        <nav>
        <a className="btn btn-ghost  text-3xl   text-blue-500  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 w-11 h-8"
          >
            <path d="M21 12v-2c0-4.418-3.582-8-8-8s-8 3.582-8 8v2"></path>
            <path d="M19.5 14c-.183 0-.367.039-.54.117l-3.74 1.87L9 10.632V6.5c0-2.206 1.794-4 4-4s4 1.794 4 4v4.632l-6.26 3.134-3.74-1.87c-.173-.078-.357-.117-.54-.117S4 14.417 4 14.775V18c0 .551.448 1 1 1h14c.552 0 1-.449 1-1v-3.225c0-.358-.183-.725-.5-.975l-3.742-1.87 3.74-1.87c.317-.15.5-.617.5-.975s-.183-.725-.5-.975l-3.742-1.87 3.74-1.87c.317-.15.5-.617.5-.975C20 4.448 19.552 4 19 4s-1 .448-1 1c0 .358.183.725.5.975l3.74 1.87-3.742 1.87c-.317.15-.5.617-.5.975 0 .358.183.725.5.975l3.74 1.87c.173.078.357.117.54.117.553 0 1-.449 1-1v-3.225c0-.358-.183-.725-.5-.975l-3.742-1.87 3.74-1.87c.317-.15.5-.617.5-.975 0-.552-.447-1-1-1z"></path>
          </svg>
          <p className="">LuxStay</p>
        </a>
        
            <p className="text-2xl mt-5">© 2024 LuxStay . All rights reserved.</p>
        
        </nav> 
        <nav>
        <p className="text-2xl mt-5">
            For inquiries, please contact us at :<br /> <br /> <input type="email" placeholder="email" name="email" id="" /> <br /> or <br /><input type="number" placeholder="phone Number" name="number" id="" />.
            </p>
         
        </nav> 
        <nav>
          <h6 className="footer-title">Connect with us on social media:</h6> 
          <div className="grid grid-flow-col gap-4">
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
            <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </nav>
      </footer>
    );
};

export default Footer;