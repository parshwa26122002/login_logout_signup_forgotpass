import { Button, Form, Overlay, Tooltip } from 'react-bootstrap';
import { useState, useRef } from 'react';

function Login() {
    const [ isDisabled, setIsDisabled ] = useState(true);
    const [ showTooltip, setShowTooltip ] = useState(false);
    const target = useRef(null);
    const emailtarget = useRef(null);
    const regex = /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/;

    function passwordValidator(event:any) {
        if(event.target.value.match(regex)) {
            setShowTooltip(false);
            if((emailtarget.current as any).value != "") {
                setIsDisabled(false);
            }
        }
        else {
            setShowTooltip(true);
            setIsDisabled(true);
        }
    }

    function submitHandler(event:any) {
        
    }

    return (
      <>
        <div className='d-flex flex-column align-items-center'>
            <h1 className='fs-3 m-3'>Login</h1>
            <Form className="w-25" onSubmit={(event) => submitHandler(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailtarget} type="email" placeholder="Enter email" onChange={(event) => {event.target.value != "" && (target.current as any).value.match(regex) ? setIsDisabled(false) : setIsDisabled(true)}} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={target} type="password" placeholder="Password" onChange={(event) => passwordValidator(event)}/>
                    <Overlay target={target.current} show={showTooltip} placement="bottom">
                        {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                                At least 1 uppercase, 1 lowercase, 1 digit and 1 special character is required. Minimum 8 characters are required.
                            </Tooltip>
                        )}
                    </Overlay>
                </Form.Group>
                <Button className="w-100" variant="primary" type="submit" disabled={isDisabled}>
                    Login
                </Button>
            </Form>
        </div>
      </>
    )
}

export default Login
  