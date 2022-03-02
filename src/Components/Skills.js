import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'Java'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'Spring'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'Spring boot'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'Hibernate'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'ORM'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'NODEJS'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'GIT'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'SASS'}
                            width={'85%'}
                            text={'85%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
