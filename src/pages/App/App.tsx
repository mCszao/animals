import { useEffect, useState } from 'react';
import * as AppStyles from './AppStyles';
import { Logo } from '../../components/Logo';
import logotype from '../../assets/images/logo.png';
import { Slider } from '../../components/Slider';
import { SwiperSlide } from 'swiper/react';
import { Card } from '../../components/Card';
import { PlusSquare } from 'lucide-react';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Modal } from '../../components/Modal';
import logoReact from '../../assets/images/react.svg';
import { Res } from '../../interfaces/IRes';

function App() {
    const [loading, setLoading] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const ApiImageLink = 'https://image.tmdb.org/t/p/w500/';
    const [search, setSearch] = useState('');
    const [slides, setSlides] = useState<Res[]>([]);
    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/3/movie/popular?api_key=d9933aa94f6c72dd8b077673c359fc82&language=en-US&page=1'
        )
            .then((response) => response.json())
            .then((json) => setSlides(json.results));
        setLoading(false);
    });
    const sliderSettings = {
        spaceBetween: 10,
        slidesPerView: 3,
    };
    const modalSettings = {
        btnClose: true,
    };
    const filteredCards =
        search.length != 0
            ? slides.filter((item) => {
                  const regex = new RegExp(search, 'i');
                  return item.original_title.match(regex);
              })
            : [];
    return (
        <AppStyles.Body>
            {loading && (
                <AppStyles.ImgLoading src={logoReact}></AppStyles.ImgLoading>
            )}
            <Modal
                isOpen={modalOpen}
                modalOpen={() => {
                    setModalOpen(!modalOpen);
                }}
                settings={modalSettings}
            />
            <AppStyles.Header>
                <Logo
                    url='http://localhost:5173/'
                    source={logotype}
                    altTxt='Imagem'
                />
                <AppStyles.Input
                    type='text'
                    placeholder='Pesquise algum filme'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                ></AppStyles.Input>
                <ButtonIcon
                    children={
                        <PlusSquare
                            color='#fff'
                            size={40}
                            strokeWidth={1.5}
                            onClick={() => setModalOpen(!modalOpen)}
                        />
                    }
                />
            </AppStyles.Header>
            {loading && (
                <AppStyles.ImgLoading src={logoReact}></AppStyles.ImgLoading>
            )}
            <Slider settings={sliderSettings}>
                {search.length === 0
                    ? slides.map((item, index) => (
                          <SwiperSlide key={index}>
                              <Card
                                  urlImage={`${ApiImageLink}${item.poster_path}`}
                                  title={item.original_title}
                              />
                              <p></p>
                          </SwiperSlide>
                      ))
                    : filteredCards.map((item, index) => (
                          <SwiperSlide key={index}>
                              <Card
                                  urlImage={`${ApiImageLink}${item.poster_path}`}
                                  title={item.original_title}
                              />
                          </SwiperSlide>
                      ))}
            </Slider>
        </AppStyles.Body>
    );
}

export default App;
