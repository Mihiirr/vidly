// import React, { useState, useEffect } from "react";
// import Vnavbar from "../Components/Vnavbar";
// import { Card } from "react-bootstrap";
// import "./moviedetail.css";
// import axios from "axios";

// function Moviedetail(props) {
//   const [movie, setMovie] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/api/movies/${props.match.params.id}`)
//       .then((res) => setMovie(res.data))
//       .catch((error) => console.log(error));
//   });
//   return (
//     <div>
//       <Vnavbar />
//       {movie.map((val, key) => (
//         <div className="moviedetail">
//           <div className="detail__img">
//             <Card style={{ width: "18rem" }}>
//               <Card.Img
//                 src={`http://localhost:5000/${val.movieImage}`}
//                 height="370px"
//               />
//             </Card>
//             <div className="buttons">
//               <div className="button__rent">
//                 <button>${val.dailyRentalRate} Rent</button>
//               </div>
//               <div className="button__buy">
//                 <button>${val.buyRate} Buy</button>
//               </div>
//               <div className="button__fav">
//                 <button>Add to Favourite</button>
//               </div>
//             </div>
//           </div>
//           <div className="detail__info">
//             <div className="detail__m_name">
//               <h1>{val.title}</h1>
//             </div>
//             <div className="detail__a_title">
//               <h4>About the Movie</h4>
//             </div>
//             <div className="detail__a_description">
//               <p>{val.aboutthemovie}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Moviedetail;

import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Vnavbar from "../Components/Vnavbar";
import axios from "axios";
import "./moviedetail.css";

class Moviedetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memory: {},
    };
  }

  componentDidMount() {
    // console.log("Print id: " + this.props.match.params.id);
    axios
      .get("http://localhost:5000/api/movies/" + this.props.match.params.id)
      .then((res) => {
        // console.log("Print-showBookDetails-API-response: " + res.data);
        this.setState({
          memory: res.data,
        });
      })
      .catch((err) => {
        console.log("Error from ShowBookDetails");
      });
  }

  render() {
    const memory = this.state.memory;

    return (
      <div>
        <Vnavbar />
        <div className="moviedetail">
          <div className="detail__img">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                src={`http://localhost:5000/${memory.movieImage}`}
                height="370px"
              />
            </Card>
            <div className="buttons">
              <div className="button__rent">
                <button>${memory.dailyRentalRate} Rent</button>
              </div>
              <div className="button__buy">
                <button>${memory.buyRate} Buy</button>
              </div>
              <div className="button__fav">
                <button>Add to Favourite</button>
              </div>
            </div>
          </div>
          <div className="detail__info">
            <div className="detail__m_name">
              <h1>{memory.title}</h1>
            </div>
            <div className="detail__a_title">
              <h4>About the Movie</h4>
            </div>
            <div className="detail__a_description">
              <p>{memory.aboutthemovie}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Moviedetail;
