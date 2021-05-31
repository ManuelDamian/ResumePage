import React, {Component }from 'react'
import "./index.css"
import PP from '../../ImageComponents/profile-avatar.jpg'
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText';
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSkype, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'

class Principal extends Component {
    render() {  
        return(
            <div id="principal">
                <section id="Home" className="container inicio">
                    <div className="portada">
                        <div className="imagen-Conteiner">
                            <img className="avatar-manuel" alt="Manuel Damian" src={PP}/>
                        </div>
                        <div className="landing-info">
                            <h1>Software Engineer</h1>
                            <hr/>
                            <h3>Experience with</h3>
                            <p> ServiceNow | Java | JavaScript | React | Unix | SQL </p>
                        </div>
                    </div>
                </section>
                <div className="contenido">
                    <section id="aboutinfo" className="aboutmecont">
                        <div className="container-info">
                            <div className="container-text">
                                <h1>Hello!<span> I am Manuel Damián</span></h1>
                                <hr />
                                <p>I am a software engineer with experience in development, production support and application support, including tickets 
                                    management, environment control, systems and applications monitoring and incident management. Enthusiastic and 
                                    responsible team player, dedicated on work, efficiently solving project issues</p>
                                <p>I got my bachelor’s degree at Facultad de 
                                    Telematica at the University of Colima where I was able to learn 
                                    different types of programming languages and IDE for developing. I 
                                    had the opportunity to work in different projects as my period of student</p>
                                <p>Some of the experience as android developer using Java and Android Studio I got was at Rasoft as part of mobile development team focused on different 
                                    areas such as: health, tourism, emergencies, education, and traffic.   </p>
                                <p>Learned about the produccion support at TCS as part QAMP( Quality Assurance & 
                                Production Management ) team where I got used to Unix CLI, ServiceNow, Zookeeper, SQL, Jira and Autosys for mantainnig
                                    application and Environments in optimal conditions. 
                                </p>
                            </div>
                        </div>
                    </section>
                    <section id="skillsinfo"className="skillscont">
                        <div className="allskills">
                            <h2 className="title">Skills</h2>
                            <p>I have worked with the next tools, languages, and applications:</p>
                            <div className="skills">
                                <div className="one-skill">
                                    <li>Service Now</li>
                                    <li>Jira</li>
                                    <li>Unix / Linux</li>
                                    <li>SQL</li>
                                    <li>Autosys</li>
                                    <li>Java</li>
                                </div>
                                <hr/>
                                <div className="one-skill">
                                    <li>Zookeeper</li>
                                    <li>DB2</li>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Application Support</li>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="workinfo" className="workinfocont">
                    <div className="allWorkItems">
                            <h2 className="title">Work History</h2>
                            <div className="works">
                                <div className="one-work">
                                    <h3>APPLICATION SUPPORT, SOFTTEK</h3>
                                    <p>(NOV 2019 – JUL 2020)</p>
                                    <li>Vertica DB for database management</li>
                                    <li>Unix for application and systems monitoring.</li>
                                    <li>Service Now for ticket response and time tracking</li>
                                    <li>Outlook and Microsoft Teams - for communication with team members and service with users</li>
                                </div>
                                <div className="one-work">
                                    <h3>PRODUCTION SUPPORT, TATA CONSULTANCY SERVICES</h3>
                                    <p>(NOV 2019 – JUL 2020)</p>
                                    <li>Ticket Management and time tracking with Service Now.</li>
                                    <li>Autosys for job control as monitoring and scheduling.</li>
                                    <li>Unix for environment and users management</li>
                                    <li>Zookeeper as centralized service for environment configuration</li>
                                    <li>DB2 data management</li>
                                    <li>Jira for develop and scheduling major changes on Environments.
                                    </li>
                                </div>
                                <div className="one-work">
                                    <h3>DEVELOPER, RASOFT</h3>
                                    <p>(JAN 2015 - JUN 2017)</p>
                                    <li>Use of Android Studio and Java for android applications as part of development team.</li>
                                    <li>QT and C++ for hybrid applications as desktop - mobile applications in some projects.</li>
                                    <li>SQLite for database implementation.</li>
                                    <li>Git for version control system.</li>
                                </div>
                                <div className="one-work">
                                    <h3>UNIVERSIDAD DE COLIMA (STUDENT)</h3>
                                    <p>(AUG 2013 – DEC 2014)</p>
                                    <li>Brackets {} as IDE for HTML coding.</li>
                                    <li> HTML & CSS as Language for developing and styling a web page. </li>
                                    <li>Visual Studio as IDE for Desktop apps in C# language on windows</li>
                                    <li>C# as programming language on Visual Studio</li>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="contactinfo" className="contactcont">
                <div className="allContact">
                        <h2 className="title">Contact Me</h2>
                        <p>Here you can reach me! </p>
                        <List className="list-container" >
                            <ListItem>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faAt} style={{fontSize:'40px', color:"#036335"}} />
                                </ListItemIcon>
                                <ListItemText>
                                    <h3>manueldamian@outlook.com</h3>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faLinkedin} style={{fontSize:'40px', color: "#2867B2"}} />
                                </ListItemIcon>
                                <ListItemText>
                                    <a href="https://www.linkedin.com/in/manuel-damian" ><Button>Linked In</Button></a>
                                    
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faPhoneAlt} style={{fontSize:'35px', color: "#7fc15e"}} />
                                </ListItemIcon>
                                <ListItemText>
                                    <h3>312-105-3821</h3>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <FontAwesomeIcon icon={faSkype} style={{fontSize:'40px', color:"#00aff0"}}/>
                                </ListItemIcon>
                                <ListItemText>
                                <h3>manuel.damian1</h3>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </div>
                </section>
                </div>
            </div>
        )
    }   
}

export default Principal