import React from 'react'


function SignUp () {
  return (
    <form className='flex flex-col' action="/action_page.php">
        {/* <label htmlFor="fname">First name:</label> */}
        <input className=' h-9 rounded-md' type="text" id="fname" name="fname" /> <br />
    </form> 
  );
}

export default SignUp;