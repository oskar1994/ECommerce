type Props = {
    onBackButtonClickHandler : () => void
}

const AddEmployee = (props: Props) => {
  
    const {onBackButtonClickHandler} = props;

    // const onBackButtonClickHandler = () => {

    // }
    
    return <>
        <form>
            <div>
                <label>First Name:</label>
                <input type="text"/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text"/>
            </div>
            <div>
                <label>Email Address:</label>
                <input type="text"/>
            </div>
            <div>
                <input type="button" value="Back" onClick={onBackButtonClickHandler}/>
                <input type="submit" value="Add Employee" />
            </div>
        </form>
    </>;
}

export default AddEmployee;