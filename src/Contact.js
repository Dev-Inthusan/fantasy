import './App.css';
function Contact(){
    return (
     <div>
      <button>submit</button>
       <From/><From/>
     </div>
         
    );
  };

  function From(){
    return (
     <div>
      <label>Name</label>
      <input placeholder='ender your name'/>
      <label>Address</label>
      <input placeholder='ender your address'/>
      <label>Email</label>
      <input placeholder='ender your email'/>
      <label>Age</label>
      <input placeholder='ender your age'/>
     </div>
         
    );
  };

  export default Contact;
