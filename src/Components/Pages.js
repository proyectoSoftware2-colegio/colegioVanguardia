import React, { Component, useState } from 'react'
//import logo from '../static/logo.svg'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import RightArrow from '../static/chevron-right.svg'
import { useNavigate } from 'react-router-dom';
import Bandera from '../static/bandera ierv.png';
import Escudo from '../static/escudo.webp'

function Card({
    height = 'h-96',
    title = 'titulo ejemplo', 
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum metus eget lorem ultrices, et hendrerit diam bibendum. Praesent vel dui nec tellus pharetra blandit ut hendrerit sapien. Etiam sed velit a ligula tincidunt interdum. In hac habitasse platea dictumst. Aenean blandit elementum aliquam. Aenean nisi ligula, ultricies in risus quis, scelerisque laoreet enim. Fusce ac odio tellus. Phasellus non venenatis eros. ',
    imageUrl = 'https://iervanguardia.wordpress.com/wp-content/uploads/2012/03/432147_3060517265331_1035390897_32876302_1561847463_n12.jpg?w=300',
    url = ''}
  ) {
  const navigate = useNavigate();
  return (
    <div className={`${height} shadow-[0_3px_5px_rgb(0,0,0,0.2)] rounded-lg flex flex-col overflow-hidden hover:bg-slate-200 cursor-pointer`} onClick={()=> navigate(url)}>
      <img className='h-2/3  w-full object-cover' src={imageUrl} alt={title} />
      <div className='m-3 h-1/3 overflow-clip'>
        <h4 className='text-2xl font-bold'>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}



class CreatePost extends Component {
  state = {
    postType: 'Noticia'
  };

  // Método para actualizar el estado
  setPostType = (newType) => {
    this.setState({ postType: newType });
  }
  render() {
    return (
      <form className="p-5 w-9/12 mx-auto">
        <h2 className="text-4xl font-bold mb-4">Nuevo Post</h2>
        <div className="mb-4">
          <label className="block text-sm mb-1">Tipo de Post</label>
          <select value={this.postType} onChange={(e) => this.setPostType(e.target.value)} className="border p-2 rounded-md w-full">
            <option value="Noticia">Noticia</option>
            <option value="Evento">Evento</option>
            <option value="Articulo">Articulo</option>
            <option value="Libro">Libro</option>
          </select>
        </div>
        {this.state.postType === "Evento" &&
          <div className="mb-4">
            <label className="block text-sm mb-1">Fecha</label>
            <input type="date" className="border p-2 rounded-md w-full" required/>
          </div>
        }
        
        <div className="mb-4">
          <label className="block text-sm mb-1">Título</label>
          <input type="text" placeholder="Título del Post" className="border p-2 rounded-md w-full" required/>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Imagen o Gráfico</label>
          <div className="border-dashed border-2 p-10 w-full rounded-lg flex justify-center items-center">
            <input type="file" required/>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Contenido</label>
          <textarea placeholder="Texto" className="border p-2 rounded-md w-full h-60" required></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg w-full w">
          Publicar
        </button>
      </form>
    );
  }
}




class Home extends Component {
  NewsSection = () =>{
    const navigate = useNavigate();
    var settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3.2,
      slidesToScroll: 1,
    };
    return (
      <div className='w-9/12 mx-auto my-20'>
        <div className='flex cursor-pointer hover:bg-slate-100' onClick={() => navigate('/noticias')}>
          <h3 className='text-4xl font-bold m-3'>Noticias</h3>
          <img className='mt-2' src={RightArrow} alt="" />
        </div>
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </div>
    );
  }
  EventsSection = () =>{
    const navigate = useNavigate();
    var settings = {
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 2.2,
      slidesToScroll: 1,
    };
    return (
      <div className='w-9/12 mx-auto my-20'>
        <div className='flex cursor-pointer hover:bg-slate-100' onClick={() => navigate('/eventos')}>
          <h3 className='text-4xl font-bold m-3'>Eventos</h3>
          <img className='mt-2' src={RightArrow} alt="" />
        </div>
        <Slider {...settings}>
          <Card height='h-[50svh]' title='Evento1'/>
          <Card height='h-[50svh]' title='Evento2'/>
          <Card height='h-[50svh]' title='Evento3'/>
          <Card height='h-[50svh]' title='Evento4'/>
          <Card height='h-[50svh]' title='Evento5'/>
          <Card height='h-[50svh]' title='Evento6'/>
          <Card height='h-[50svh]' title='Evento7'/>
          <Card height='h-[50svh]' title='Evento8'/>
        </Slider>
      </div>
    );
  }
    render() {
        return (
            <div> 
              <div className='relative '>
                <div className='flex flex-col gap-4 absolute bottom-[10%] left-[10%] right-[10%] text-white z-10'>
                  <h2 className=' text-4xl font-bold'>Texto de inicio home page</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rutrum metus eget lorem ultrices, et hendrerit diam bibendum. Praesent vel dui nec tellus pharetra blandit ut hendrerit sapien. Etiam sed velit a ligula tincidunt interdum. In hac habitasse platea dictumst. Aenean blandit elementum aliquam. Aenean nisi ligula, ultricies in risus quis, scelerisque laoreet enim. Fusce ac odio tellus. Phasellus non venenatis eros. </p>
                </div>
                <img src='https://scontent.fvvc1-1.fna.fbcdn.net/v/t39.30808-6/394281425_768163528655937_6337659242888956190_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6LryajVeOTwQ7kNvgGvex_u&_nc_zt=23&_nc_ht=scontent.fvvc1-1.fna&_nc_gid=ACDf2IoabeJdFg8BD6Bgbly&oh=00_AYCgsbBae63rsEhoQEvw4e3JkgdScryFaIT7sp0L0xPpOg&oe=6713530E' alt='imagen inicio' className='h-[80svh] w-full object-cover z-0'></img>
                <div className='absolute inset-0 bg-transparent shadow-[inset_0px_-300px_100px_-100px_#2d3748] pointer-events-none'></div>
              </div>
              <h2 className='my-10 text-center text-6xl font-bold'>CONOCE MÁS DE NOSOTROS</h2>

              <this.EventsSection />
              <this.NewsSection />
              
            </div>
        );
    }
    
}

class News extends Component {
  render() {
    return (
      <div className='h-full p-4' width="80%">
        <h1 className='text-center text-3xl font-bold mb-6'>Noticias</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          <Card title="Colombia Patria Mía" />
          <Card title="FUNDIENDO ARMAS, CIMENTANDO PAZ" />
          <Card title="Publicidad Engañosa En Empresas De Armas" />
          <Card title="Noticia 4" />
          <Card title="Noticia 5" />
          <Card title="Noticia 6" />
          <Card title="Noticia 7" />
          <Card title="Noticia 8" />
          <Card title="Noticia 9" />
          <Card title="Noticia 10" />
        </div>
      </div>
    );
  }
}


class Events extends Component {
  render() {
    return (
      <div>
        <h1>Eventos</h1>
      </div>
    )
  }
}

class Articles extends Component {
    render() {
      return (
        <div>
          <h1>Articulo</h1>
        </div>
      )
    }
  }

class Institute extends Component {
    content = {
      vision: 'Formar bachilleres técnicos en áreas relacionadas con la conservación, protección y manejo ambiental, desde un modelo pedagógico vanguardista, que les permita ser capaces de transformar su entorno a través de procesos de investigación, desarrollo de proyectos, competencias ciudadanas y laborales, basados en los valores y principios institucionales, con un alto sentido de liderazgo que conlleve a un cambio social, y al mejoramiento de su calidad de vida.',
      mision: 'Para el 2022 la Institución Educativa Rural Vanguardia, será reconocida a nivel municipal y departamental por sus resultados académicos y su participación en proyectos de desarrollo rural y ambiental, fundamentado en el juicio crítico y autoconstrucción permanente, así como en los valores éticos y morales.',
      banderUrl: {Bandera},
      banderaDescripcion: 'El color azul de nuestro cielo, significa lealtad, justicia, buena reputación y la nobleza.  El color blanco significa la paz, pureza, el triunfo, la alegría, la inocencia y la inmortalidad.  El color verde de nuestro inmenso llano, representa la naturaleza, es esperanza, conciencia ecológica, honor, civismo y vigor.',
      escudoUrl: {Escudo},
      escudoDescripcion: `Círculo:                           Eticidad y racionalidad.

      Color Azul:                     Expresa armonía, amistad, fidelidad, serenidad, sosiego y  optimismo.
      
      Figuras humanas:         Trabajo en equipo.
      
      Sol:                                 La luminaria que rige todo el sistema, produce calor, crea vida, confiere orden y brilla con luz propia.`,
      himno: `I

Vamos caminando a la vanguardia
con orgullo y con tenacidad
unidos en la fe y la tolerancia
con respeto, disciplina y lealtad.

II

Compromiso de nosotros nuestra patria
con amor y solidaridad,
de Colombia construiremos el mañana
viva la ciencia, la cultura y la paz.

Coro:

Con Dios del cielo caminaremos,
con paso firme,
hacia la excelencia personal (bis)

III

Verde campo al pie de la montaña
donde las arpas bordonean la libertad
nos formamos con calidad humana
para forjar la nueva sociedad.

IV

Son mis maestros sembradores de esperanza
en tierra fértil, nuestra vida así será
cosecharemos en futuro su enseñanza
con autonomía y responsabilidad.

Coro

V

En el deporte fomentamos la constancia
en la oración la vivencia espiritual
con la lectura enriquecemos nuestras almas
desde las aulas nace la fraternidad.

VI

El regresar será siempre una añoranza
a esta casa nuestro segundo hogar
y crecer con la familia colombiana
en la unidad, el liderazgo y la hermandad.

Coro

 

Autor: Jairo Humberto Rojas Bonilla, 2005

         Ex alumno 1981`
    }
    render() {
      return (
        <div className='w-9/12 mx-auto divide-y'>
          <section className='flex justify-between gap-10 p-10'>
            <div className='w-1/2 text-left place-content-center'>
              <h3 className='font-bold text-4xl mb-5'>Misión</h3>
              <p>{this.content.mision}</p>
            </div>
            <div className='w-1/2 my-auto'>
              <img className='w-full max-h-80 object-cover' src="https://iervanguardia.wordpress.com/wp-content/uploads/2012/03/432147_3060517265331_1035390897_32876302_1561847463_n12.jpg?w=300" alt="" />
            </div>
          </section>

          <section className='flex justify-between gap-10 p-10'>
            <div className='w-1/2 my-auto'>
              <img className='w-full max-h-80 object-cover' src="https://iervanguardia.wordpress.com/wp-content/uploads/2012/03/432147_3060517265331_1035390897_32876302_1561847463_n12.jpg?w=300" alt="" />
            </div>
            <div className='w-1/2  text-right place-content-center'>
              <h3 className='font-bold text-4xl mb-5'>Visión</h3>
              <p>{this.content.vision}</p>
            </div>
          </section>

          <section className='mx-auto text-center pt-10 my-10 flex flex-col gap-20'>
            <div>
              <h2 className='font-bold text-6xl my-5'>Nuestros simbolos institucionales</h2>
              <p className='text-xl'>Los símbolos de la Institución Educativa Rural Vanguardia fueron creados para afianzar la identidad de la comunidad estudiantil, y el reconocimiento de la sociedad llanera, fueron adoptados mediante resolución interna, con la aprobación del consejo directivo.</p>
            </div>
            
            <div>
              <h3 className='font-bold text-3xl '>El lema</h3>
              <p className='font-light text-4xl '> “CON PASO FIRME HACIA LA EXCELENCIA PERSONAL”</p>
            </div>

            <div className='flex gap-10 divide-x-2'>
              <div className='w-1/3 gap-120 flex flex-col'>
                <h3 className='font-bold text-3xl '>Himno</h3>
                <pre className='font-serif'>{this.content.himno}</pre>
              </div >
              <div className='flex flex-col w-2/3 gap-20 px-10'>
                <div className='items-center gap-5 flex flex-col'>
                  <h3 className='font-bold text-3xl '>Bandera</h3>
                  <img src={Bandera} alt="Bandera de la institucion" className='h-64 w-fit'/>
                  <p className='font-serif'>{this.content.banderaDescripcion}</p>
                </div>
                <div className='items-center gap-5 flex flex-col'>
                  <h3 className='font-bold text-3xl '>Escudo</h3>
                  <img src={Escudo} alt="Escudo de la institucion" className='h-64 w-fit' />
                  <p className='font-serif'>{this.content.escudoDescripcion}</p>
                </div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            
          </section>
        </div>
      )
    }
}

class Offices extends Component {
  render() {
    return (
      <div>
        <h1>Sedes</h1>
      </div>
    )
  }
}
export {Home, News, Events, Articles, Institute, Offices, CreatePost};