import '../../../styles/survey.scss';
import Body from './Body';
import Header from './Header/index';
import Footer from './Footer/index';

function Survey({ survey, modal }) {
  const { setIsModalOpen } = modal;
  const { setIsSurveyOpen } = survey;
  return (
    <div className="survey-container">
      <Header
        setIsModalOpen={setIsModalOpen}
        setIsSurveyOpen={setIsSurveyOpen}
      />
      <div className="survey-wrapper">
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default Survey;
