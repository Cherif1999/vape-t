import React from 'react'


const Signup = () => {
    return (
        <>

            <button type="button" className="btn btn-light ms-2" data-mdb-ripple-color="dark"
                data-bs-toggle="modal" data-bs-target="#signupModal">
                <span className='fa fa-user-plus ms-1'></span> Sign up
            </button>


            <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Sign in to Vape it</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-danger btn-rounded w-100 mb-4" >
                                <span className='fa fa-google me-2'></span>Sign up in with Google
                            </button>
                            <button className="btn btn-primary btn-rounded w-100 mb-4">
                                <span className='fa fa-facebook me-2'></span>Sign up with Facebook
                            </button>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInput" className="form-label">Full Name</label>
                                    <input type="text" className="form-control"  placeholder="Enter Your Name" id="exampleInput" />

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="Enter Your Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text"></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder="Enter Your Password" id="exampleInputPassword1" />
                                </div>
                                
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="password" id="form3Example4cd" className="form-control" />
                                        <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                                    </div>
                                </div>
                                <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>
                                <button type="submit" className="btn btn-dark w-100 mt-5" >Sign Up</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup