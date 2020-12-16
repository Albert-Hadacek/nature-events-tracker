import {Icon} from '@iconify/react'
import fire from "@iconify/icons-mdi/fire"
import exclamation from "@iconify/icons-mdi/exclamation"
import sun from '@iconify/icons-bx/bx-sun';
import dust from '@iconify/icons-vscode-icons/file-type-dustjs';
import earthquake from '@iconify/icons-ri/earthquake-line';
import water from '@iconify/icons-fa-solid/water';
import mountain from '@iconify/icons-fa-solid/mountain';
import human from '@iconify/icons-mdi/human-greeting';
import sea from '@iconify/icons-whh/sea';
import storm from '@iconify/icons-wi/storm-showers';
import snow from '@iconify/icons-ion/snow';
import hot from '@iconify/icons-carbon/temperature-hot';
import volcano from '@iconify/icons-maki/volcano-11';
import waterDrop from '@iconify/icons-ion/water-outline';




const pickIcon = (catId) => {
    switch (catId) {
        case 6:
            return [sun, "yellow"]
        case 7:
            return [dust, "brown"]
        case 16:
            return [earthquake , "grey"]
        case 9:
            return [water, "blue"]
        case 14:
            return [mountain, "darkgrey"]
        case 19:
            return [human, "black"]
        case 15:
            return [sea, "darkblue"]
        case 10:
            return [storm, "cornflowerblue"]
        case 17:
            return [snow, "whitesmoke"]
        case 18:
            return [hot, "orange"]
        case 12:
            return [volcano, "tomato"]
        case 13:
            return [waterDrop, "springgreen"]
        case 8:
            return [fire, "red"]
        default:
            return [exclamation, "darkred"]


    }
}


const Marker = ({onClick, catId}) => {
    const [icon, color] = pickIcon(catId)
    return (
        <div className="marker" onClick={onClick}>
            <Icon icon={icon} style={{color: color}} className="marker-icon"/>
        </div>
    );
};

export default Marker;