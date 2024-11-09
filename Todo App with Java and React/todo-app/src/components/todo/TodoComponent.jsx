import { useNavigate, useParams } from "react-router-dom"
import { createTodoApi, retrieveTodoApi, updateTodoApi } from "./api/TodoApiService"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import moment from "moment"

const TodoComponent = () => {

    const [description, setDescription] = useState('')
    const [targetDate, setTargetDate] = useState('')

    const { id } = useParams()

    const authContext = useAuth()

    const navigate = useNavigate()

    const username = authContext.username

    useEffect(
        () => retrieveTodo, [id]
    )

    const retrieveTodo = () => {
        if(id != -1){
            retrieveTodoApi(username, id)
            .then(
                response => {
                    setDescription(response.data.description)
                    setTargetDate(response.data.targetDate)
                }
            )
            .catch((error) => console.log(error))
        }
    }

    const onSubmit = (values) => {
        const todo ={
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }
        
        if(id == -1){

            createTodoApi(username, todo)
            .then( response => {
                navigate('/todos')
            })
            .catch(error => console.log(error))
        
        }else{
        
            updateTodoApi(username, id, todo)
            .then( response => {
                navigate('/todos')
            })
            .catch(error => console.log(error))
        
        }
    }
    
    const validate = (values) => {
        let errors = {
            // description: 'Enter a valid description',
            // targetDate: 'Enter a valid target date'
        }

        if(values.description.length < 5){
            errors.description = 'Enter at least 5 characters'
        }
        
        if(values.targetDate == null || values.targetDate == '' || moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a target date'
        }

        return errors
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div className="container w-50">
                <Formik initialValues={ {description, targetDate} }
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group text-start">
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description"/>
                                    <ErrorMessage 
                                        name="description"
                                        component="small"
                                        className="text-danger"
                                    />
                                </fieldset>
                                <fieldset className="form-group text-start my-3">
                                    <label>Target Date</label>
                                    <Field type="date" className="form-control" name="targetDate"/>
                                    <ErrorMessage 
                                        name="targetDate"
                                        component="small"
                                        className="text-danger"
                                    />
                                </fieldset>
                                <div>
                                    <button className="btn btn-outline-success float-end px-4 my-3" type="submit">Save</button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}

export default TodoComponent