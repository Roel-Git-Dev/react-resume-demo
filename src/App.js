import applicant_header from "./neccessary_data/applicant_header"
import applicant_education from "./neccessary_data/applicant_education"
import "../src/App.css"

function App() {
  const Name  = applicant_header().data().name
  const ContactNumber = applicant_header().data().contact_number
  const ContactEmail = applicant_header().data().contact_email
  const College = applicant_education().data().college
  return (
   <>
   <div className="container" name="Applicant Resume">
   <div name="Applicant Header">
    <p>
    {Name}<br/>
    {ContactNumber}<br/>
    {ContactEmail}
    </p>
   </div>
   <div name="Applicant Goals">
    <h3>Career and Job Goals</h3>
    <p>
    I want to make my programming and technical career, be develop <br/>
	  and be useful for my employer and myself. So we can reach <br/>
	  further growth.
    </p>
   </div>
   <div name="Skills">
    <h3>Skills</h3>
    <h4>Web Programming</h4>
    <h4>Windows Programming</h4>
    <h4>Others</h4>
   </div>
   <div name="Education">
    <h3>Education</h3>
    <h4>College</h4>
    <p>
    {College}
    </p>
   </div>
   <footer name="Applicant Footer">
    *Cover letter will be attached.<br/>
  	*This is a sample demonstration.
   </footer>
   </div>
   </>
  );
}

export default App;
