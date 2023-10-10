import { useFormik } from "formik";
import Title from "../Title";
import EditEmployeeModalStyled from "./styles";
import { updateEmployee } from "src/api/employees";
import { showToast } from "src/hoc/withShowNotification";
import { ErrorFieldStyled } from "../CreateEmployeeModal/styles";
import SelectInput from "../SelectInput";
import { useState } from "react";
import { CreateEmployeeSchema } from "src/schemas/createEmployee.schemas";
import PropTypes from "prop-types";
import ShowDropdownIcon from "../ShowDropdownIcon";

const EditEmployeeModal = ({ setIsShowModal, dataForm, setEmployeesData }) => {
  const { role, fullName, email, address, avatarSrc, id } = dataForm[0];
  const [isSelecting, setIsSelecting] = useState(false);
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const formik = useFormik({
    initialValues: {
      role: role,
      fullName: fullName,
      email: email,
      address: address,
      avatarSrc: avatarSrc,
      id: id,
    },
    validationSchema: CreateEmployeeSchema,
    onSubmit: async ({ id, ...data }) => {
      const response = await updateEmployee(id, data);
      setEmployeesData(response.data);
      setIsShowModal(false);
      showToast("Update employee successfully!");
    },
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
    setFieldValue,
  } = formik;

  const handleClickCancel = () => {
    setIsShowModal(false);
  };

  const handleErrorField = (field) => {
    return errors[field] && touched[field] ? (
      <ErrorFieldStyled>{errors[field]}</ErrorFieldStyled>
    ) : (
      <div style={{ marginTop: "31px" }}></div>
    );
  };

  const handleClickRoleField = () => {
    setIsShowDropdown(!isShowDropdown);
  };

  const handleBlurRoleField = (event) => {
    event.preventDefault();
    if (isSelecting === false) {
      setIsShowDropdown(false);
    }
  };

  return (
    <div className="blur">
      <EditEmployeeModalStyled>
        <Title
          content="Create New Employee"
          customStyles={{ textAlign: "center" }}
        />
        <form action="" className="form" onSubmit={handleSubmit}>
          <input
            type="search"
            name="role"
            placeholder="Role*"
            autoComplete="off"
            autoFocus
            onChange={handleChange}
            value={values.role}
            onBlur={handleBlurRoleField}
            className={
              errors["role"] && touched["role"] ? "error-field" : "role-field"
            }
            onClick={handleClickRoleField}
            readOnly
          />

          <ShowDropdownIcon isShowDropdown={isShowDropdown} />

          {isShowDropdown && (
            <SelectInput
              setIsSelecting={setIsSelecting}
              setFieldValue={setFieldValue}
              setIsShowDropdown={setIsShowDropdown}
              name="role"
            />
          )}
          {handleErrorField("role")}

          <input
            type="search"
            name="fullName"
            placeholder="Full Name*"
            autoComplete="off"
            onChange={handleChange}
            value={values.fullName}
            onBlur={handleBlur}
            className={
              errors["fullName"] && touched["fullName"] ? "error-field" : ""
            }
          />
          {handleErrorField("fullName")}

          <input
            type="search"
            name="email"
            placeholder="Email*"
            autoComplete="off"
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            className={errors["email"] && touched["email"] ? "error-field" : ""}
          />
          {handleErrorField("email")}

          <input
            type="search"
            name="address"
            placeholder="Address*"
            autoComplete="off"
            onChange={handleChange}
            value={values.address}
            onBlur={handleBlur}
            className={
              errors["address"] && touched["address"] ? "error-field" : ""
            }
          />
          {handleErrorField("address")}

          <input
            type="search"
            name="avatarSrc"
            placeholder="Avatar URL"
            autoComplete="off"
            onChange={handleChange}
            value={values.avatarSrc}
          />
          <div className="action-buttons">
            <button type="submit">Update</button>
            <button onClick={handleClickCancel}>Cancel</button>
          </div>
        </form>
      </EditEmployeeModalStyled>
    </div>
  );
};

EditEmployeeModal.propTypes = {
  setIsShowModal: PropTypes.func,
  dataForm: PropTypes.array,
  setEmployeesData: PropTypes.func,
};

export default EditEmployeeModal;
