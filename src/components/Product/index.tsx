import Tag from '../Tag'

import { Card, Titulo, Descricao } from './styles'

type Props = {
  title: string
  category: string
  description: string
  image: string
  infos: string[]
}

const Product = ({ title, category, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Tag>{category}</Tag>
    <Descricao>{description}</Descricao>
  </Card>
)

export default Product
