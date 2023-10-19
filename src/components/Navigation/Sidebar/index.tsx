import meditation from "./assets/meditation.svg";
import swim from "./assets/swimming.svg";
import biking from "./assets/biking.svg";
import bodyBuilding from "./assets/dumbbell.svg";
import "./style.scss";

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="icons">
                <i><img alt='icon-image' title='image' src={meditation}></img></i>
                <i><img alt='icon-image' title='image' src={swim}></img></i>
                <i><img alt='icon-image' title='image' src={biking}></img></i>
                <i><img alt='icon-image' title='image' src={bodyBuilding}></img></i>
            </div>

            <p className='copyright'>Copyright, SportSee 2020</p>
        </div>
    );
}