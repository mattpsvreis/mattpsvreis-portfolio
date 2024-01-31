import { FC, Fragment } from 'react';

import { About } from './sections/about';
import { Contact } from './sections/contact';
import { Home } from './sections/home';
import { Projects } from './sections/projects';
import { Skills } from './sections/skills';

export const Landing: FC = () => {
  return (
    <Fragment>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </Fragment>
  );
};
