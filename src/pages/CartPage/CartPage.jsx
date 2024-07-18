// Components
import {
  Container,
  Title,
  CardsContainer,
} from "./Styles";
import { CartBuyBox, CartCard  } from "@components";


export default function CartPage() {

  const data = [
    {
      name: "Test Tree 1",
      location: "Test Location 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris.",
      archive: ["60d21b4667d0d8992e610c85", "60d21b4967d0d8992e610c86"],
      price: 99.99,
      specie: "Test Specie 1",
      id_category: ["60d21b5567d0d8992e610c87", "60d21b5767d0d8992e610c88"]
    },
    {
      name: "Test Tree 2",
      location: "Test Location 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris.",
      archive: ["60d21b4667d0d8992e610c85", "60d21b4967d0d8992e610c86"],
      price: 109.99,
      specie: "Test Specie 2",
      id_category: ["60d21b5567d0d8992e610c87", "60d21b5767d0d8992e610c88"]
    },
    {
      name: "Test Tree 3",
      location: "Test Location 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris.",
      archive: ["60d21b4667d0d8992e610c85", "60d21b4967d0d8992e610c86"],
      price: 119.99,
      specie: "Test Specie 3",
      id_category: ["60d21b5567d0d8992e610c87", "60d21b5767d0d8992e610c88"]
    },
    {
      name: "Test Tree 4",
      location: "Test Location 4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris.",
      archive: ["60d21b4667d0d8992e610c85", "60d21b4967d0d8992e610c86"],
      price: 129.99,
      specie: "Test Specie 4",
      id_category: ["60d21b5567d0d8992e610c87", "60d21b5767d0d8992e610c88"]
    },
    {
      name: "Test Tree 5",
      location: "Test Location 5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet est mauris.",
      archive: ["60d21b4667d0d8992e610c85", "60d21b4967d0d8992e610c86"],
      price: 139.99,
      specie: "Test Specie 5",
      id_category: ["60d21b5567d0d8992e610c87", "60d21b5767d0d8992e610c88"]
    }
  ];

  const calculateTotalPrice = (data) => {
    return data.reduce((total, tree) => total + tree.price, 0);
  };
  
  return (
    <Container>
      <Title>CARRINHO DE COMPRAS</Title>
      <CartBuyBox value={calculateTotalPrice(data)}/>

      <CardsContainer>
      {data.map((tree, index) => (
        <CartCard data={tree}/>
      ))}
      </CardsContainer>

    </Container>
  );
}
