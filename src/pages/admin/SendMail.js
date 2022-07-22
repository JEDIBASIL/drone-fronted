import { InputWrapper,TextInput,Textarea,Button,Select } from '@mantine/core'

const SendMail = () => {
  return (
    <div className='sendMailContainer'>
        <h3>Send mail</h3>
        <InputWrapper className='formWrapper mail'>
        <Select
                    label="Send to"
                    placeholder="To..."
                    data={[
                        { value: "all", label: "All users" },
                        { value: "new", label: "New users" },
                        { value: "active", label: "Active users" },
                        { value: "unactive", label: "Unactive users" },
                        { value: "returning", label: "Returning users" },
                      
                    ]}
                />
            <TextInput label='Subject' />
            <Textarea  label='Message' />
            <div className='btn-container'><Button>Send</Button></div>
        </InputWrapper>
    </div>
  )
}

export default SendMail