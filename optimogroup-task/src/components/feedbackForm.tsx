import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import React from 'react'
import { FeedBack } from '../models/feedback/feedback';
import CloseIcon from '@mui/icons-material/Close';
import { FeedBackService } from '../models/feedback/service';
import { Form, Formik } from 'formik';

interface feedbackFormProps {
    open: boolean,
    handleDialog: Function | any,
    name: String
}

function FeedBackForm(props: feedbackFormProps) {
    const { open, handleDialog, name } = props

    const getValues = (values: any) => {
        const feedback = new FeedBack()
        feedback.name = values.name
        feedback.email = values.email
        feedback.message = values.message
        FeedBackService.create(feedback).then((r: any) => {
            handleDialog(false)
        })

    }

    return (
        <div>
            <Dialog open={open} onClose={handleDialog}>
                <div onClick={() => handleDialog(false)}
                    style={{ position: "absolute", right: 10, top: 10, cursor: "pointer" }}>
                    <CloseIcon />
                </div>
                <Formik initialValues={{ name: name, email: '', message: '', }}
                    onSubmit={getValues}>
                    {({ values, handleSubmit, setFieldValue, handleChange, handleBlur, errors }: any) => (
                        <Form onSubmit={(values) => {
                            console.log(errors)
                            handleSubmit(values)
                            handleDialog(false)
                        }}>
                            <DialogTitle>FeedBack:</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Please Provide FeedBack for Employee
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="name"
                                    value={values.name}
                                    type="text"
                                    fullWidth
                                    onChange={(event: any) => {
                                        setFieldValue("name", event.target.value)

                                    }}
                                    variant='standard'
                                />
                                <TextField
                                    required
                                    autoFocus
                                    margin="dense"
                                    id="email"
                                    label="your email"
                                    value={values.email}
                                    type="text"
                                    fullWidth
                                    onChange={(event: any) => {
                                        setFieldValue("email", event.target.value)

                                    }}
                                    variant='standard'
                                />
                                <TextField
                                    required
                                    autoFocus
                                    margin="dense"
                                    id="message"
                                    label="your message"
                                    value={values.message}
                                    type="text"
                                    fullWidth
                                    onChange={(event: any) => {
                                        setFieldValue("message", event.target.value)

                                    }}
                                    variant='standard'
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => handleDialog(false)}>Cancel</Button>
                                <Button type="submit"
                                    onClick={() =>
                                        console.log(values)
                                    }
                                >Submit</Button>
                            </DialogActions>
                        </Form>
                    )}

                </Formik>

            </Dialog>
        </div>
    )
}

export default FeedBackForm