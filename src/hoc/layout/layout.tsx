import { PropsWithChildren } from 'react';
import HeaderContain from '../../shared/components/navigation/header';

const Layout: React.FC<PropsWithChildren> = (props) => {
	return (
		<div id='wrapper'>
			<div id='page-wrapper' className='full--width'>
			<div className='page-container'>
					<HeaderContain />
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default Layout;
