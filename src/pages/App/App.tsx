import { ChangeEvent, useEffect, useState } from 'react';
import * as AppStyles from './AppStyles';
import { Logo } from '../../components/Logo/Logo';
import logotype from '../../assets/images/logo.png';
import { Slider } from '../../components/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import { Card } from '../../components/Card/Card';

interface Item {
    titulo: string;
    avatar: string;
}
function App() {
    const [search, setSearch] = useState('');
    const [slides, setSlides] = useState<Item[]>([]);
    useEffect(() => {
        fetch('https://api.b7web.com.br/cinema/')
            .then((response) => response.json())
            .then((json) => setSlides(json));
    });
    const sliderSettings = {
        spaceBetween: 10,
        slidesPerView: 3,
    };
    const filteredCards =
        search.length != 0
            ? slides.filter((item) => item.titulo.includes(search))
            : [];
    return (
        <AppStyles.Body>
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
            </AppStyles.Header>
            <Slider settings={sliderSettings}>
                {search.length === 0
                    ? slides.map((item, index) => (
                          <SwiperSlide key={index}>
                              <Card
                                  urlImage={item.avatar}
                                  title={item.titulo}
                              />
                          </SwiperSlide>
                      ))
                    : filteredCards.map((item, index) => (
                          <SwiperSlide key={index}>
                              <Card
                                  urlImage={item.avatar}
                                  title={item.titulo}
                              />
                          </SwiperSlide>
                      ))}
            </Slider>
        </AppStyles.Body>
    );
}

export default App;
