// creamo un componente per generare un formo in react
// ogni volta che  lavoriamo con il componte input ha bisogno uno stato
import { Component } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
// ogni volta che dobbiamo fare un form lo dobbiamo modellare in tonro
// al dato che dobbiamo inviare all api

// lapi di oggi si aspetta un  oggetto così strutturato:
// - name --> stringa
//- numero di telefono --> stringa/ numero
// - numero di persone --> stringa/ numero
//- fumatori --> valore buleano
// - ora appuntamento -->  string data in formato iso esce in formato input
// - richieste particolari --> stringa , riempimento optionale

class BookATable extends Component {
  //in qualsiasi fome in react, quello che cambia è l'approccio
  // noi non collezioneremo i valori dell' input all' avviodel form
  //i valori dei campi del form verranno continuamente memorizzati nello stato
  // qindi non ci sarà poù necessità di raccoglere i dati in fase di submit
  state = {
    bookimg: {
      // questi sono i valori iniziali all'avvio della pagina
      nome: "",
      telefono: "",
      numeroDiPersone: "1",
      fumatori: false,
      oraAppuntamento: "",
      richiesteParticolari: "",
    },
  };

  sendBookimg = () => {
    console.log("invio i dati alle API", this.state.bookimg);
    const URL = "https://striveschool-api.herokuapp.com/api/reservation";
    fetch(URL, {
      method: "POST",
      body: JSON.stringify(this.state.bookimg),
      headers: {
        "content-Type": "application/json", // metodi post e put
      },
    })
      .then((r) => {
        if (r.ok) {
          alert("Pernotazione salvata correttamente!");
          // svuoto il form: resetto lo stato
          this.setState({
            bookimg: {
              nome: "",
              telefono: "",
              numeroDiPersone: "1",
              fumatori: false,
              oraAppuntamento: "",
              richiesteParticolari: "",
            },
          });
        } else {
          throw new Error("errore nella respons", r.status);
        }
      })
      .catch((e) => {
        alert("ERRORE in ivio della prenotazione", e);
      });
  };

  //ora collegiamo i campi del form alle diverse proprietà
  // dallo stato al componente . in react questa operazione
  // TWO-WAY DATA BIDING

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <h2 className="text-center my-3">Prenota un Tavolo!</h2>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                this.sendBookimg(); // sotto this setBookimg
              }}>
              <Form.Group className="mb-3">
                <Form.Label>Nome prenotazione </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Giampaolo"
                  value={this.state.bookimg.nome}
                  onChange={(e) => {
                    // questa funzione mantiene aggiornato lo stato
                    this.setState({
                      bookimg: {
                        ...this.state.bookimg,
                        nome: e.target.value,
                      },
                    });
                  }}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Numero di telefono</Form.Label>
                <Form.Control
                  type="tel"
                  value={this.state.bookimg.telefono}
                  onChange={(e) => {
                    // questa funzione mantiene aggiornato lo stato
                    this.setState({
                      bookimg: {
                        ...this.state.bookimg, // mi recupera tutte le vecchi agg di booking
                        telefono: e.target.value,
                      },
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>In quanti siete</Form.Label>
                <Form.Select
                  aria-label="Numero di persone "
                  value={this.state.bookimg.numeroDiPersone}
                  onChange={(e) => {
                    // questa funzione mantiene aggiornato lo stato
                    this.setState({
                      bookimg: {
                        ...this.state.bookimg,
                        numeroDipersone: e.target.value,
                      },
                    });
                  }}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>6+</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Tavolo fumatori"
                  checked={this.state.bookimg.nome}
                  onChange={(e) => {
                    // questa funzione mantiene aggiornato lo stato
                    this.setState({
                      bookimg: {
                        ...this.state.bookimg,
                        nome: e.target.checked,
                      },
                    });
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Data e ora </Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={this.state.bookimg.oraAppuntamento}
                  onChange={(e) => {
                    // questa funzione mantiene aggiornato lo stato
                    this.setState({
                      bookimg: {
                        ...this.state.bookimg,
                        oraAppuntamento: e.target.value,
                      },
                    });
                  }}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Allergie/Cani/Bambini</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  value={this.state.bookimg.richiesteParticolari}
                  onChange={(e) => {
                    // questa funzione mantiene aggiornato lo stato
                    this.setState({
                      bookimg: {
                        ...this.state.bookimg,
                        richiesteParticolari: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>

              <Button variant="success" type="submit">
                Prenota
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default BookATable;
