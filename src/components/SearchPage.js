import React from 'react';
import SearchComponent from '../containers/search';
import {HeaderComponent} from './header';

export const SearchPageComponent=()=>(

	<div id='SearchPageWrapper'>
		<HeaderComponent/>
		<div className='BorderSection'></div>
		<SearchComponent/>
	</div>
	);
