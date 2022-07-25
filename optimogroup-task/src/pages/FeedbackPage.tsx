import React from 'react'
import { Box, Container, Grid, Paper } from '@mui/material'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material'
import { Form, Formik } from 'formik';
import { FeedBackService } from '../models/feedback/service';
import { FeedBack } from '../models/feedback/feedback';
import Typography from '@mui/material/Typography';



function FeedbackPage() {

  const getValues = (values: any) => {
    const feedback = new FeedBack()
    feedback.name = values.name
    feedback.email = values.email
    feedback.message = values.message
    FeedBackService.create(feedback).then((r: any) => {
    })

  }
  return (
    <>
      <Grid container
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ pt: 30, pb: 7 }}
      >
        <Box>
          <Grid container spacing={4}>
            <Formik initialValues={{ name: '', email: '', message: '', }}
              onSubmit={getValues}>
              {({ values, handleSubmit, setFieldValue, handleChange, handleBlur, errors }: any) => (
                <Form onSubmit={(values) => {
                  console.log(errors)
                  handleSubmit(values)
                }}>
                  <Paper>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={12} sm={12}>
                        <Typography variant="h3" align="center">
                          Feedback  
                        </Typography>
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
                            inputProps={
                              { readOnly: true, }
                            }
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
                            label="message"
                            value={values.message}
                            type="text"
                            onChange={(event: any) => {
                              setFieldValue("message", event.target.value)

                            }}
                            fullWidth
                            variant='standard'
                          />
                        </DialogContent>
                        <DialogActions>
                          <Button>Cancel</Button>
                          <Button type="submit"
                            onClick={() =>
                              console.log(values)
                            }
                          >Submit</Button>
                        </DialogActions>
                      </Grid>
                    </Grid>
                  </Paper>
                </Form>
              )}

            </Formik>

          </Grid>
        </Box>
      </Grid>
    </>
  )
}

export default FeedbackPage