import { useEffect, useState } from "react";
import "./Home.style.css";
import { IEmployee, PageEnum } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

const Home = () => {
  const [employeeList, setEmployeeList] = useState([] as IEmployee[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IEmployee);

  useEffect(() => {
    const listInString = window.localStorage.getItem("EmployeeList");
    if (listInString) {
      _setEmployeeList(JSON.parse(listInString));
    }
  }, []);

  const onAddEmployeeClickHandler = () => {
    setShownPage(PageEnum.add);
  };
  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const _setEmployeeList = (list: IEmployee[]) => {
    setEmployeeList(list);
    window.localStorage.setItem("EmployeeList", JSON.stringify(list));
  };

  const addEmployee = (data: IEmployee) => {
    _setEmployeeList([...employeeList, data]);
  };

  const deleteEmployee = (data: IEmployee) => {
    // To Index from Array i,e employee list
    // Splice that
    // Update new record
    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];

    tempList.splice(indexToDelete, 1);
    _setEmployeeList(tempList);
  };

  const editEmployee = (data: IEmployee) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateEmployee = (data: IEmployee) => {
    const filteredData = employeeList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    _setEmployeeList(tempData);
  };

  return (
    <>
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
              className="add-employee-btn"
            />
            <EmployeeList
              list={employeeList}
              onDeleteClickHandler={deleteEmployee}
              onEditClickHandler={editEmployee}
            />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddEmployee
            onBackButtonClickHandler={showListPage}
            onSubmitClickHandler={addEmployee}
          />
        )}

        {shownPage === PageEnum.edit && dataToEdit !== null && (
          <EditEmployee
            data={dataToEdit}
            onBackButtonClickHandler={showListPage}
            onUpdateClickHandler={updateEmployee}
          />
        )}
      </section>
    </>
  );
};

export default Home;
