import React from 'react';

const About = () => {
    return (
        <div className='about'>
            <div className='about_container'>
                <div className='about_left'>
                    <h2>About us</h2>
                    <div className='about_text_wrapper'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aliquam et iure laboriosam natus cum asperiores repellendus
                            sit totam reprehenderit, recusandae, nobis non atque, accusantium
                            rerum in voluptatem modi eos facilis!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aliquam et iure laboriosam natus cum asperiores repellendus
                            sit totam reprehenderit, recusandae, nobis non atque, accusantium
                            rerum in voluptatem modi eos facilis!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aliquam et iure laboriosam natus cum asperiores repellendus
                            sit totam reprehenderit, recusandae, nobis non atque, accusantium
                            rerum in voluptatem modi eos facilis!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Aliquam et iure laboriosam natus cum asperiores repellendus
                            sit totam reprehenderit, recusandae, nobis non atque, accusantium
                            rerum in voluptatem modi eos facilis!
                        </p>
                    </div>
                </div>
                <div className='about_right'>
                    <div className='contact_info'>
                        <div>
                            <span><i className="fas fa-map-marker-alt"></i> Address</span><span>Jurija Gagarina</span>
                        </div>
                        <div>
                            <span><i className="fas fa-globe-europe"></i> Country, city</span><span>Belgrade, Serbia</span>
                        </div>
                        <div>
                            <span><i className="fas fa-building"></i> Open</span><span>7 days 24 hours</span>
                        </div>
                        <div>
                            <span><i className="fas fa-phone-alt"></i> Phone</span><span>+381631188180</span>
                        </div>
                        <div>
                            <span><i className="fas fa-envelope"></i> Email</span><span>timotijevicvlada@gmail.com</span>
                        </div>
                        
                    </div>
                    <div className="map_wrapper">
                        <iframe title="maps" className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7891.9956924302705!2d20.418345375365753!3d44.804718312263724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6fed7b272c33%3A0xfa6d33c859503953!2z0JrQvtC80YLRgNC10ZjQtA!5e0!3m2!1ssr!2srs!4v1635960369562!5m2!1ssr!2srs" style={{ border: 0 }} loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

