import React, { useState, useMemo } from 'react';

import { Carousel } from 'react-responsive-carousel';
import { Content, ControlButton } from './styles';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image from 'next/image'

export default function Projects() {
  const [page, setPage] = useState(0);

  const projects = [
    {
      name: 'Nome do projeto',
      description:
        'Descrição breve do que é o projeto em no máximo três linhas de extenção para que fique visualmente harmonioso.',
      url: "/placeholder.png",
    },
  ];

  const pageSize = useMemo(() => projects.length, [projects]);
  const leftDisabled = useMemo(() => page === 0, [page]);
  const rightDisabled = useMemo(() => page === pageSize - 1, [page, pageSize]);

  function handlePageDown(newPage) {
    if (leftDisabled) {
      return;
    }

    setPage(newPage);
  }

  function handlePageUp(newPage) {
    if (rightDisabled) {
      return;
    }

    setPage(newPage);
  }

  return (
    <Content id="projects">
      <div className="projects">
        <div className="content">
            <span>Projetos recentes</span>
            <h2>{projects[page].name}</h2>
            <p>{projects[page].description}</p>

            <div className="controls">
              <ControlButton
                left
                onClick={() => handlePageDown(page - 1)}
                disabled={leftDisabled}
              >
                <img src={ArrowDown} alt="Arrow Left" />
              </ControlButton>

              <ControlButton
                right
                onClick={() => handlePageUp(page + 1)}
                disabled={rightDisabled}
              >
                <img src={ArrowDown} alt="Arrow Right" />
              </ControlButton>
            </div>
        </div>
        <div className="previews">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            selectedItem={page}
            showIndicators={false}
            swipeable
            onChange={event => setPage(event)}
          >
            {projects &&
              projects.map(({ name, url }) => (
                <div>
                  <Image width="640px" height="480px" src={url} alt={name} />
                </div>
              ))}
          </Carousel>
          <div className="dots">
            {projects &&
              projects.map((_, index) => (
                <span className={`dot ${page === index ? 'active' : ''}`} />
              ))}
          </div>
        </div>
      </div>
    </Content>
  );
}
