import './CoolButton.css';

const CoolButton = (props) => {
    const { btnClass, title } = props;

    return (
        <button className={btnClass}>{title}</button>
    )
}

export default CoolButton;