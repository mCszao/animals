import { ChangeEvent, useEffect, useState } from 'react';
import * as AppStyles from './AppStyles';
import { Logo } from '../../components/Logo/Logo';
import logotype from '../../assets/images/logo.png';
import { Slider } from '../../components/Slider/Slider';
import { SwiperSlide } from 'swiper/react';
import { Card } from '../../components/Card/Card';
interface Item {
    original_title: string;
    poster_path: string;
}
function App() {
    const ApiImageLink = 'https://image.tmdb.org/t/p/w500/';
    const [search, setSearch] = useState('');
    const [slides, setSlides] = useState<Item[]>([]);
    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/3/movie/popular?api_key=d9933aa94f6c72dd8b077673c359fc82&language=en-US&page=1'
        )
            .then((response) => response.json())
            .then((json) => setSlides(json.results));
    });
    const sliderSettings = {
        spaceBetween: 10,
        slidesPerView: 3,
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
