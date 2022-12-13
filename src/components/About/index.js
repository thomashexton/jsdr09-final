import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnitmatedLetters";

function About() {
  return (
    <>
      <div className='about-page'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1>
                <AnimatedLetters stringArray={"About".split("")} startIndex={1} />
              </h1>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <p>
                I'm closing in on my fourth year as a Software Developer and I'm still loving it.
                Most recently, I was developing “whatever needed doing" while working in a fast
                paced software development consultancy. Primarily, I was working with Ruby on Rails
                but I also worked on some React code bases.
              </p>
              <p>
                Prior to this I worked at a mature agile Sydney based start-up. My roles have
                primarily been that of a backend dev, working with Ruby on Rails. However, the size
                of the R&D teams that I've worked with have allowed me to dabble in an array of
                exciting technologies.
              </p>
              <p>
                I have a passion for cleaning up old code. I take an essentialist approach, I really
                try to understand what has been added, the lay of the land and what else is
                required. Included libraries because 'oh I saw someone else do that' is not for me.
              </p>
            </div>
            <div className='col'>
              <p>
                Prior to all this, I was an art director but I've diverted entirely to development.
                Some say I've gone to the dark side, but I've fallen hard for the wonderful
                combination of creativity and objectivity that is development.
              </p>
              <p>
                I started my career after graduating from a Bachelor of Visual Communication. I went
                on to spend time in a media agency as a designer & art director and subsequently ran
                my own freelance photography & videography business before completing some web sites
                for clients, finding a real passion in the process.
              </p>
              <p>
                I am truly excited to be able to contribute to projects and work alongside like
                minded and clever teammates with a shared goal of bringing something functional and
                beneficial into society.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <Loader type='line-scale' color='#fed002' width={500} /> */}
    </>
  );
}

export default About;
