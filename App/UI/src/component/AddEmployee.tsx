import { useState } from "react";
import "./EmployeeForm.style.css";
import { IEmployee } from "./Employee.type";

type Props = {
    onBackButtonClickHandler : () => void
    onSubmitClickHandler : (data: IEmployee) => void
}

const AddEmployee = (props: Props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const {onBackButtonClickHandler, onSubmitClickHandler} = props;
    const onFirstNameChangeHandler = (e: any) => {
        setFirstName(e.target.value);
    };  
    const onLastNameChangeHandler = (e: any) => {
        setLastName(e.target.value);
    };
    const onEmailChangeHandler = (e: any) => {
        setEmail(e.target.value);
    };

    const onSubmitButtonClickHandler = (e: any) => {
        e.preventDefault();
        const data: IEmployee = {
            id: new Date().toJSON().toString(),
            firstName: firstName,
            lastName: lastName,
            email: email
        }

        onSubmitClickHandler(data);
        onBackButtonClickHandler();
    }

    return (
    <div className="form-container">
        <div>
            <h3>Add Employee Form</h3>
        </div>
        <form onSubmit={onSubmitButtonClickHandler}>
            <div>
                <label>First Name:</label>
                <input type="text" value={firstName} onChange={onFirstNameChangeHandler}/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} onChange={onLastNameChangeHandler}/>
            </div>
            <div>
                <label>Email Address:</label>
                <input type="text" value={email} onChange={onEmailChangeHandler}/>
            </div>
            <div>
                <input type="button" value="Back" onClick={onBackButtonClickHandler}/>
                <input type="submit" value="Add Employee" />
            </div>
        </form>
    </div>
    );
};


export default AddEmployee;