import { InputWrapper,TextInput,Textarea,Button } from '@mantine/core'

const AddServices = () => {
    return (
        <div className='sendMailContainer'>
            <h3>Add Services</h3>
            <InputWrapper className='formWrapper mail'>
                <TextInput label='Heading' />
                <Textarea  label='Text' />
                <div className='btn-container'><Button>Add</Button></div>
            </InputWrapper>
        </div>
   )
}

export default AddServices