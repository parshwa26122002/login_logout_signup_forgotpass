import { Button, Form, Overlay, Tooltip } from 'react-bootstrap';
import { useState, useRef } from 'react';

function Login() {
    const [ isDisabled, setIsDisabled ] = useState(true);
    const [ showTooltip, setShowTooltip ] = useState(false);
    const target = useRef(null);
    const emailtarget = useRef(null);

    function passwordValidator(event:any) {
        if(event.target.value.match(/(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/)) {
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
        <Form onSubmit={(event) => submitHandler(event)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={emailtarget} type="email" placeholder="Enter email" onChange={(event) => {event.target.value != "" && (target.current as any).value.match(/(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/) ? setIsDisabled(false) : setIsDisabled(true)}} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={target} type="password" placeholder="Password" onChange={(event) => passwordValidator(event)}/>
                <Overlay target={target.current} show={showTooltip} placement="bottom">
                    {(props) => (
                        <Tooltip id="overlay-example" {...props}>
                            At least 1 uppercase, 1 lowercase, 1 digit and 1 special character is required.{'\n'}
                            Minimum 8 characters are required.
                        </Tooltip>
                    )}
                </Overlay>
            </Form.Group>
            <Button variant="primary" type="submit" disabled={isDisabled}>
                Login
            </Button>
        </Form>
      </>
    )
}

export default Login
  