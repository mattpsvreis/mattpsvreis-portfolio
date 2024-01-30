import { FC, Fragment } from 'react';

import { About } from './components/sections/about';
import { Contact } from './components/sections/contact';
import { Home } from './components/sections/home';
import { Projects } from './components/sections/projects';
import { Skills } from './components/sections/skills';

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
