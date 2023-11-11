import './Home.css';
import Navi from './Navi';
import Button from 'react-bootstrap/Button';

function Home() {
  return (
    <div className="home-container">
      <Navi />
      <div className="content-container">
        <div className="con1">
        <h1>Organize your work and life, finally.</h1>
        </div>
        <div className="new-content">
          <h1>Are You New?</h1>
        </div>
        <div className="button">
          <Button variant="danger">Create Account</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
