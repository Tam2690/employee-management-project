import EmployeeCardStyled from './styles';
import { FaPenToSquare } from 'react-icons/fa6';
import { FaTrashCan } from 'react-icons/fa6';

const EmployeeCard = () => {
  const handleEditEmployee = () => {
    console.log('edit employee');
  };

  const handleDeleteEmployee = () => {
    console.log('delete employee');
  };

  return (
    <EmployeeCardStyled>
      <div className="main-container">
        <section className="employee-avatar">
          <img
            src="https://thumbs.dreamstime.com/b/anime-boy-avatar-ai-generative-art-anime-boy-man-avatar-ai-generative-art-274594155.jpg"
            alt="avatar.png"
          />
        </section>
        <section className="employee-info">
          <span>Tam Phan</span>
          <p>Frontend Developer</p>
          <p>Tam2690@gmail.com</p>
          <p>Da Nang</p>
        </section>
      </div>
      <section className="employee-actions">
        <button
          className="action-button edit-button"
          onClick={handleEditEmployee}
        >
          <FaPenToSquare />
        </button>
        <button
          className="action-button delete-button"
          onClick={handleDeleteEmployee}
        >
          <FaTrashCan />
        </button>
      </section>
    </EmployeeCardStyled>
  );
};

export default EmployeeCard;
