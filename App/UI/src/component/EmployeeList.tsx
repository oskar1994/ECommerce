import { useState } from "react";
import { IEmployee } from "./Employee.type";
import "./EmployeeList.style.css";
import EmployeeModal from "./EmployeeModal";

type Props = {
  list: IEmployee[];
  onDeleteClickHandler: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHandler } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null);
  const viewEmployee = (data: IEmployee) => {
    setDataToShow(data);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <article>
        <h3 className="list-header">Employee List</h3>
      </article>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
        {list.map((employee) => {
          return (
            <tr key={employee.id}>
              <td>{`${employee.firstName} ${employee.lastName}`}</td>
              <td>{`${employee.email}`}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="View"
                    onClick={() => viewEmployee(employee)}
                  />
                  <input type="button" value="Edit" />
                  <input
                    type="button"
                    value="Delete"
                    onClick={() => onDeleteClickHandler(employee)}
                  />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      {showModal && dataToShow !== null && (
        <EmployeeModal onClose={closeModal} data={dataToShow} />
      )}
    </div>
  );
};

export default EmployeeList;
