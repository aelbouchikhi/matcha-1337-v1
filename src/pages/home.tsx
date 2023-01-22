import React from 'react';
import Signin from '../components/SignUp';
import Loginpic from "../images/loginpic.svg";
import Logo from "../images/logo.png"
import { Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className='flex h-screen w-screen'>
            {/* <div className='lg:flex hidden'> */}
                <div className='lg:flex hidden w-1/2 items-center justify-center '>
                    <div className='flex justify-center items-center w-5/6 h-5/6 border-[#11888E] border-2 shadow-xl shadow-[#11888E] rounded-2xl'>
                        <div className='w-3/4 h-5/6  flex flex-col justify-start items-center'>
                            <p className='flex text-[#11888E] m-auto text-xl'>Matche. Discute. Fais des rencontres.</p>
                            <p className='flex text-[#11888E] -m-auto text-3xl'>Matcha®.</p>
                            <img src={Loginpic} alt="loginpic" className='m-auto' />
                        </div>
                    </div>
                </div>
            {/* </div> */}
                <div className='flex flex-center lg:w-1/2 w-screen items-center justify-center bg-[#11888E]'>
                    <div className='flex justify-center itqems-center border-2 bg-[#D0CDE1] w-1/3 h-3/6 drop-shadow-2xl rounded-2xl'>
                        <div className='h-full w-full flex flex-col justify-start items-center'>
                            <img src={Logo} alt="loginpic" className='w-1/6' />
                            <p className='flex text-[#11888E] text-3xl'>Login</p> <br /> <br />
                            <div className='flex flex-center justify-center w-3/4'>
                                <form className='' action="/action_page.php">
                                    <div className='flex flex-col justify-center items-center'>
                                        {/* <label htmlFor="fname">First name:</label> */}
                                        <input className=' w-full rounded-md' type="text" id="fname" name="fname" /> <br />
                                        {/* <label htmlFor="lname">Last name:</label> */}
                                        <input className='w-full rounded-md' type="text" id="lname" name="lname" /> <br />
                                        <input className='w-full border-2 bg-[#11888E] border-hidden rounded-md text-white' type="submit" value="Login" />
                                    </div>
                                    <Link className='flex justify-center text-[#11888E]' to='./ForgotPassword'>Forgot Password ?</Link>
                                </form> 
                            </div>
                            <br />
                            <hr className=" w-36 h-2"/>
                            <p>Don't have account ?</p>
                            <Link className=' text-[#11888E]' to='./SignUp'>Sign Up</Link>
                            <div className="google">
                                {/* <Google /> */}
                            <p>Google</p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}

export default HomePage;