import React, { useState } from 'react'
import Navbar from './Navbar'
import abc from './../abc.png'
import ArrowDown from '@material-ui/icons/ArrowDownward'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import AddIcon from '@material-ui/icons/Add';
import Subtract from '@material-ui/icons/Minimize'
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import Facebook from '@material-ui/icons/Facebook';
import LinkDine from '@material-ui/icons/LinkedIn';
import Star from '@material-ui/icons/Star'


export default function Home() {
    const [id, setId] = useState('none')
    const list = [
        { question: 'How much does it cost annually to use CherriLearn?', answer: 'Rs 365 for Kannada medium and Rs 999 for English medium.' }
        , { question: 'Which device helps to use Cherrilearn?', answer: 'Mobile phones' },
        { question: 'Can CherryLearn be used an any mobile from the entered number?', answer: 'yes' }

    ]
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1// optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
            <div className='main-div '>
                <div className='home'>
                    <Navbar />
                    <div className='row mt-5'>
                        <div className='col-lg-5'>
                            <h1 style={{ textAlign: 'start', color: 'white', fontFamily: 'cursive', fontWeight: '600' }}><b style={{ color: '#a212ff', filter: 'drop-shadow(2px 2px 2px 2px #a212ff)' }}>1</b> to <b style={{ color: 'rgb(183 55 203)', filter: 'drop-shadow(2px 2px 2px 2px rgb(48 117 224))' }}>5</b> Standard</h1>
                            <h1 style={{ textAlign: 'start', color: 'white', fontFamily: 'cursive', fontWeight: '600' }}>Activity Based</h1>
                            <div style={{ textAlign: 'start', color: 'white' }}>
                                <span>CherryLearn Education interesting activities in English and Kannada based</span>
                                <span >on textbooks, technology systems to complement modern education grammar t</span>
                                <span >o boost confidence,</span>
                            </div>
                            <b className='medium'>Choose Your Medium</b>
                            <div className='m-div d-flex '>
                                <button className='btn btn-default ml-4' style={{ backgroundColor: '#a212ff', color: 'white' }}>English</button>
                                <button className='btn btn-default ml-2' style={{ backgroundColor: 'white', color: '#a212ff' }}>Kannada</button>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <img src={abc} style={{ height: '300px', width: '300px' }} />
                        </div>
                    </div>
                    <div className='row  topic'>
                        <div className='col-3'>
                            <div className='icon-div'>
                                <img src="https://classroomclipart.com/images/gallery/Clipart/Book_Clipart/student-sitting-on-stack-books-reading-clipart-5984.jpg" className='mt-2' style={{ height: '60px', width: '60px', borderRadius: '50%' }} />
                            </div>
                            <b>30000+</b>
                            <p>Numbers of students</p>
                        </div>
                        <div className='col-3'>
                            <div className='icon-div'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEShAYWmk1uO66p-c2ewOevwMu72_lPiYSq-YpJMfFL80i5qSIxaxjZVix0ouvfZRlJt4&usqp=CAU" className='mt-2' style={{ height: '60px', width: '60px', borderRadius: '50%' }} />
                            </div>
                            <b>25000+</b>
                            <p>Numbers of topic</p>
                        </div>
                        <div className='col-3'>
                            <div className='icon-div'>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnixPA7xH_Bpy08ziO6_0HkZ0YiGXgRuX7Kg&usqp=CAU" className='mt-2' style={{ height: '60px', width: '60px', borderRadius: '50%' }} />
                            </div>
                            <b>25+</b>
                            <p>Numbers of city located</p>
                        </div>
                        <div className='col-3'>
                            <div className='icon-div'>
                                <img src="https://png.pngtree.com/png-vector/20190121/ourlarge/pngtree-vector-like-icon-png-image_332943.jpg" className='mt-2' style={{ height: '60px', width: '60px', borderRadius: '50%' }} />
                            </div>
                            <b>5+</b>
                            <p>App Rates</p>
                        </div>

                    </div>
                    <h2 style={{ textAlign: 'center', fontFamily: 'cursive' }}>Whats's inside the <b style={{ color: '#a212ff', filter: 'drop-shadow(2px 2px 2px 2px #a212ff)' }}>CherryLearn</b>?</h2>
                    <div className='row   justify-content-around p-5'>
                        <div className='col-lg-3 col-sm-6 activity-div bg-white p-2'>
                            <img src="https://www.cherrilearn.com/static/media/Group1New.b5db1eff.png" style={{ height: '150px', width: '150px' }} />
                            <h5 style={{ fontFamily: 'cursive', fontWeight: '600' }}>Text based activities</h5>
                            <p style={{ fontSize: '15px', fontFamily: 'cursive' }}>Interactive and engaging activities based strictly based on textbook syllabus to super-charge learning ability</p>
                        </div>
                        <div className='col-lg-3 col-sm-6 activity-div bg-white p-2 '>
                            <img src="https://www.cherrilearn.com/static/media/Group2.e02f5b61.png" style={{ height: '150px', width: '150px' }} />
                            <h5 style={{ fontFamily: 'cursive', fontWeight: '600' }}>Engaging Animated Videos</h5>
                            <p style={{ fontSize: '15px', fontFamily: 'cursive' }}>Super-exciting visuals and carefully-crafted animations which highlight key topics in each course</p>
                        </div>
                        <div className='col-lg-3 col-sm-6 activity-div bg-white p-2 '>
                            <img src="https://www.cherrilearn.com/static/media/Group3.8a1c922b.png" style={{ height: '150px', width: '150px' }} />
                            <h5 style={{ fontFamily: 'cursive', fontWeight: '600' }}>Mock tests</h5>
                            <p style={{ fontSize: '15px', fontFamily: 'cursive' }}>Hundreds of practice tests designed in English and multiple regional languages to remove fear of exams</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='learning-div mt-2'>
                <div className='row div-row justify-content-around '>
                    <div className='col-lg-6  col-sm-12 right'>
                        <div style={{ textAlign: 'start' }} className='ml-5'>
                            <h1 style={{ fontFamily: 'cursive' }}>Encouraging <b style={{ color: '#a212ff', filter: 'drop-shadow(2px 2px 2px 2px #a212ff)' }}>children's</b></h1>
                            <h1 style={{ fontFamily: 'cursive', }}>
                                <b style={{ color: '#a212ff', filter: 'drop-shadow(2px 2px 2px 2px #a212ff)' }}>learning</b> potential</h1>
                        </div>
                        <div className='w-75 ml-5 mt-4'>
                            <p style={{ textAlign: 'start' }}>CherryLearn has thousands of interactive and interesting
                                activities in English and Kannada based on textbooks, technology
                                systems to complement modern education, mock tests and useful
                                quizzes and grammar to boost confidence.</p>
                        </div>
                        <button className='btn btn-default ml-5 download  d-flex' style={{ color: '#a212ff' }}>
                            Download <div className='arrow ml-1'><ArrowDown style={{ fontSize: '18px', color: 'white', fontWeight: '900' }} /></div></button>
                    </div>
                    <div className='col-lg-6 col-sm-12'>
                        <div><img className='potential' src='https://www.cherrilearn.com/static/media/right-learning-potential-new.fe129b92.png' />
                        </div>
                    </div>

                </div>
                <div ><h2 style={{ fontFamily: 'cursive' }}>An interesting</h2>
                    <h2> <b style={{ color: '#a212ff', filter: 'drop-shadow(2px 2px 2px 2px #a212ff)', fontFamily: 'cursive', }}>design for learning</b></h2></div>
                <div className='row slide'>
                    <div className='col-lg-3 col-sm-1'></div>
                    <div className='col-lg-6 col-sm-8' style={{ backgroundColor: '#a212ff', borderRadius: '10px' }}>
                        <h3 style={{ fontFamily: 'cursive', color: 'white' }} className='mt-3'>Subject</h3>
                        <p style={{ fontFamily: 'cursive', color: 'white' }}>Select the class to check your subjects</p>
                        <div className='d-flex justify-content-center'>
                            <select className='select'>
                                <option>1</option>
                                <option>2</option>
                                <option>2</option>
                            </select>
                            <select className='select ml-3'>
                                <option>1</option>
                                <option>2</option>
                                <option>2</option>
                            </select>
                        </div>
                        {/* <div className=''> */}

                        <Carousel responsive={responsive} swipeable={true} arrows={true} autoPlay={true} >
                            <div>
                                <div className='slider-box'>
                                    <img style={{ height: '150px', width: '100px' }} src="https://www.cherrilearn.com/static/media/pngwing1.89e73179.png" />
                                    <div style={{ backgroundColor: '#a025ed' }} className='subject'><b>Evs</b></div>
                                </div>
                            </div>
                            <div>
                                <div className='slider-box'>
                                    <img style={{ height: '150px', width: '100px' }} src="https://www.cherrilearn.com/static/media/pngwing2.0681fd6e.png" />
                                    <div className='subject' style={{ backgroundColor: '#1ac4fa' }}><b>English</b></div>
                                </div>
                            </div>
                            <div>
                                <div className='slider-box'>
                                    <img style={{ height: '150px', width: '100px' }} src="https://www.cherrilearn.com/static/media/pngwing3.fbf30912.png" />
                                    <div className='subject' style={{ backgroundColor: '#e122e5' }}><b>Kannada</b></div>
                                </div>
                            </div>
                            <div>
                                <div className='slider-box'>
                                    <img style={{ height: '150px', width: '100px' }} src="https://www.cherrilearn.com/static/media/pngwing1.89e73179.png" />
                                    <div className='subject' style={{ backgroundColor: '#a025ed' }}><b>Evs</b></div>
                                </div>
                            </div>
                            <div>  <div className='slider-box'>
                                <img style={{ height: '150px', width: '100px' }} src="https://www.cherrilearn.com/static/media/pngwing2.0681fd6e.png" />
                                <div className='subject' style={{ backgroundColor: '#1ac4fa' }}><b>English</b></div>
                            </div></div>
                            <div>
                                <div className='slider-box'>
                                    <img style={{ height: '150px', width: '100px' }} src="https://www.cherrilearn.com/static/media/pngwing3.fbf30912.png" />
                                    <div className='subject' style={{ backgroundColor: '#e122e5' }}><b>Kannada</b></div>
                                </div>
                            </div>
                            <div>
                                <div className='slider-box'>
                                    <img style={{ height: '150px', width: '100px' }} src="https://www.cherrilearn.com/static/media/pngwing1.89e73179.png" />
                                    <div className='subject' style={{ backgroundColor: '#a025ed' }}><b>Evs</b></div>
                                </div>
                            </div>
                            <div>                            <div className='slider-box'>
                                <img style={{ height: '150px', width: '100px' }} src="https://www.cherrilearn.com/static/media/pngwing2.0681fd6e.png" />
                                <div className='subject' style={{ backgroundColor: '#1ac4fa' }}><b>English</b></div>
                            </div></div>
                            <div>
                                <div className='slider-box'>
                                    <img style={{ height: '150px', width: '100px' }} src="https://www.cherrilearn.com/static/media/pngwing3.fbf30912.png" />
                                    <div className='subject' style={{ backgroundColor: '#e122e5' }}><b>Kannada</b></div>
                                </div>
                            </div>


                        </Carousel>
                        {/* </div> */}
                        <div className='d-flex img-div'>
                            <img src="https://www.cherrilearn.com/static/media/bgslider.a29fc18c.png" style={{ height: '200px', width: '100%' }} />

                        </div>




                    </div>

                </div>
                <div className='sm-div'>
                    <div className='row mt-5 '>
                        <div className='col-lg-6 col-sm-12'>
                            <div>
                                <img src='https://www.cherrilearn.com/static/media/educationGroup.09ba9198.png' style={{ height: '300px', width: '300px' }} />
                            </div>
                        </div>
                        <div className='col-lg-5  col-sm-10 slide justify-content-start'>
                            <div >
                                <h2 className='d-flex' style={{ fontFamily: 'cursive', }}>Support Child  <h2 style={{ color: '#a212ff', filter: 'drop-shadow(2px 2px 2px 2px #a212ff)', fontFamily: 'cursive', }}> Education</h2></h2>
                                <p style={{ textAlign: 'start' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry s standard dummy text ever since the
                                    1500s, when an unknown printer took a galley of type and scrambled it to make a
                                    type specimen book. It has survived not only five centuries,</p>
                                <button className='btn btn-default ' style={{ backgroundColor: '#a212ff', borderRadius: '10px', color: 'white', fontFamily: 'cursive', float: 'left' }}>Read more</button>
                            </div>
                        </div>

                    </div>
                    <div className='image-div'>
                        <h2 className='d-flex justify-content-center slide' style={{ fontFamily: 'cursive', }}><h2 className='mr-3' style={{ color: '#a212ff', filter: 'drop-shadow(2px 2px 2px 2px #a212ff)', fontFamily: 'cursive', }}> Parents </h2> talk</h2>

                        <div className='row'>
                            <div className='col-lg-1 col-sm-0 mr-1'>
                                <img src="https://www.cherrilearn.com/static/media/SBG.d3f75d86.png" className='girl-img' />
                            </div>
                            <div className='col-lg-10 col-sm-12 div-slider'>
                                <Carousel responsive={responsive} swipeable={true} arrows={false} autoPlay={true} showDots={true}>
                                    <div className='ml-2'>
                                        <div className='parents-div'>
                                            <img src="https://www.cherrilearn.com/static/media/meera.ed0d54bf.png" className='parents-img' />
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGdSURBVHgBvZeBcYJAEEX/MSmAErADUoGmg6SCmA6SDuhAOyBWoB1oKjCpADqQDjZ/B25EopE7Dt7Mn0Nnjr/sHneLgSciknBImp8VVRpjKowFDVMqo/Zym4LKqWeEgjdb3DH9L5hX+MLJMbWW4RRSl8vJPKGOEo6T9C1LY17IONwviYR98mukbb+oY55xSDEuW/rEf/6VOvVTsbK+phXAnsMC0zHjxlVG9ukdzXcYznlBakrEjbkMf1tO6m0X4QKOaPo4PFJr+KEbXWoD8Fr5evhQH7x8o0q4M4+k8156BvLJ4Yn6hhuJZiBGALQklJYkc5gWRwjPBg7l0ACCNREs55LDEedG5R6VBlBiINIc3bzM4VbS6kFXMieX6B9111wX8dZz/sGugQM8oPk73FLe5ccGsIEbSXN2rODP7qKJlbprmZLL5kTTKdNRWF/TCULrOXZDosyaswTdjegFAfeFG2TW/CrMwlLGI0cfRgqin3krCP0UKyQMfq+r1F1PLv7sqTmG0gqkCG1s4IjUe7/ePMHlwaPNSEl9uXym/wJlI26GlJ8iWgAAAABJRU5ErkJggg==" className='video' />
                                        </div>
                                        <div className='card slide'>
                                            <h4>Tulsi(Mother)</h4>
                                            <h6>Parents</h6>
                                            <p>My son had left behibd the lessons he had leared is school
                                                She used to be in defferent to curling up near the bookat
                                                home Hence Kaita patha was going to die there after
                                                downloading Cherrylearn you can learn the lessin taught at

                                                school by playing the game at

                                                home he tells the meaning o fthe words correctly.</p>
                                            <div className='d-flex'><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /></div>
                                        </div>
                                    </div>
                                    <div className='ml-2'>
                                        <div className='parents-div'>
                                            <img src="https://www.cherrilearn.com/static/media/meera.ed0d54bf.png" className='parents-img' />
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGdSURBVHgBvZeBcYJAEEX/MSmAErADUoGmg6SCmA6SDuhAOyBWoB1oKjCpADqQDjZ/B25EopE7Dt7Mn0Nnjr/sHneLgSciknBImp8VVRpjKowFDVMqo/Zym4LKqWeEgjdb3DH9L5hX+MLJMbWW4RRSl8vJPKGOEo6T9C1LY17IONwviYR98mukbb+oY55xSDEuW/rEf/6VOvVTsbK+phXAnsMC0zHjxlVG9ukdzXcYznlBakrEjbkMf1tO6m0X4QKOaPo4PFJr+KEbXWoD8Fr5evhQH7x8o0q4M4+k8156BvLJ4Yn6hhuJZiBGALQklJYkc5gWRwjPBg7l0ACCNREs55LDEedG5R6VBlBiINIc3bzM4VbS6kFXMieX6B9111wX8dZz/sGugQM8oPk73FLe5ccGsIEbSXN2rODP7qKJlbprmZLL5kTTKdNRWF/TCULrOXZDosyaswTdjegFAfeFG2TW/CrMwlLGI0cfRgqin3krCP0UKyQMfq+r1F1PLv7sqTmG0gqkCG1s4IjUe7/ePMHlwaPNSEl9uXym/wJlI26GlJ8iWgAAAABJRU5ErkJggg==" className='video' />
                                        </div>
                                        <div className='card slide'>
                                            <h4>Tulsi(Mother)</h4>
                                            <h6>Parents</h6>
                                            <p>My son had left behibd the lessons he had leared is school
                                                She used to be in defferent to curling up near the bookat
                                                home Hence Kaita patha was going to die there after
                                                downloading Cherrylearn you can learn the lessin taught at
                                                school by playing the game at
                                                home he tells the meaning o fthe words correctly.</p>
                                            <div className='d-flex'><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /></div>

                                        </div>
                                    </div>
                                    <div className='ml-2'>
                                        <div className='parents-div'>
                                            <img src="https://www.cherrilearn.com/static/media/meera.ed0d54bf.png" className='parents-img' />
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGdSURBVHgBvZeBcYJAEEX/MSmAErADUoGmg6SCmA6SDuhAOyBWoB1oKjCpADqQDjZ/B25EopE7Dt7Mn0Nnjr/sHneLgSciknBImp8VVRpjKowFDVMqo/Zym4LKqWeEgjdb3DH9L5hX+MLJMbWW4RRSl8vJPKGOEo6T9C1LY17IONwviYR98mukbb+oY55xSDEuW/rEf/6VOvVTsbK+phXAnsMC0zHjxlVG9ukdzXcYznlBakrEjbkMf1tO6m0X4QKOaPo4PFJr+KEbXWoD8Fr5evhQH7x8o0q4M4+k8156BvLJ4Yn6hhuJZiBGALQklJYkc5gWRwjPBg7l0ACCNREs55LDEedG5R6VBlBiINIc3bzM4VbS6kFXMieX6B9111wX8dZz/sGugQM8oPk73FLe5ccGsIEbSXN2rODP7qKJlbprmZLL5kTTKdNRWF/TCULrOXZDosyaswTdjegFAfeFG2TW/CrMwlLGI0cfRgqin3krCP0UKyQMfq+r1F1PLv7sqTmG0gqkCG1s4IjUe7/ePMHlwaPNSEl9uXym/wJlI26GlJ8iWgAAAABJRU5ErkJggg==" className='video' />
                                        </div>                                    <div className='card slide'>
                                            <h4>Tulsi(Mother)</h4>
                                            <h6>Parents</h6>
                                            <p>My son had left behibd the lessons he had leared is school
                                                She used to be in defferent to curling up near the bookat
                                                home Hence Kaita patha was going to die there after
                                                downloading Cherrylearn you can learn the lessin taught at
                                                school by playing the game at
                                                home he tells the meaning o fthe words correctly.</p>
                                            <div className='d-flex'><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /></div>

                                        </div>
                                    </div>
                                    <div className='ml-2'>
                                        <div className='parents-div'>
                                            <img src="https://www.cherrilearn.com/static/media/meera.ed0d54bf.png" className='parents-img' />
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGdSURBVHgBvZeBcYJAEEX/MSmAErADUoGmg6SCmA6SDuhAOyBWoB1oKjCpADqQDjZ/B25EopE7Dt7Mn0Nnjr/sHneLgSciknBImp8VVRpjKowFDVMqo/Zym4LKqWeEgjdb3DH9L5hX+MLJMbWW4RRSl8vJPKGOEo6T9C1LY17IONwviYR98mukbb+oY55xSDEuW/rEf/6VOvVTsbK+phXAnsMC0zHjxlVG9ukdzXcYznlBakrEjbkMf1tO6m0X4QKOaPo4PFJr+KEbXWoD8Fr5evhQH7x8o0q4M4+k8156BvLJ4Yn6hhuJZiBGALQklJYkc5gWRwjPBg7l0ACCNREs55LDEedG5R6VBlBiINIc3bzM4VbS6kFXMieX6B9111wX8dZz/sGugQM8oPk73FLe5ccGsIEbSXN2rODP7qKJlbprmZLL5kTTKdNRWF/TCULrOXZDosyaswTdjegFAfeFG2TW/CrMwlLGI0cfRgqin3krCP0UKyQMfq+r1F1PLv7sqTmG0gqkCG1s4IjUe7/ePMHlwaPNSEl9uXym/wJlI26GlJ8iWgAAAABJRU5ErkJggg==" className='video' />
                                        </div>                                    <div className='card slide'>
                                            <h4>Tulsi(Mother)</h4>
                                            <h6>Parents</h6>
                                            <p>My son had left behibd the lessons he had leared is school
                                                She used to be in defferent to curling up near the bookat
                                                home Hence Kaita patha was going to die there after
                                                downloading Cherrylearn you can learn the lessin taught at
                                                school by playing the game at
                                                home he tells the meaning o fthe words correctly.</p>
                                            <div className='d-flex'><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /></div>

                                        </div>
                                    </div>
                                    <div className='ml-2'>
                                        <div className='parents-div'>
                                            <img src="https://www.cherrilearn.com/static/media/meera.ed0d54bf.png" className='parents-img' />
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGdSURBVHgBvZeBcYJAEEX/MSmAErADUoGmg6SCmA6SDuhAOyBWoB1oKjCpADqQDjZ/B25EopE7Dt7Mn0Nnjr/sHneLgSciknBImp8VVRpjKowFDVMqo/Zym4LKqWeEgjdb3DH9L5hX+MLJMbWW4RRSl8vJPKGOEo6T9C1LY17IONwviYR98mukbb+oY55xSDEuW/rEf/6VOvVTsbK+phXAnsMC0zHjxlVG9ukdzXcYznlBakrEjbkMf1tO6m0X4QKOaPo4PFJr+KEbXWoD8Fr5evhQH7x8o0q4M4+k8156BvLJ4Yn6hhuJZiBGALQklJYkc5gWRwjPBg7l0ACCNREs55LDEedG5R6VBlBiINIc3bzM4VbS6kFXMieX6B9111wX8dZz/sGugQM8oPk73FLe5ccGsIEbSXN2rODP7qKJlbprmZLL5kTTKdNRWF/TCULrOXZDosyaswTdjegFAfeFG2TW/CrMwlLGI0cfRgqin3krCP0UKyQMfq+r1F1PLv7sqTmG0gqkCG1s4IjUe7/ePMHlwaPNSEl9uXym/wJlI26GlJ8iWgAAAABJRU5ErkJggg==" className='video' />
                                        </div>                                    <div className='card slide'>
                                            <h4>Tulsi(Mother)</h4>
                                            <h6>Parents</h6>
                                            <p>My son had left behibd the lessons he had leared is school
                                                She used to be in defferent to curling up near the bookat
                                                home Hence Kaita patha was going to die there after
                                                downloading Cherrylearn you can learn the lessin taught at
                                                school by playing the game at
                                                home he tells the meaning o fthe words correctly.</p>
                                            <div className='d-flex'><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /></div>

                                        </div>
                                    </div>
                                    <div className='ml-2'>
                                        <div className='parents-div'>
                                            <img src="https://www.cherrilearn.com/static/media/meera.ed0d54bf.png" className='parents-img' />
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGdSURBVHgBvZeBcYJAEEX/MSmAErADUoGmg6SCmA6SDuhAOyBWoB1oKjCpADqQDjZ/B25EopE7Dt7Mn0Nnjr/sHneLgSciknBImp8VVRpjKowFDVMqo/Zym4LKqWeEgjdb3DH9L5hX+MLJMbWW4RRSl8vJPKGOEo6T9C1LY17IONwviYR98mukbb+oY55xSDEuW/rEf/6VOvVTsbK+phXAnsMC0zHjxlVG9ukdzXcYznlBakrEjbkMf1tO6m0X4QKOaPo4PFJr+KEbXWoD8Fr5evhQH7x8o0q4M4+k8156BvLJ4Yn6hhuJZiBGALQklJYkc5gWRwjPBg7l0ACCNREs55LDEedG5R6VBlBiINIc3bzM4VbS6kFXMieX6B9111wX8dZz/sGugQM8oPk73FLe5ccGsIEbSXN2rODP7qKJlbprmZLL5kTTKdNRWF/TCULrOXZDosyaswTdjegFAfeFG2TW/CrMwlLGI0cfRgqin3krCP0UKyQMfq+r1F1PLv7sqTmG0gqkCG1s4IjUe7/ePMHlwaPNSEl9uXym/wJlI26GlJ8iWgAAAABJRU5ErkJggg==" className='video' />
                                        </div>                                    <div className='card slide'>
                                            <h4>Tulsi(Mother)</h4>
                                            <h6>Parents</h6>
                                            <p>My son had left behibd the lessons he had leared is school
                                                She used to be in defferent to curling up near the bookat
                                                home Hence Kaita patha was going to die there after
                                                downloading Cherrylearn you can learn the lessin taught at
                                                school by playing the game at
                                                home he tells the meaning o fthe words correctly.</p>
                                            <div className='d-flex'><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /></div>

                                        </div>
                                    </div>
                                    <div className='ml-2'>
                                        <div className='parents-div'>
                                            <img src="https://www.cherrilearn.com/static/media/meera.ed0d54bf.png" className='parents-img' />
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGdSURBVHgBvZeBcYJAEEX/MSmAErADUoGmg6SCmA6SDuhAOyBWoB1oKjCpADqQDjZ/B25EopE7Dt7Mn0Nnjr/sHneLgSciknBImp8VVRpjKowFDVMqo/Zym4LKqWeEgjdb3DH9L5hX+MLJMbWW4RRSl8vJPKGOEo6T9C1LY17IONwviYR98mukbb+oY55xSDEuW/rEf/6VOvVTsbK+phXAnsMC0zHjxlVG9ukdzXcYznlBakrEjbkMf1tO6m0X4QKOaPo4PFJr+KEbXWoD8Fr5evhQH7x8o0q4M4+k8156BvLJ4Yn6hhuJZiBGALQklJYkc5gWRwjPBg7l0ACCNREs55LDEedG5R6VBlBiINIc3bzM4VbS6kFXMieX6B9111wX8dZz/sGugQM8oPk73FLe5ccGsIEbSXN2rODP7qKJlbprmZLL5kTTKdNRWF/TCULrOXZDosyaswTdjegFAfeFG2TW/CrMwlLGI0cfRgqin3krCP0UKyQMfq+r1F1PLv7sqTmG0gqkCG1s4IjUe7/ePMHlwaPNSEl9uXym/wJlI26GlJ8iWgAAAABJRU5ErkJggg==" className='video' />
                                        </div>
                                        <div className='card slide'>
                                            <h4>Tulsi(Mother)</h4>
                                            <h6>Parents</h6>
                                            <p>My son had left behibd the lessons he had leared is school
                                                She used to be in defferent to curling up near the bookat
                                                home Hence Kaita patha was going to die there after
                                                downloading Cherrylearn you can learn the lessin taught at
                                                school by playing the game at
                                                home he tells the meaning o fthe words correctly.</p>
                                            <div className='d-flex'><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /><Star style={{ color: 'yellow' }} /></div>

                                        </div>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-10'>
                            <img src="https://www.cherrilearn.com/static/media/Groupqa.46d923e5.png" style={{ height: '400px', width: '400px' }} />
                        </div>
                        <div className='col-lg-5 col-sm-9 justify-content-start'>
                            <h2 className='d-flex justify-content-start ' style={{ fontFamily: 'cursive', }}>Frequntely Asked <h2 className='ml-2' style={{ color: '#a212ff', filter: 'drop-shadow(2px 2px 2px 2px #a212ff)', fontFamily: 'cursive', }}> Questions </h2> </h2>
                            <div className='btn-div d-flex'><h6 style={{ color: 'white' }}>what is cherrilearn?</h6></div>
                            <p style={{ textAlign: 'start' }} className='p-2'>CherryLearn has thousands of interactive and interesting activities in English and Kannada based on textbooks,technology systems to complement modern education,mock test and useful quizzes and grammar to boost confidence.</p>
                            {list.map((item, index) => (
                                <>
                                    <div className='d-flex quesn-div justify-content-between mt-2'>
                                        <h6>{item.question}</h6>
                                        <div >
                                            {id == index ? <Subtract style={{ fontSize: '20px' }} className='add' onClick={() => setId('none')} /> : <AddIcon style={{ fontSize: '20px' }} className='add' onClick={() => setId(index)} />}
                                        </div>
                                    </div>
                                    {id === index ? <div><h6>{item.answer}</h6></div> : ""}</>
                            ))}
                        </div>

                    </div>
                    <div className='row'>
                        <h2 className='d-flex justify-content-center col-12' style={{ fontFamily: 'cursive', }}>Cherri Learn <h2 className='ml-2' style={{ color: '#a212ff', filter: 'drop-shadow(2px 2px 2px 2px #a212ff)', fontFamily: 'cursive', }}> App </h2> </h2>
                        <div className='d-flex justify-content-center col-12'><button className='btn btn default' style={{ color: 'white', backgroundColor: '#a212ff', borderRadius: '10px' }}>Get Now App</button></div>
                        <div className='col-lg-12 mt-3 justify-content-center'>
                            <div className='d-flex justify-content-center'>
                                <div className='d-flex bg-white  play-icon p-2'>
                                    <img src="https://www.cherrilearn.com/static/media/icon.1a6dcc60.svg" style={{ width: '30px' }} />
                                    <div className=''>
                                        <h6>Get it on</h6>
                                        <b>App Store</b>
                                    </div>
                                </div>
                                <div className='d-flex bg-white  play-icon ml-4 p-2'>
                                    <img src="https://www.cherrilearn.com/static/media/a.87080dc3.svg" style={{ width: '30px' }} />
                                    <div className=''>
                                        <h6>Get it on</h6>
                                        <b>Google Play</b>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className='col-12'>
                            <img className='ml-3 mt-3 app-img' src="https://pbs.twimg.com/media/FfgpoRrUAAI9gJf.jpg" />
                        </div>

                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-4 col-sm-10'>
                            <img src="https://www.cherrilearn.com/static/media/footer1New.ff93729d.png" />
                        </div>
                        <div className='col-lg-5 col-sm-10 mt-5'>
                            <a className='navbar-logo mt-5'>
                                <img src="https://cherrilearn.fun/static/media/whiteLogo.42028c47.png" style={{ height: '150px', width: '150px' }} />
                            </a>

                            <p style={{ color: 'lightgray' }}>CherriLearn education interesting activities in English and Kannada based on testbooks.technology systems to complement modern education grammar to boost confidence.</p>
                            <h6 className='mt-2' style={{ fontFamily: 'cursive', color: 'white' }}>Download today</h6>
                            <div className='d-flex justify-content-center'>
                                <div className='d-flex bg-white  play-icon1 p-1'>
                                    <img src="https://www.cherrilearn.com/static/media/icon.1a6dcc60.svg" style={{ width: '30px' }} />
                                    <div className=''>
                                        <h6>Get it on</h6>
                                        <b>App Store</b>
                                    </div>
                                </div>
                                <div className='d-flex bg-white  play-icon1 ml-4 p-1'>
                                    <img src="https://www.cherrilearn.com/static/media/a.87080dc3.svg" style={{ width: '30px' }} />
                                    <div className=''>
                                        <h6>Get it on</h6>
                                        <b>Google Play</b>
                                    </div>
                                </div>
                            </div>
                            <ul className='mt-4 footer' >
                                <li className='about'>About us</li>
                                <li className=' ml-4'>Careers</li>
                                <li className=' ml-4'>Privacy Policy</li>
                                <li className=' ml-4'>Terms and Conditions</li>
                                <li className=' ml-4' >Conact US</li>
                            </ul>
                            <ul className='mt-4 icon-footer' >
                                <li className=''><Twitter style={{ fontSize: '20px' }} className='add' /></li>
                                <li className=' ml-4'><LinkDine style={{ fontSize: '20px' }} className='add' /></li>
                                <li className=' ml-4'><Instagram style={{ fontSize: '20px' }} className='add' /></li>
                                <li className=' ml-4'><Facebook style={{ fontSize: '20px' }} className='add' /></li>
                                {/* <li className=' ml-4' ><AddIcon style={{ fontSize: '20px' }} className='add' onClick={() => setId(index)} /></li> */}
                            </ul>
                        </div>
                        <div className='col-3'>
                            <img src='https://www.cherrilearn.com/static/media/footer2New.917b698f.png' />
                        </div>
                        <div className='row'>
                            {/* <div style={{}}> */}
                            <img src="https://www.cherrilearn.com/static/media/footerbottom.3de4f04c.png" style={{ width: '100%', height: '200px' }} />
                            {/* </div> */}
                        </div>

                    </div>


                    {/* </div> */}
                </div>

            </div>
        </>

    )
}
