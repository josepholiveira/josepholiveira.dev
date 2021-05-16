import React, { useState, useMemo } from 'react';

import { Carousel } from 'react-responsive-carousel';
import { Content, ControlButton } from './styles';
import ArrowDown from '../../assets/icons/arrow-down.svg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Image from 'next/image';

interface ProjectsProps {
  projects: {
    id: string,
    title: string,
    description: string,
    image_url: string,
    url: string,
  }[]
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [page, setPage] = useState(0);

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
            <h2>{projects[page].title}</h2>
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
              projects.map((project) => (
                <a key={project.title} aria-label={project.title} target="_blank" rel="noopener noreferrer" href={project.url}>
                  <div className="project-image" >
                      <Image width="640px" height="480px" src={project.image_url} alt={project.title} />
                  </div>
                </a>
              ))}
          </Carousel>
          <div className="dots">
            {projects &&
              projects.map((project, index) => (
                <span key={project.title} className={`dot ${page === index ? 'active' : ''}`} />
              ))}
          </div>
        </div>
      </div>
    </Content>
  );
}

export default Projects