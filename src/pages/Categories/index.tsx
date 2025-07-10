import ProductsList from '../../components/ProductsList'
import Car from '../../models/Car'

import gol from '../../assets/images/gol.jpeg'
import civic from '../../assets/images/civic.jpeg'
import hrv from '../../assets/images/hrv.jpg'
import porsche from '../../assets/images/porsche.jpg'

const popular: Car[] = [
  {
    id: 1,
    category: 'Popular',
    description:
      'O Volkswagen Gol é um automóvel da Volkswagen, desenhado no Brasil e comercializado em vários países sob diversas designações...',
    title: 'GOL G6 2013',
    infos: ['5%', 'R$ 34.000,00'],
    image: gol
  },
  {
    id: 2,
    category: 'Popular',
    description:
      'O Volkswagen Gol é um automóvel da Volkswagen, desenhado no Brasil e comercializado em vários países sob diversas designações...',
    title: 'GOL G6 2013',
    infos: ['10%', 'R$ 32.000,00'],
    image: gol
  },
  {
    id: 3,
    category: 'Popular',
    description:
      'O Volkswagen Gol é um automóvel da Volkswagen, desenhado no Brasil e comercializado em vários países sob diversas designações...',
    title: 'GOL G6 2013',
    infos: ['5%', 'R$ 34.000,00'],
    image: gol
  },
  {
    id: 4,
    category: 'Popular',
    description:
      'O Volkswagen Gol é um automóvel da Volkswagen, desenhado no Brasil e comercializado em vários países sob diversas designações...',
    title: 'GOL G6 2013',
    infos: ['10%', 'R$ 32.000,00'],
    image: gol
  }
]

const suv: Car[] = [
  {
    id: 5,
    category: 'SUV',
    description: 'SUV compacto com visual moderno e interior espaçoso.',
    title: 'Honda HR-V 2024',
    infos: ['R$ 155.000,00'],
    image: hrv
  },
  {
    id: 6,
    category: 'Sedan',
    description: 'Sedan esportivo com ótimo custo-benefício e design refinado.',
    title: 'Honda Civic 2023',
    infos: ['R$ 120.000,00'],
    image: civic
  },
  {
    id: 7,
    category: 'Esportivo',
    description: 'Esportivo de luxo com alto desempenho e estilo icônico.',
    title: 'Porsche 911',
    infos: ['R$ 1.200.000,00'],
    image: porsche
  },
  {
    id: 8,
    category: 'Popular',
    description: 'Hatch compacto, econômico e ideal para o dia a dia urbano.',
    title: 'GOL G6 2013',
    infos: ['R$ 32.000,00'],
    image: gol
  }
]

const sedan: Car[] = [
  {
    id: 9,
    category: 'SUV',
    description: 'SUV compacto com visual moderno e interior espaçoso.',
    title: 'Honda HR-V 2024',
    infos: ['R$ 155.000,00'],
    image: hrv
  },
  {
    id: 10,
    category: 'Sedan',
    description: 'Sedan esportivo com ótimo custo-benefício e design refinado.',
    title: 'Honda Civic 2023',
    infos: ['R$ 120.000,00'],
    image: civic
  },
  {
    id: 11,
    category: 'Esportivo',
    description: 'Esportivo de luxo com alto desempenho e estilo icônico.',
    title: 'Porsche 911',
    infos: ['R$ 1.200.000,00'],
    image: porsche
  },
  {
    id: 12,
    category: 'Popular',
    description: 'Hatch compacto, econômico e ideal para o dia a dia urbano.',
    title: 'GOL G6 2013',
    infos: ['R$ 32.000,00'],
    image: gol
  }
]

const esportivo: Car[] = [
  {
    id: 13,
    category: 'SUV',
    description: 'SUV compacto com visual moderno e interior espaçoso.',
    title: 'Honda HR-V 2024',
    infos: ['R$ 155.000,00'],
    image: hrv
  },
  {
    id: 14,
    category: 'Sedan',
    description: 'Sedan esportivo com ótimo custo-benefício e design refinado.',
    title: 'Honda Civic 2023',
    infos: ['R$ 120.000,00'],
    image: civic
  },
  {
    id: 15,
    category: 'Esportivo',
    description: 'Esportivo de luxo com alto desempenho e estilo icônico.',
    title: 'Porsche 911',
    infos: ['R$ 1.200.000,00'],
    image: porsche
  },
  {
    id: 16,
    category: 'Popular',
    description: 'Hatch compacto, econômico e ideal para o dia a dia urbano.',
    title: 'GOL G6 2013',
    infos: ['R$ 32.000,00'],
    image: gol
  }
]

const Categories = () => (
  <>
    <ProductsList cars={popular} title="Popular" background="gray" />
    <ProductsList cars={suv} title="SUV" background="black" />
    <ProductsList cars={sedan} title="Sedan" background="gray" />
    <ProductsList cars={esportivo} title="Esportivo" background="black" />
  </>
)

export default Categories
