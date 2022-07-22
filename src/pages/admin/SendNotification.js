import { InputWrapper,TextInput, Textarea, Button, Select, Tabs } from "@mantine/core";
const SendNotification = () => {
    return (
        <div className="sendMailContainer">
            <h3>Send notification</h3>

            <Tabs>
                <Tabs.Tab label={"System notification"}>
                    <InputWrapper className="formWrapper mail">
                        <Select
                            label="Notification type"
                            placeholder="happy"
                            data={[
                                { value: "stystem", label: "System" },
                                { value: "warning", label: "Warning" },
                                { value: "glad", label: "Glad" },
                            ]}
                        />
                        <Select
                            label="Send to"
                            placeholder="To..."
                            data={[
                                { value: "all", label: "All users" },
                                { value: "new", label: "New users" },
                                { value: "active", label: "Active users" },
                                { value: "unactive", label: "Unactive users" },
                                {
                                    value: "returning",
                                    label: "Returning users",
                                },
                            ]}
                        />
                        <Textarea label="Message" />
                        <div className="btn-container">
                            <Button>Send</Button>
                        </div>
                    </InputWrapper>
                </Tabs.Tab>

                <Tabs.Tab label={"Email notification"}>
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
                </Tabs.Tab>
            </Tabs>
        </div>
    );
};

export default SendNotification;
