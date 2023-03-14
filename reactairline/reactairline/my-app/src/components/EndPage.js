import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory, useParams } from 'react-router-dom';
//import { useState } from 'react/cjs/react.development';
import airlineService from '../services/airline.service';
import './Ansar.css'

import React, { useState } from "react";
import { Container, Col, Row, Button, Form, Card } from "react-bootstrap";

const EndPage = () => {
    

    const{feedbackId} = useParams();
    const [feedbackDescription , setFeedbackDescription] = useState('')
    //const [rating , setRating] = useState('');
    const [clicked, setClicked] = useState(false);
    const [stars, setStars] = useState(1);
    //const [review, setReview] = useState("");
    const [feedbackDescriptions, setFeedsbackDescriptions] = useState([]);

    const history = useHistory();

    const onMouseOver = (rating) => {
        if (clicked) return;
    
        [...Array(rating)].map((x, i) => {
          document.querySelector(`#star-${i + 1}`).classList.replace("far", "fas");
        });
      };
    
      const onMouseOut = (rating) => {
        if (clicked) return;
    
        [...Array(rating)].map((x, i) => {
          document.querySelector(`#star-${i + 1}`).classList.replace("fas", "far");
        });
      };
    
      const onClick = (rating) => {
        setClicked(true);
        setStars(rating);
        // Reset
        [...Array(5)].map((x, i) => {
          document.querySelector(`#star-${i + 1}`).classList.replace("fas", "far");
        });
    
        // highlight
        [...Array(rating)].map((x, i) => {
          document.querySelector(`#star-${i + 1}`).classList.replace("far", "fas");
        });
      };
    
      const resetForm = (e) => {
        e.preventDefault();
    
        // Reset
        [...Array(5)].map((x, i) => {
          document.querySelector(`#star-${i + 1}`).classList.replace("fas", "far");
        });
    
        setFeedbackDescription("");
        setStars(1);
        setClicked(false);
      };
    
      const submitFeedbackDescription = (e) => {
        e.preventDefault();
        const newfeedbackDescription = {
          rating: stars,
          description: feedbackDescription,
        };
    
        setFeedsbackDescriptions([...feedbackDescriptions, newfeedbackDescription]);
        resetForm(e);
        
        if(feedbackDescription==="" || stars===""){
            if(feedbackDescription==="")
                document.getElementById("vdesc").innerText="PROVIDE DESCRIPTION";
            else
            document.getElementById("vdesc").innerText="";

            if(stars==="")
                document.getElementById("vrate").innerText="PROVIDE STARS";
            else
            document.getElementById("vrate").innerText="";

        }
        else{
            document.getElementById("vrate").innerText="";
            document.getElementById("vdesc").innerText="";


        airlineService.createFeedback(newfeedbackDescription)
            .then(response => {
                console.log("FeedBack added successfully", response.data);
                setFeedbackDescription("")
                setRating("")
             history.goBack();
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
        }
      };
  

    return (
        <div className="body">
            <div id="regbody">
            <nav class="navbar navbar-dark bg-dark fixed-top">
  <a class="navbar-brand" href="#">
    <img src="travel.png" width="40" height="40" 
    class="d-inline-block align-top" alt="xxxxx"></img>
    FlyHigh
  </a>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div id="welcome">Welcome To FlyHigh</div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
              <div>
          <Link className="btn btn-info" to={`/login`}  >
              LOGOUT</Link>
              </div>          
        </nav>
    
        <div>
<br/>
<br/>
<br/>
          <div className="container">
          <p class="loginhead">Please give us your feedback..</p>
          <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="feedbackDescription"
                        value={feedbackDescription}
                        onChange={(e) => setFeedbackDescription(e.target.value)}
                        placeholder="PROVIDE FEEDBACK"
                    />
                <p id="vdesc"></p>

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="stars"
                        value={stars}
                        onChange={(e) => setStars(e.target.value)}
                        placeholder="RATE BY 10"
                    />
                </div>
                <p id="vrate"></p>
                <div >
                    <button onClick={(e)=>submitFeedback(e)}className="btn btn-primary">
                      SUBMIT</button>
                </div>
              </form>
          </div>
          <Container fluid className="App text-light text-center">
        <Col md={{ span: 6, offset: 3 }}>
          <Row className="mt-5">
            <Col>
              {[...Array(5)].map((x, i) => {
                return (
                  <i
                    key={i}
                    className="far fa-star display-4"
                    id={`star-${i + 1}`}
                    onMouseOver={(e) => onMouseOver(i + 1)}
                    onMouseOut={(e) => onMouseOut(i + 1)}
                    onClick={(e) => onClick(i + 1)}
                  />
                );
              })}
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={feedbackDescription}
                  onChange={(e) => setFeedbackDescription(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Button variant="warning" onClick={(e) => resetForm(e)}>
                reset
              </Button>
              <Button
                variant="success"
                onClick={(e) => submitFeedbackDescription(e)}
                disabled={feedbackDescription === ""}
              >
                submit
              </Button>
            </Col>
          </Row>
          
        </Col>
      </Container>
        </div>
        </div>
    </div>
      
    );
}
 
export default EndPage;




/*
const EndPage = () => {
    

    const{feedbackId} = useParams();
    const [feedbackDescription , setFeedbackDescription] = useState('')
    const [rating , setRating] = useState('');

    const history = useHistory();
    const submitFeedback = (e) =>{
        e.preventDefault();
        
        const feedback = {feedbackDescription , rating};
        
        if(feedbackDescription==="" || rating===""){
            if(feedbackDescription==="")
                document.getElementById("vdesc").innerText="PROVIDE DESCRIPTION";
            else
            document.getElementById("vdesc").innerText="";

            if(rating==="")
                document.getElementById("vrate").innerText="PROVIDE RATING";
            else
            document.getElementById("vrate").innerText="";

        }
        else{
            document.getElementById("vrate").innerText="";
            document.getElementById("vdesc").innerText="";


        airlineService.createFeedback(feedback)
            .then(response => {
                console.log("FeedBack added successfully", response.data);
                setFeedbackDescription("")
                setRating("")
             history.goBack();
            })
            .catch(error => {
                console.log('something went wrong', error);
            })
        }
        }

    
    

    return (
        <div className="body">
            <div id="regbody">
            <nav class="navbar navbar-dark bg-dark fixed-top">
  <a class="navbar-brand" href="#">
    <img src="travel.png" width="40" height="40" 
    class="d-inline-block align-top" alt="xxxxx"></img>
    FlyHigh
  </a>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div id="welcome">Welcome To FlyHigh</div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
              <div>
          <Link className="btn btn-info" to={`/login`}  >
              LOGOUT</Link>
              </div>          
        </nav>
    
        <div>
<br/>
<br/>
<br/>
          <div className="container">
          <p class="loginhead">Please give us your feedback..</p>
          <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="feedbackdescription"
                        value={feedbackDescription}
                        onChange={(e) => setFeedbackDescription(e.target.value)}
                        placeholder="PROVIDE FEEDBACK"
                    />
                <p id="vdesc"></p>

                </div>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        placeholder="RATE BY 10"
                    />
                </div>
                <p id="vrate"></p>
                <div >
                    <button onClick={(e)=>submitFeedback(e)}className="btn btn-primary">
                      SUBMIT</button>
                </div>
              </form>
          </div>

        </div>
        </div>
    </div>
      
    );
}
 
export default EndPage;
*/

/*
function App() {
    const [clicked, setClicked] = useState(false);
    const [stars, setStars] = useState(1);
    const [review, setReview] = useState("");
    const [reviews, setReviews] = useState([]);
  
    const onMouseOver = (rating) => {
      if (clicked) return;
  
      [...Array(rating)].map((x, i) => {
        document.querySelector(`#star-${i + 1}`).classList.replace("far", "fas");
      });
    };
  
    const onMouseOut = (rating) => {
      if (clicked) return;
  
      [...Array(rating)].map((x, i) => {
        document.querySelector(`#star-${i + 1}`).classList.replace("fas", "far");
      });
    };
  
    const onClick = (rating) => {
      setClicked(true);
      setStars(rating);
      // Reset
      [...Array(5)].map((x, i) => {
        document.querySelector(`#star-${i + 1}`).classList.replace("fas", "far");
      });
  
      // highlight
      [...Array(rating)].map((x, i) => {
        document.querySelector(`#star-${i + 1}`).classList.replace("far", "fas");
      });
    };
  
    const resetForm = (e) => {
      e.preventDefault();
  
      // Reset
      [...Array(5)].map((x, i) => {
        document.querySelector(`#star-${i + 1}`).classList.replace("fas", "far");
      });
  
      setReview("");
      setStars(1);
      setClicked(false);
    };
  
    const submitReview = (e) => {
      e.preventDefault();
      const newReview = {
        rating: stars,
        description: review,
      };
  
      setReviews([...reviews, newReview]);
      resetForm(e);
    };
  
    const deleteReview = (e, index) => {
      e.preventDefault();
  
      const clone = [...reviews];
      const newState = clone.filter((x, i) => i !== index);
      setReviews(newState);
    };
  
    return (
      <Container fluid className="App text-light text-center">
        <Col md={{ span: 6, offset: 3 }}>
          <Row className="mt-5">
            <Col>
              {[...Array(5)].map((x, i) => {
                return (
                  <i
                    key={i}
                    className="far fa-star display-4"
                    id={`star-${i + 1}`}
                    onMouseOver={(e) => onMouseOver(i + 1)}
                    onMouseOut={(e) => onMouseOut(i + 1)}
                    onClick={(e) => onClick(i + 1)}
                  />
                );
              })}
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Button variant="warning" onClick={(e) => resetForm(e)}>
                reset
              </Button>
              <Button
                variant="success"
                onClick={(e) => submitReview(e)}
                disabled={review === ""}
              >
                submit
              </Button>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              {reviews.map((r, rIndex) => {
                return (
                  <Card className="mt-3 mb-3 text-dark">
                    <Card.Body>
                      {[...Array(r.rating)].map((s, sIndex) => {
                        return <i className="fas fa-star text-warning" />;
                      })}
                      <p>{r.description}</p>
                    </Card.Body>
                    <Card.Footer>
                      <Button
                        variant="danger"
                        onClick={(e) => deleteReview(e, rIndex)}
                      >
                        Delete
                      </Button>
                    </Card.Footer>
                  </Card>
                );
              })}
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
  
  export default App;
*/
