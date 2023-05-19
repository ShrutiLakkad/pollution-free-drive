import logo from '../../../assets/images/amc-3.png';

const HeaderContain: React.FC<any>= () => {
    return (

    <div className='header'>
        <div className='header-container'>
            <img className="header-logo"src={logo} alt="logo"></img>
            <h3 className='text'>Pollution Free Ahmedabad</h3>
        </div>
    </div>
    )
}
export default HeaderContain;