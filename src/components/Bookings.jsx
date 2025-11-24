// questo componente servirà a recuperare le prenotazioni ai tavoliesistenti
// e le mosterà all'interno di una listGroup di react-bootdtrap

import { Component } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";

//questo processo gia esplorato in un documento html
//ma non sappiamo come approciare il problema nei singoli componenti react
//dobbiamo come sempre bilanciare la user expirions
// cioe non dobbiamo far aspettare l'utente e dobbiamo fargliela vedere subito
// con almeno le partiti statiche

// e poi la chiamata remota ci metterà il tempo che serve

// quando ce da creare un componete che mostrera dei dati da un api il componente avra isogno di uno stato
//class component

class Bookings extends Component {
  state = {
    prenotazioni: [], // diventea un ospite in futuro
  };

  getBookings = function () {
    // questa unzione recupera dall' api  l'elenco delle prenotazioni esistenti
    // utilizzeremo l'and point:
    const URL = "https://striveschool-api.herokuapp.com/api/reservation";
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          // posso continuare ad estrarre il json per ottenere l'arrai delle prenotazioni
          return response.json();
        } else {
          throw new Error("la chiamata non è ok " + response.status);
        }
      })
      .then((arrayOfBookings) => {
        console.log("prenotazioni", arrayOfBookings);
        this.setState({
          prenotazioni: arrayOfBookings,
        });
      })
      .catch((err) => {
        console.log("ERRORE nella chiamata", err);
      });
  };

  render() {
    //this.getBookings();
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h2 className="text-center my-3">Prenotazioni Dai Tavoli </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <ListGroup>
              {
                // qui facciamo il map dell' array delle prenotazioni
                this.state.prenotazioni.map((Booking) => {
                  return (
                    <ListGroup.Item key={Booking._id}>
                      {Booking.nome} per {Booking.numeroDiPersone}
                    </ListGroup.Item>
                  );
                })
              }
            </ListGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Bookings;
