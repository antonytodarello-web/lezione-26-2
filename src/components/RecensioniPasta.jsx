// pasta recensionipasta è un componente che ha loscopo
// è di fare un mapdei commenti delle paste
// questa pasta non fa più parte del componente gli va fornita
// questo comporta che all'invocazione del componente di venga fornita la pasta giusta
// gli serve una prop

import { ListGroup } from "react-bootstrap";

const RecensioniPasta = function (props) {
  // props  è sempre un oggetto, che passerà tutte le props al nostro componente
  return (
    <ListGroup className="text-center">
      {props.pasta.comments.map((c) => {
        return (
          <ListGroup.Item key={c.id}>
            {c.author} | {c.comment}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
export default RecensioniPasta;
