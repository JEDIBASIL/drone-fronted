import React from "react";
import { InputWrapper, NumberInput, Select, Button } from "@mantine/core";

const RegisterDrone = () => {
    return (
        <div className='regDrone'>
        <h3>Register drone</h3>
            <InputWrapper  className='formWrapper'>
                <Select
                    label="Model"
                    placeholder="Select model"
                    data={[
                        { value: "lightweight", label: "Lightweight" },
                        { value: "middleweight", label: "Middleweight" },
                        { value: "cruiseweight", label: "Cruiseweight" },
                        { value: "heavyweight", label: "Heavyweight" },
                    ]}
                />
                <NumberInput  required min={0} max={500} placeholder="Max weight is 500gr" label='Weight'/>
               <div className="btn-container"> <Button type="submit">Register</Button></div>
            </InputWrapper>
        </div>
    );
};

export default RegisterDrone;
