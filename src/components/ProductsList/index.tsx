import Car from '../../models/Car'
import Product from '../Product'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  cars: Car[]
}

const ProductsList = ({ title, background, cars }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {cars.map((car) => (
          <Product
            key={car.id}
            category={car.category}
            description={car.description}
            image={car.image}
            infos={car.infos}
            title={car.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
