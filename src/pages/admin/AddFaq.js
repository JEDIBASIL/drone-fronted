import { InputWrapper,TextInput,Textarea,Button } from '@mantine/core'
 
 const AddFaq = () => {
    return (
        <div className='sendMailContainer'>
            <h3>Add FAQ's</h3>
            <InputWrapper className='formWrapper mail'>
                <TextInput label='Question' />
                <Textarea  label='Answer' />
                <div className='btn-container'><Button>Send</Button></div>
            </InputWrapper>
        </div>
   )
 }
 
 export default AddFaq