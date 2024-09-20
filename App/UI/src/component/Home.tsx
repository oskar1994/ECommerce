import { useState } from "react";
import "./Home.style.css";
import { dummyEmployeeList, IEmployee, PageEnum } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";

const Home = () => {

    const [employeeList, setEmployeeList] = useState(dummyEmployeeList as IEmployee[]);
    const [shownPage, setShownPage] = useState(PageEnum.list);
    const onAddEmployeeClickHandler = () => {
        setShownPage(PageEnum.add);
    }
    const showListPage = () => {
        setShownPage(PageEnum.list);
    }

    const addEmployee = (data : IEmployee) => {
        setEmployeeList([...employeeList, data]);
    }

    return <>
        <article className="article-header">
            <header>
                <h1>React: Simple CRUD Application</h1>
            </header>
        </article>

        <section className="section-content">
            {shownPage === PageEnum.list && ( 
            <>
              <input 
              type="button"
               value="Add Employee"
               onClick={onAddEmployeeClickHandler}
               className="add-employee-btn"/>
              <EmployeeList list={employeeList}/>
            </>
            )}

            {shownPage === PageEnum.add && <AddEmployee 
            onBackButtonClickHandler={showListPage}
            onSubmitClickHandler={addEmployee}
            />}
          
        </section>
    </>
}

export default Home;