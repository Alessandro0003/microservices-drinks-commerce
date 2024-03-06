import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { withApollo } from '../lib/withApollo'

const advantages = [
  {
    name: 'Whisky Red Label',
    description: 'O Johnnie Walker Red Label é um whisky escocês blended suave e versátil, com notas frutadas, toques cítricos e leve complexidade de especiarias. Doçura sutil, toque de turfa, envelhecimento em carvalho, cor dourada. Embalagem com a etiqueta vermelha. Apreciado puro, com gelo ou em coquetéis.',
    imageUrl: 'https://i.pinimg.com/564x/3f/75/f6/3f75f6e4560c1f32583a8d8d7ed3ecf5.jpg'
  },

  {
    name: 'Whisky Jack Daniel´s',
    description: 'O Jack Daniels, Tennessee whiskey de Lynchburg, EUA, é conhecido por sua suavidade e doçura, com notas de baunilha e caramelo, envelhecido em barris de carvalho. Destaca-se pelo Processo de Lincoln County, filtragem com carvão de bordo. Com teor alcoólico de 40-50% ABV, é apreciado puro, com gelo ou em coquetéis como o Jack and Coke, sendo internacionalmente reconhecido por amantes de uísque',
    imageUrl: 'https://i.pinimg.com/564x/2b/ab/8e/2bab8e27d35da406770e322c621c291d.jpg'
  },

  {
    name: 'Whisky Buchanans 12 anos',
    description: 'Buchanans 12 anos é um whisky escocês single malt com uma maturação de 12 anos. Reconhecido por sua suavidade e complexidade, apresenta notas de frutas maduras, baunilha e um toque sutil de carvalho. A embalagem elegante destaca a marca Buchanans. Este whisky é apreciado pela sua qualidade e pode ser desfrutado puro ou com gelo, refletindo a tradição e maestria da destilaria.',
    imageUrl: 'https://i.pinimg.com/564x/b1/5d/96/b15d964db6d694b876756a27a81984aa.jpg'
  },

  {
    name: 'Licor 43',
    description: 'Licor 43 é uma bebida espanhola conhecida por sua doçura e versatilidade. Com 43 ingredientes secretos, incluindo frutas cítricas e especiarias, proporciona uma mistura única de sabores. Sua cor dourada e aroma aromático o tornam distintivo. Pode ser apreciado puro, com gelo ou como ingrediente em diversos coquetéis, destacando-se pela sua doçura equilibrada e perfil aromático.',
    imageUrl: 'https://i.pinimg.com/564x/99/8d/1d/998d1d61a4b6310e3f0d022a8fddcb0e.jpg'
  },

  {
    name: 'Whisky Chivas Regal 25 anos',
    description: 'Chivas Regal 25 anos é um whisky escocês blended premium envelhecido por um quarto de século. Distinto pela rica suavidade, revela complexidade com notas de frutas maduras, mel, e toques de carvalho. Sua elegante garrafa e embalagem refletem a qualidade premium. Apreciado pela sofisticação, pode ser desfrutado puro, realçando a excelência de suas duas décadas e meia de maturação.',
    imageUrl: 'https://i.pinimg.com/564x/fb/74/ae/fb74aee5db40843127425ab02b383580.jpg'
  },

  {
    name: 'Whisky Passport Scotch',
    description: 'Passport Scotch é um whisky escocês blended, conhecido por sua abordagem acessível e sabor equilibrado. Com uma mistura de maltes e grãos, apresenta notas suaves de frutas, toques de especiarias e um final leve. Sua versatilidade o torna ideal para ser apreciado puro, com gelo ou em coquetéis. Uma escolha acessível para os apreciadores que buscam um whisky escocês de qualidade.',
    imageUrl: 'https://i.pinimg.com/564x/22/ce/d0/22ced01cff7958fd8559f7418ac30afc.jpg'
  },

]
const blogPostsDrinks = [
  {
    id: 1,
    title: 'Como fazer Caipirinha de Kiwi com saquê?',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Drinks & Preparo', href: '#' },
    imageUrl:
      'https://i.pinimg.com/564x/0c/0c/d9/0c0cd9369499b4d2983d9320b50ebc4d.jpg',
    preview:[
      'Ingredientes:', '• 2 kiwis sem casca', '• 60 ml de saquê', '• Açúcar a gosto (cerca de 4 colheres)', '• Cubos de gelo a gosto'
    ], 
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '6 min',
  },
  {
    id: 2,
    title: 'Como fazer uma batidinha de abacaxi?',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Drinks & Preparo', href: '#' },
    imageUrl:
      'https://i.pinimg.com/564x/41/77/cc/4177cc0af160c16d6d8afafebabd3899.jpg',
    preview:[
      'Ingredientes:', '• 60ml de cachaça', '• 1 rodela de abacaxi', '• açúcar a gosto', '• 1 ramo de hortelã', '• 4 pedras de gelo'
    ],
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '4 min',
  },
  {
    id: 3,
    title: 'Dicas para manter seu setup de estudos ergonômico',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl:
      'https://i.pinimg.com/564x/f0/34/60/f03460252e4f72b4f9de3c5731ae19ab.jpg',
      preview:[
        'Ingredientes:', ' • ½ xícara (chá) de cachaça (ou 2 doses)', '• 1 Maracujá', '• 3 Colheres (sopa) de açúcar', '• 1 Carambola', '• 4 pedras de gelo'
      ],
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#',
    },
    readingLength: '11 min',
  },
]


function Home() {
  return (
    <>
      <Head>
        <title>Drinks Tack 🥃🍹</title>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>

      <div className="bg-black">
        <div className="relative overflow-hidden">
          <Header />
          <main>
            <div className="pt-10 bg-zinc-00 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div className="lg:py-24">
                      
                      <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                        <span className="block">Drinks Track</span>
                        <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-violet-900 to-violet-200 sm:pb-5">
                          Adega de Bebidas 
                        </span>
                      </h1>
                      <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                        Descubra a variedade incomparável de bebidas em nosso adega. 
                        Seja qual for o seu gosto, temos uma seleção excepcional que atende aos paladares
                        mais exigentes. Explore agora e encontre a bebida perfeita para cada ocasião, 
                        proporcionando uma experiência única e refinada.
                      </p>
                    </div>
                  </div>
                  <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                      {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                      <img
                        className="w-full lg:absolute lg:left-40 lg:h-full lg:w-8/12 lg:max-w-none rounded-3xl"
                        src="https://i.pinimg.com/564x/fd/7e/0c/fd7e0c90aff742cbea05f196c3b354ff.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature section with grid */}
            <div className="relative bg-white py-16 sm:py-24 lg:py-32">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-violet-900 uppercase">Tudo que você precisa</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Vantagens de adquirir sua bebida conosco
                </p>
                <div className="mt-12">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {advantages.map((advantage) => (
                      <div key={advantage.name} className="pt-6">
                        <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                          <div className="-mt-6">
                            <div>
                              <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-black to-zinc-950 rounded-md shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                                <img className="h-[320px] w-full object-cover" src={advantage.imageUrl} alt="" />
                              </span>
                            </div>
                            <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{advantage.name}</h3>
                            <p className="mt-5 text-base text-gray-500 mx-auto text-center">{advantage.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial section */}
            <div className="pb-16 bg-gradient-to-r to-zinc-950 lg:pb-0 lg:z-10 lg:relative">
              <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                <div className="relative lg:-my-8">
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden" />
                  <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                    <div className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                      <img
                        className="object-cover lg:h-full lg:w-full"
                        src="https://i.pinimg.com/564x/fb/76/cc/fb76ccb2e6e45b1541057583c379e34f.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                    <blockquote>
                      <div>
                        <svg
                          className="h-12 w-12 text-white opacity-25"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="mt-6 text-2xl font-medium text-white">
                        Depois de garantir minhas bebidas na Drinks Track, aceitei tranquilamente que a noite prometia ser agradável. O ambiente descontraído e as opções variadas de bebidas 
                        criaram a atmosfera perfeita para aproveitar o momento. Sentei-me confortavelmente, apreciando cada gole e desfrutando da companhia ao meu redor. Era o início de uma noite 
                        memorável, onde a qualidade das bebidas e a energia positiva do local se uniam para criar uma experiência única..
                        </p>
                      </div>
                      <footer className="mt-6">
                        <p className="text-base font-medium text-white">Carolina Torres</p>
                        <p className="text-base font-medium text-violet-500">Bebendo e Desfrutando o sabor</p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog section */}
            <div className="relative bg-gray-50 py-16 sm:py-24 lg:py-32">
              <div className="relative">
                <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                  <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Aprenda mais como fazer esses drinks</h2>
                  <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                    Últimos drinks feitos pela nossa equipe🍹
                  </p>
                </div>
                <div className="mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
                  {blogPostsDrinks.map((post) => (
                    <div key={post.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                      <div className="flex-shrink-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                        <img className="h-[320px] w-full object-cover" src={post.imageUrl} alt="" />
                      </div>
                      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-cyan-600">
                            <a href={post.category.href} className="hover:underline">
                              {post.category.name}
                            </a>
                          </p>
                          <a href={post.href} className="block mt-2">
                            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                            <ul className=" mt-3 text-base text-gray-500">
                              <li>{post.preview[0]}</li>
                              <li>{post.preview[1]}</li>
                              <li>{post.preview[2]}</li>
                              <li>{post.preview[3]}</li>
                              <li>{post.preview[4]}</li>
                            </ul>
                          </a>
                        </div>
                        <div className="mt-6 flex items-center">
                          <div className="flex-shrink-0">
                            <a href={post.author.href}>
                              <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt={post.author.name} />
                            </a>
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">
                              <a href={post.author.href} className="hover:underline">
                                {post.author.name}
                              </a>
                            </p>
                            <div className="flex space-x-1 text-sm text-gray-500">
                              <time dateTime={post.datetime}>{post.date}</time>
                              <span aria-hidden="true">&middot</span>
                              <span>{post.readingLength} read</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default withApollo(Home)