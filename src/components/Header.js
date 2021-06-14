import PropTypes from 'prop-types'
import '../index.css'
import  Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    const onClick = () => {
        console.log('Click')
    }
    return (
        <div className='App'>
            <header class='header'>
                <h1>{title}</h1>
                <Button color={showAdd ?'red':'green'} text={showAdd ?'Close':'Add'} onClick={onAdd}/>
            </header>
        </div>

    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header