import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi, I'm <span>Thong NGUYEN</span></h1>
                <p>
                    I am a full stack Java developer with 8 years experiences. My strongest is java (Java 11) and spring, spring boot frameworks, hibernate and some ORM
                    Also having experiences with some Javascript frameworks like Angular, ReactJS and Vue js
                    Database: I'm familar with MySQL, SQL Sever, Oracle as well as no SQL like DymamoDB and MongoDB
                    Mobile: I know about Java Android and using some cross plaforms like Native script to build Mobile app for both Android and IOS 
                    English: advance level, can communicate (speaking and wring email) with end user and clients without any problems
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/thongonline/" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://github.com/hackerbaria" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/thong-eric-1b2718225/" className="icon i-youtube">
                        <LinkedInIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`;

export default HomePage;
