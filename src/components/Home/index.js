import "./index.scss";
import Loader from "react-loaders";

function Home() {
  return (
    <div className='home-page'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='heading'>
              <div>
                <h1>Hello there,</h1>
              </div>
              <div>
                <h1>
                  I'm <span className='text-treatment'>Thomas</span> Hexton,
                </h1>
              </div>
              <div>
                <h1>a fullstack web developer.</h1>
              </div>
            </div>
            <h2>Midweight Developer | Ruby on Rails Master | React Padawan</h2>
          </div>
          <div className='col'></div>
        </div>
      </div>
      {/* <Loader type='line-scale' color='#fed002' width={500} /> */}
    </div>
  );
}

export default Home;
