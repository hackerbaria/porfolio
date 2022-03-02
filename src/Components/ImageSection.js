import React from 'react'
import styled from 'styled-components';
import resume from '../img/avatar2.jpg';
// import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Thong NGUYEN</span></h4>
                <p className="paragraph">
                    I have about 8 years experiences with Java
                    Good knowledge about Java 11, micro services, AWS, Spring & Spring boot framework, Hibernate, some common databases
                    Ability to apply many design patters and best practices in the project
                    Have about 3 year’s experiences with front-end frameworks: Angular, React JS
                    Can work as a full stack developer as well as mobile developer
                    Ability research as well as adapting new technology/ framework
                    Have a lot experiences with Scrum -Agile methodology: Scrum
                    Have ability to communicate directly with clients from many countries like Indian, Chinese, Singapore, German…
                    Willing to learn and work under high pressure.
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Year of Birth</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Location</p>
                        <p>Service</p>
                    </div>
                    <div className="info">
                        <p>: Thong NGUYEN</p>
                        <p>: 1991</p>
                        <p>: Viet Nam </p>
                        <p>: English, Vietnamese </p>
                        <p>: Vung Tau</p>
                        <p>: Freelance</p>
                    </div>
                </div>
                {/* <PrimaryButton title={'Download Cv'} /> */}
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
