import React from 'react';
import AllProjects from '../src/components/AllProjects/AllProjects';
import MainContainer from '../src/components/MainContainer/MainContainer';

const Objects = () => {
	return (
		<MainContainer title={'Наши объекты'} keywords={"сип дома строительство объекты"}>
			<AllProjects />
		</MainContainer>
	);
}

export default Objects;
