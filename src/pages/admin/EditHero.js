import { InputWrapper,TextInput,Textarea,Button } from '@mantine/core'

const EditHero = () => {
    return (
        <div className='sendMailContainer'>
            <h3>Edit hero section</h3>
            <InputWrapper className='formWrapper mail'>
                <TextInput label='Sub text 1' />
                <TextInput label='Sub text 2' />
                <Textarea  label='Heading' />
                <div className='btn-container'><Button>Edit</Button></div>
            </InputWrapper>
        </div>
   )
}

export default EditHero