import EventPreventDefault from "./EventPreventDefault";
import EventPropagation from "./EventPropagation";
import './Lesson9.scss';

const Lesson9 = (props) => {
    return (
        <div className="lesson9-container">
            {/* <EventPreventDefault /> */}
            <EventPropagation />
        </div>
    )
}

export default Lesson9;